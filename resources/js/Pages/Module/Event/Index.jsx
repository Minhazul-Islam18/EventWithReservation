import React from "react";
import { Link } from "@inertiajs/react";
import MainLayout from "../../Layout/Mainlayout";
import { Button } from "@mantine/core";

const EventList = ({ events }) => {
    return (
        <div className="max-w-5xl mx-auto py-8">
            <h1 className="text-3xl font-bold mb-6">Events</h1>
            <Link
                href={"/admin/events/create"}
                className="bg-green-500 text-white px-4 py-2 rounded-lg"
            >
                Create New Event
            </Link>
            <div className="mt-8">
                <ul>
                    {events.map((event) => (
                        <li
                            key={event.id}
                            className="mb-4 border p-4 rounded-lg"
                        >
                            <h2 className="text-xl font-bold">{event.title}</h2>
                            <p>{event.description}</p>
                            <p>Date: {event.event_date}</p>
                            <p>Total Seats: {event.total_seats}</p>
                            <p>Available Seats: {event.available_seats}</p>
                            {/* Add booking functionality later */}
                            <div className="flex flex-row gap-2 items-center justify-start">
                                <Link
                                    href={`/admin/events/${event.id}/details`}
                                    method="get"
                                >
                                    {" "}
                                    <Button color="green">View</Button>{" "}
                                </Link>

                                <Link
                                    href={`/admin/events/${event.id}/edit`}
                                    method="get"
                                >
                                    {" "}
                                    <Button color="sky">Edit</Button>{" "}
                                </Link>

                                <Link
                                    href={`/admin/events/${event.id}`}
                                    method="delete"
                                    as="button"
                                >
                                    {" "}
                                    <Button color="red">Delete</Button>{" "}
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
EventList.layout = (page) => (
    <MainLayout children={page} title="Luminous E-shop || Edit Permission" />
);
export default EventList;
