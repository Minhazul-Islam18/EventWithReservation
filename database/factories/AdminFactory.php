<?php

namespace Database\Factories;

use App\Models\Admin;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class AdminFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Admin::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'username' => $this->faker->userName,
            'first_name' => $this->faker->firstName,
            'last_name' => $this->faker->lastName,
            'email' => $this->faker->unique()->safeEmail,
            'status' => $this->faker->randomElement([1, 0]), // Assuming status is a string
            'mobile' => $this->faker->phoneNumber,
            'gender' => $this->faker->randomElement(['male', 'female', 'other']), // Assuming gender is a string
            'date_of_birth' => $this->faker->date(),
            'avatar' => $this->faker->imageUrl(), // Optional: assuming avatar is a URL
            'password' => Hash::make('password'), // Default password or use 'password' => bcrypt('password')
            'remember_token' => Str::random(10),
        ];
    }
}
