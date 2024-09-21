<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Event;
use App\Models\EventSeat;
use App\Models\EventBooking;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SeatBookingController extends Controller
{
    public function reserve(Request $request, $eventId)
    {
        if (!auth()->check()) {
            return response()->json(['message' => 'User not authenticated'], 401);
        }

        // Validate request
        $request->validate([
            'seats' => 'required|array',
            'seats.*' => 'exists:event_seats,seat_number',
        ]);

        $event = Event::findOrFail($eventId);

        try {
            DB::transaction(function () use ($request, $eventId, $event) {
                // Get seats that are already booked
                $bookedSeats = EventSeat::where('event_id', $eventId)
                    ->whereIn('seat_number', $request->seats)
                    ->where('status', 'booked')
                    ->get();

                // If some of the requested seats are already booked, return an error with those seat numbers
                if ($bookedSeats->count() > 0) {
                    return back()->with('warning', 'Some seats are already booked: ' . $bookedSeats->pluck('seat_number')->implode(', '));
                }

                // Lock the available seats for update and mark them as booked
                EventSeat::where('event_id', $eventId)
                    ->whereIn('seat_number', $request->seats)
                    ->where('status', 'available')
                    ->lockForUpdate()
                    ->update(['status' => 'booked']);

                // Create the booking record after seats have been booked
                EventBooking::create([
                    'event_id' => $eventId,
                    'user_id' => 1 ?? auth()->id(),
                    'seats' => json_encode($request->seats),
                ]);
                $event->decrement('available_seats', count($request->seats));
            });

            // Return a successful response with the booked seats
            return to_route('admin.events.details', ['event' => $event->id])->with('success', 'Booking successfull');
        } catch (\Exception $e) {
            // Handle the case where seats are already booked
            return back()->with(
                'warning',
                $e->getMessage()
            );
        }
    }
}
