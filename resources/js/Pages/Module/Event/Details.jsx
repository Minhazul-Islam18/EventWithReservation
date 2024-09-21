import React from "react";
import { router, usePage } from "@inertiajs/react";
import MainLayout from "../../Layout/Mainlayout";
import { useForm } from "react-hook-form";
import { IconCalendar } from "@tabler/icons-react";

const Details = () => {
    const { event } = usePage().props || {};

    return (
        <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-6">Event details</h1>
            {/* Event Title */}
            <h3>{event?.title}</h3>

            {/* Event Description */}
            <p>{event?.description}</p>

            {/* Event Date */}
            <span className="flex items-center justify-start">
                <IconCalendar />
                {event?.event_date}
            </span>

            {/* Total Seats */}
            <span className="block">Total seats: {event?.total_seats}</span>

            {/* Available Seats */}
            <span className="block">
                Availbale seats: {event?.available_seats}
            </span>
        </div>
    );
};

// Define layout and title dynamically based on action (Create or Edit)
Details.layout = (page) => (
    <MainLayout
        children={page}
        title={`Event details || ${page.props.event?.title}`}
    />
);

export default Details;
