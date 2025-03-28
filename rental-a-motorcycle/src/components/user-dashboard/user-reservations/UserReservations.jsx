import { Link } from "react-router";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { MotorcycleImage, MotorcycleModelBrand } from "../motorcycle-info/MotorcycleInfo";
import { useReservations } from "../../../api/reservationApi";
import StatusBadge from "../StatusBadge";
import LoadingSpinner from "../../loading-spinner/LoadingSpinner";
import DashboardButtons from "../dashboard-buttons/DashboardButtons";
import Pagination from "../../partials/pagination/Pagination";

export default function UserReservations() {
    const { _id: userId } = useAuth();
    const { reservations, isLoading } = useReservations(userId);

    const [currentPage, setCurrentPage] = useState(1);

    const reservationPerPage = 3;

    const totalPages = Math.ceil(reservations.length / reservationPerPage);
    const startIndex = (currentPage - 1) * reservationPerPage;
    const currentReservations = reservations.slice(startIndex, startIndex + reservationPerPage);

    const handlePagination = (page) => {
        setCurrentPage(page);
    };

    if (isLoading) {
        return (
            <>
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto bg-white bg-opacity-90 backdrop-blur-md rounded-lg shadow-lg p-8">

                        <DashboardButtons />
                        
                    <h1 className="text-2xl font-bold text-center text-gray-900 mb-6">
                        Your Rented Motorcycles
                    </h1>
                    
                        <LoadingSpinner />
                    </div>
                </div>
            </>
        );
    }

    return (
        <>

                    <h1 className="text-2xl font-bold text-center text-gray-900 mb-6">
                        Your Rented Motorcycles - <span className="text-red-600">{reservations.length}</span>
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
                                                <p><strong>Days:</strong> {reservation.days}</p>
                                                <p><strong>Paid:</strong> {reservation.paid} lv.</p>
                                                <p><strong>Total Price:</strong> {reservation.totalPrice} lv.</p>
                                                <p className="flex"><strong>Status:</strong> <StatusBadge status={reservation.status} /></p>
                                            </div>
                                            <div className="mt-4 text-center">
                                                <button className="px-4 py-2 bg-red-400 text-white rounded-lg hover:bg-red-600 transition">
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
                        <Pagination 
                            currentPage={currentPage}
                            totalPages={totalPages}
                            handlePagination={handlePagination}
                        />
                    )}
        </>

    );
}