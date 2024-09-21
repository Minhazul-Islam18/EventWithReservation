<?php

namespace Tests\Feature;

use App\Models\Admin;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class UserAuthenticationTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function it_can_authenticate_a_user()
    {
        // Create a new user instance using the factory
        $user = Admin::factory()->create();

        // Simulate the user being logged in
        $this->actingAs($user, 'admin');

        // Assert that the user is authenticated
        $this->assertAuthenticatedAs($user, 'admin');

        // Assert that the authenticated user matches the user we created
        $this->assertEquals($user->id, auth()->id());
    }
}
