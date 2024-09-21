<?php

namespace Tests\Feature;

use App\Models\Admin;
use App\Models\Event;
use App\Models\EventSeat;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class EventControllerTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->withoutMiddleware(\App\Http\Middleware\VerifyCsrfToken::class);
    }

    /** @test */
    public function it_can_authenticate_a_user()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');
        $this->assertAuthenticatedAs($admin, 'admin');
        $this->assertEquals($admin->id, auth()->id());
    }

    /** @test */
    public function test_the_application_redirects_to_login()
    {
        $response = $this->get('/');
        $response->assertStatus(302);
    }

    /** @test */
    public function test_it_can_create_an_event()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');

        $eventData = [
            'title' => 'Sample Event',
            'description' => 'Sample Description',
            'event_date' => now()->addDays(5)->toDateString(),
            'total_seats' => 100,
        ];

        // Make POST request to store the event
        $response = $this->post(route('admin.events.store'), $eventData);

        // Assert redirection and success message
        $response->assertRedirect(route('admin.events.index'));
        $response->assertSessionHas('success', 'Event created successfully.');

        $this->assertDatabaseHas('events', [
            'title' => 'Sample Event',
            'description' => 'Sample Description',
        ]);
    }

    /** @test */
    public function it_can_update_an_event_and_adjust_seats()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');

        $event = Event::factory()->create([
            'total_seats' => 10,
            'available_seats' => 10,
        ]);

        for ($i = 1; $i <= 10; $i++) {
            EventSeat::create([
                'event_id' => $event->id,
                'seat_number' => $i,
                'status' => 'available',
            ]);
        }

        $updatedData = [
            'title' => 'Updated Event Title',
            'description' => 'Updated description',
            'event_date' => '2025-01-01',
            'total_seats' => 15,
        ];

        $response = $this->put(route('admin.events.update', $event->id), $updatedData);

        $response->assertRedirect(route('admin.events.index'));
        $response->assertSessionHas('success', 'Event updated successfully.');

        $this->assertDatabaseHas('events', [
            'id' => $event->id,
            'title' => 'Updated Event Title',
            'description' => 'Updated description',
            'total_seats' => 15,
        ]);

        $this->assertDatabaseCount('event_seats', 15);
    }

    /** @test */
    public function it_can_show_event_details_with_seats()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');

        $event = Event::factory()->create(['total_seats' => 5]);

        for ($i = 1; $i <= 5; $i++) {
            EventSeat::create([
                'event_id' => $event->id,
                'seat_number' => $i,
                'status' => 'available',
            ]);
        }

        $response = $this->get(route('admin.events.details', $event->id));

        $response->assertStatus(200);
        $response->assertInertia(
            fn(Assert $page) => $page
                ->component('Module/Event/Details')
                ->has(
                    'event',
                    fn($page) => $page
                        ->where('id', $event->id)
                        ->where('title', $event->title)
                        ->where('description', $event->description)
                        ->where('event_date', $event->event_date->format('Y-m-d'))
                        ->where('total_seats', $event->total_seats)
                        ->where('available_seats', $event->available_seats)
                        ->where('created_at', $event->created_at->toISOString())
                        ->where('updated_at', $event->updated_at->toISOString())
                        ->has('seats', 5)
                )
        );
    }

    /** @test */
    public function it_can_delete_an_event()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');

        $event = Event::factory()->create();

        $response = $this->delete(route('admin.events.destroy', $event->id));

        $response->assertRedirect(route('admin.events.index'));
        $this->assertDatabaseMissing('events', ['id' => $event->id]);
    }
}
