<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Event;
use Illuminate\Http\Request;

class EventController extends Controller
{
    public function create()
    {
        return Inertia::render('Module/Event/Form');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'event_date' => 'required|date',
            'total_seats' => 'required|integer|min:1',
            'available_seats' => 'required|integer|min:1|max:' . $request->total_seats,
        ]);

        Event::create($validated);

        return redirect()->route('admin.events.index')->with('success', 'Event created successfully.');
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
        return Inertia::render('Module/Event/Details', ['event' => $event]);
    }

    public function destroy(Event $event)
    {
        dd($event);
    }

    public function update(Request $request, Event $event)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'event_date' => 'required|date',
            'total_seats' => 'required|integer|min:1',
            'available_seats' => 'required|integer|min:1|max:' . $request->total_seats,
        ]);

        $event->update($validated);

        return redirect()->route('admin.events.index')->with('success', 'Event updated successfully.');
    }
}
