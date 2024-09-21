import React, { useEffect, useState } from "react";
import { router, usePage } from "@inertiajs/react";
import MainLayout from "../../Layout/Mainlayout";
import { useForm } from "react-hook-form";

const EventForm = () => {
    const { event } = usePage().props || {};
    const isEditMode = Boolean(event);
    const [hasBookedSeats, setHasBookedSeats] = useState(false);

    // React Hook Form setup
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        defaultValues: {
            title: event?.title || "",
            description: event?.description || "",
            event_date: event?.event_date || "",
            total_seats: event?.total_seats || "",
            available_seats: event?.available_seats || "",
        },
    });

    useEffect(() => {
        // Check if any seats are booked
        if (
            event?.seats &&
            event.seats.some((seat) => seat.status === "booked")
        ) {
            setHasBookedSeats(true);
        }
    }, [event]);

    const onSubmit = (data) => {
        if (isEditMode) {
            router.put(`/admin/events/${event?.id}/update`, data);
        } else {
            router.post("/admin/events/store", data);
        }
    };

    return (
        <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-6">
                {isEditMode ? "Edit Event" : "Create Event"}
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Event Title */}
                <div className="mb-4">
                    <label className="block text-gray-700">Event Title</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg"
                        {...register("title", {
                            required: "Title is required",
                        })}
                    />
                    {errors.title && (
                        <div className="text-red-500">
                            {errors.title.message}
                        </div>
                    )}
                </div>

                {/* Event Description */}
                <div className="mb-4">
                    <label className="block text-gray-700">Description</label>
                    <textarea
                        className="w-full px-4 py-2 border rounded-lg"
                        {...register("description", {
                            required: "Description is required",
                        })}
                    />
                    {errors.description && (
                        <div className="text-red-500">
                            {errors.description.message}
                        </div>
                    )}
                </div>

                {/* Event Date */}
                <div className="mb-4">
                    <label className="block text-gray-700">Event Date</label>
                    <input
                        type="date"
                        className="w-full px-4 py-2 border rounded-lg"
                        {...register("event_date", {
                            required: "Event date is required",
                        })}
                    />
                    {errors.event_date && (
                        <div className="text-red-500">
                            {errors.event_date.message}
                        </div>
                    )}
                </div>

                {/* Total Seats */}
                <div className="mb-4">
                    <label className="block text-gray-700">Total Seats</label>
                    <input
                        type="number"
                        className="w-full px-4 py-2 border rounded-lg"
                        {...register("total_seats", {
                            required: "Total seats is required",
                        })}
                        disabled={hasBookedSeats} // Disable if seats are booked
                    />
                    {errors.total_seats && (
                        <div className="text-red-500">
                            {errors.total_seats.message}
                        </div>
                    )}
                </div>

                {/* Available Seats */}
                {/* {isEditMode && (
                    <>
                        <div className="mb-4">
                            <label className="block text-gray-700">
                                Available Seats
                            </label>
                            <input
                                type="number"
                                className="w-full px-4 py-2 border rounded-lg"
                                {...register("available_seats", {
                                    required: "Available seats is required",
                                })}
                                readOnly={hasBookedSeats} // Make read-only if seats are booked
                            />
                            {errors.available_seats && (
                                <div className="text-red-500">
                                    {errors.available_seats.message}
                                </div>
                            )}
                        </div>
                    </>
                )} */}
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                >
                    {isEditMode ? "Update Event" : "Create Event"}
                </button>
            </form>
        </div>
    );
};

// Define layout and title dynamically based on action (Create or Edit)
EventForm.layout = (page) => (
    <MainLayout
        children={page}
        title={page.props.event ? "Edit Event" : "Create Event"}
    />
);

export default EventForm;
