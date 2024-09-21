<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Models\Admin;
use App\Models\Event;
use App\Models\EventSeat;
use App\Models\EventBooking;
use Illuminate\Http\Response;
use Illuminate\Foundation\Testing\RefreshDatabase;

class SeatBookingControllerTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function it_can_reserve_seats()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');

        $this->withoutMiddleware(\App\Http\Middleware\VerifyCsrfToken::class);

        $user = User::factory()->create();
        $event = Event::factory()->create(['available_seats' => 5]);

        // Create available seats
        foreach (range(1, 5) as $seatNumber) {
            EventSeat::factory()->create([
                'event_id' => $event->id,
                'seat_number' => $seatNumber,
                'status' => 'available',
            ]);
        }

        // Make the reservation request
        $response = $this->postJson(route('admin.seats.reserve', $event->id), [
            'seats' => [1, 2],
        ]);

        // Assert successful booking
        $response->assertStatus(Response::HTTP_FOUND);
        $this->assertDatabaseHas('event_bookings', [
            'event_id' => $event->id,
            'user_id' => $user->id,
            'seats' => json_encode([1, 2]),
        ]);
        $this->assertDatabaseHas('event_seats', [
            'event_id' => $event->id,
            'seat_number' => 1,
            'status' => 'booked',
        ]);
        $this->assertDatabaseHas('event_seats', [
            'event_id' => $event->id,
            'seat_number' => 2,
            'status' => 'booked',
        ]);
        $this->assertEquals(3, $event->fresh()->available_seats);
    }

    /** @test */
    public function it_returns_error_if_user_not_authenticated()
    {
        // Create an event
        $event = Event::factory()->create();

        $response = $this->withoutMiddleware()->postJson(route('admin.seats.reserve', $event->id), [
            'seats' => [1, 2],
        ]);

        $response->assertStatus(Response::HTTP_UNAUTHORIZED);
        $response->assertJson(['message' => 'User not authenticated']);
    }

    /** @test */
    public function it_returns_warning_if_seats_are_already_booked()
    {
        $this->withoutMiddleware(\App\Http\Middleware\VerifyCsrfToken::class);

        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');

        $user = User::factory()->create();
        $event = Event::factory()->create(['available_seats' => 5]);

        EventSeat::factory()->create([
            'event_id' => $event->id,
            'seat_number' => 1,
            'status' => 'booked',
        ]);

        // Create available seats
        foreach (range(2, 5) as $seatNumber) {
            EventSeat::factory()->create([
                'event_id' => $event->id,
                'seat_number' => $seatNumber,
                'status' => 'available',
            ]);
        }

        $this->actingAs($user);

        // Make the reservation request
        $response = $this->postJson(route('admin.seats.reserve', $event->id), [
            'seats' => [1, 2],
        ]);

        // Assert warning about already booked seats
        $response->assertStatus(302);
        $response->assertSessionHas('warning', 'Some seats are already booked: 1');
    }
}
