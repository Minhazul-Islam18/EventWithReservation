import React, { useState } from "react";
import { router, usePage } from "@inertiajs/react";
import { IconCheck } from "@tabler/icons-react";
import { Alert } from "@mantine/core";

const SeatBooking = () => {
    const { event } = usePage().props;
    // Track the selected seats
    const [selectedSeats, setSelectedSeats] = useState([]);

    // Toggle seat selection
    const toggleSeat = (seatNumber) => {
        if (selectedSeats.includes(seatNumber)) {
            setSelectedSeats(selectedSeats.filter((s) => s !== seatNumber));
        } else {
            setSelectedSeats([...selectedSeats, seatNumber]);
        }
    };

    const handleReservation = () => {
        if (!selectedSeats.length) {
            alert("Please select at least one seat.");
            return;
        }
        router.post(`/admin/events/${event.id}/reserve`, {
            seats: selectedSeats,
        });
        setSelectedSeats([]);
    };

    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Seat Reservation</h1>
            {event.seats.length > 0 ? (
                <>
                    {/* Seat selection grid */}
                    <div className="grid grid-cols-5 gap-2">
                        {event.seats.map((seat) => (
                            <div
                                key={seat.id}
                                className={`p-4 border rounded-lg text-center cursor-pointer transition-all duration-300 ease-in-out relative
                hover:${seat.status === "available" ? "bg-green-600" : ""}
                ${
                    seat.status === "booked"
                        ? "bg-red-500 cursor-not-allowed opacity-50"
                        : selectedSeats.includes(seat.seat_number)
                        ? "bg-blue-500 scale-105"
                        : "bg-green-500"
                }
            `}
                                onClick={() =>
                                    seat.status === "available" &&
                                    toggleSeat(seat.seat_number)
                                }
                            >
                                {selectedSeats.includes(seat.seat_number) ? (
                                    <IconCheck className="bg-white rounded-full text-green-500 w-[18px] block h-auto absolute right-2 top-2" />
                                ) : null}
                                {seat.seat_number}
                            </div>
                        ))}
                    </div>
                    {/* Show selected seats */}
                    <div className="mt-4">
                        <h2 className="text-lg font-semibold">
                            Selected Seats:
                        </h2>
                        <p>
                            {selectedSeats.length > 0
                                ? selectedSeats.join(", ")
                                : "No seats selected."}
                        </p>
                    </div>
                    {/* Reserve button */}
                    <button
                        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg"
                        onClick={handleReservation}
                    >
                        Reserve Selected Seats
                    </button>
                </>
            ) : (
                <>
                    <Alert
                        className="border border-red-500"
                        color="red"
                        title="Heads up!"
                    >
                        No seats available for Book!
                    </Alert>
                </>
            )}
        </div>
    );
};

export default SeatBooking;
