<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Event;
use App\Models\EventSeat;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class EventController extends Controller
{
    public function create()
    {
        return Inertia::render('Module/Event/Form');
    }


    public function index()
    {
        $events = Event::all();
        return Inertia::render('Module/Event/Index', ['events' => $events]);
    }

    public function edit(Event $event)
    {
        return Inertia::render('Module/Event/Form', ['event' => $event]);
    }

    public function show(Event $event)
    {
        $event = $event->load('seats');
        return Inertia::render('Module/Event/Details', [
            'event' => $event
        ]);
    }

    public function destroy(Event $event)
    {
        $event->delete();
        return redirect()->route('admin.events.index')->with('success', 'Event deleted successfully.');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'event_date' => 'required|date',
            'total_seats' => 'required|integer|min:1',
        ]);

        DB::transaction(function () use ($validated) {
            $event = Event::create([
                'title' => $validated['title'],
                'description' => $validated['description'],
                'event_date' => $validated['event_date'],
                'total_seats' => $validated['total_seats'],
                'available_seats' => $validated['total_seats'],
            ]);

            // Create seats
            for ($i = 1; $i <= $validated['total_seats']; $i++) {
                EventSeat::create([
                    'event_id' => $event->id,
                    'seat_number' => $i,
                    'status' => 'available',
                ]);
            }
        });
        return redirect()->route('admin.events.index')->with('success', 'Event created successfully.');
    }

    public function update(Request $request, Event $event)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'event_date' => 'required|date',
            'total_seats' => 'nullable|integer|min:1',
        ]);

        DB::transaction(function () use ($validated, $event) {
            // Check if any seats are booked
            $hasBookedSeats = $event->seats()->where('status', 'booked')->exists();

            // Only update total_seats if no seats are booked
            if (!$hasBookedSeats) {
                $event->total_seats = $validated['total_seats'];
                $event->save();
            }

            // Update other event details
            $event->update($validated);

            // Update seats if total_seats have changed
            $currentTotalSeats = $event->seats()->count();
            $newTotalSeats = $validated['total_seats'] ?? $currentTotalSeats;

            if ($newTotalSeats > $currentTotalSeats) {
                for ($i = $currentTotalSeats + 1; $i <= $newTotalSeats; $i++) {
                    EventSeat::create([
                        'event_id' => $event->id,
                        'seat_number' => $i,
                        'status' => 'available',
                    ]);
                }
            } elseif ($newTotalSeats < $currentTotalSeats) {
                $seatsToRemove = $currentTotalSeats - $newTotalSeats;
                EventSeat::where('event_id', $event->id)
                    ->orderBy('seat_number', 'desc')
                    ->take($seatsToRemove)
                    ->delete();
            }
        });

        return redirect()->route('admin.events.index')->with('success', 'Event updated successfully.');
    }
}
