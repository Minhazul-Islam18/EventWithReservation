<?php


namespace Database\Factories;

use App\Models\Event;
use Illuminate\Database\Eloquent\Factories\Factory;

class EventFactory extends Factory
{
    protected $model = Event::class;

    public function definition()
    {
        return [
            'title' => $this->faker->sentence,
            'description' => $this->faker->paragraph,
            'event_date' => $this->faker->dateTimeBetween('now', '+1 month'),
            'total_seats' => $this->faker->numberBetween(50, 200),
            'available_seats' => $this->faker->numberBetween(1, 200),
        ];
    }
}
