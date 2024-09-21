<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    /**
     * Get all of the comments for the Event
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function seats()
    {
        return $this->hasMany(EventSeat::class);
    }

    /**
     * Check if any seats are booked for the event.
     *
     * @return bool
     */
    public function hasBookedSeats()
    {
        return $this->seats()->where('status', 'booked')->exists();
    }
}
