import React from "react";
import { router, usePage } from "@inertiajs/react";
import MainLayout from "../../Layout/Mainlayout";
import { useForm } from "react-hook-form";

const EventForm = () => {
    const { event } = usePage().props || {}; // Ensure that event is undefined in create mode
    const isEditMode = Boolean(event);

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
        },
    });

    const onSubmit = (data) => {
        if (isEditMode) {
            // Use PUT request for editing an existing event
            router.put(`/admin/events/${event?.id}/update`, data);
        } else {
            // Use POST request for creating a new event
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
                    />
                    {errors.total_seats && (
                        <div className="text-red-500">
                            {errors.total_seats.message}
                        </div>
                    )}
                </div>

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
