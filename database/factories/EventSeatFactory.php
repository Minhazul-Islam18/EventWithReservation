<?php

namespace Database\Factories;

use App\Models\EventSeat;
use Illuminate\Database\Eloquent\Factories\Factory;

class EventSeatFactory extends Factory
{
    protected $model = EventSeat::class;

    public function definition()
    {
        return [
            'event_id' => \App\Models\Event::factory(),
            'seat_number' => $this->faker->unique()->numberBetween(1, 100),
            'status' => 'available',
        ];
    }
}
