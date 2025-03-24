import { Link } from "react-router";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { MotorcycleImage, MotorcycleModelBrand } from "./MotorcycleInfo";
import { useReservations } from "../../../api/reservationApi";

export default function UserReservations() {
    const { _id: userId } = useAuth();
    const { reservations } = useReservations(userId);

    const [currentPage, setCurrentPage] = useState(1);
    const reservationPerPage = 3;

    const totalPages = Math.ceil(reservations.length / reservationPerPage);
    const startIndex = (currentPage - 1) * reservationPerPage;
    const currentReservations = reservations.slice(startIndex, startIndex + reservationPerPage);

    const handlePagination = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
    <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-white bg-opacity-90 backdrop-blur-md rounded-lg shadow-lg p-8">
            <h1 className="text-2xl font-bold text-center text-gray-900 mb-6">
                Your Rented Motorcycles
            </h1>

            {currentReservations.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentReservations.map((reservation) => (
                        <Link key={reservation._id} to={`/user-dashboard/reservation-details/${reservation._id}`} className="group">
                            <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden transition-transform transform group-hover:scale-105">
                                {/* Motorcycle Image */}
                                <MotorcycleImage motorcycleId={reservation.motorcycleId} />
                                <div className="p-4">
                                    {/* Motorcycle Model & Brand */}
                                    <h3 className="text-lg font-semibold text-center text-gray-800">
                                        <MotorcycleModelBrand motorcycleId={reservation.motorcycleId} />
                                    </h3>
                                    <div className="mt-2 space-y-1 text-gray-700 text-sm">
                                        <p><strong>Date Order:</strong> {new Date(reservation.dateOrder).toLocaleDateString("en-GB", { timeZone: "UTC" })}</p>
                                        <p><strong>Start Date:</strong> {new Date(reservation.startDate).toLocaleDateString("en-GB", { timeZone: "UTC" })}</p>
                                        <p><strong>End Date:</strong> {new Date(reservation.endDate).toLocaleDateString("en-GB", { timeZone: "UTC" })}</p>
                                        <p><strong>Paid:</strong> {reservation.paid} lv.</p>
                                        <p><strong>Total Price:</strong> {reservation.totalPrice} lv.</p>
                                    </div>
                                    <div className="mt-4 text-center">
                                        <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
                                            More Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-700 mt-6">You haven't rented any motorcycles yet.</p>
            )}

            {/* Pagination */}
            {totalPages >= 1 && (
                <div className="mt-8 flex justify-center space-x-4">
                    <button
                        onClick={() => handlePagination(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-gray-400 text-white rounded-lg disabled:opacity-50"
                    >
                        Previous
                    </button>
                    <span className="px-4 py-2 text-lg">{currentPage}</span>
                    <button
                        onClick={() => handlePagination(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 bg-gray-400 text-white rounded-lg disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    </div>
    </>

    );
}