import { useEffect, useState } from "react";
import { Link, Outlet } from 'react-router'
//import EditReservationModal from "../edit-reservation/EditReservationModal";
//import DeleteReservationModal from "../delete-reservation/DeleteReservationModal";
import { useReservations } from "../../../../api/reservationApi";
import MotorcycleInfo from "./MotorcycleInfo";
import DeleteReservationModal from "../reservation-delete/DeleteReservationModal";
import ReservationDetails from "../reservation-details/ReservationDetails";
import MessageToast from "../../../messageToast/MessageToast";
import LoadingSpinner from "../../../loading-spinner/LoadingSpinner";
import Pagination from "../../../partials/pagination/Pagination";

const ReservationTable = () => {
    const [isOpenDetails, setIsOpenDetails] = useState(false);
    const [editReservation, setEditReservation] = useState(null);

    const [isOpenDelete, setIsOpenDelete] = useState(false);
    const [deleteReservation, setDeleteReservation] = useState(null);

    const [showReservations, setShowReservations] = useState([]);

    const [showMessageToast, setMessageShowToast] = useState(false);

    const { reservations, isLoading } = useReservations();

    useEffect(() => {
        if (!isLoading && reservations.length > 0) {
            setShowReservations(reservations);
        }
    }, [reservations, isLoading]);

    useEffect(() => {
        if (editReservation && !isOpenDetails) {
            setMessageShowToast({type: 'success', content: 'Reservation updated successfully!'});
            setShowReservations(state => state.map(reservation => reservation._id === editReservation._id ? editReservation : reservation));
        }
    }, [editReservation, isOpenDetails]);

    const handleDelete = (id) => {
        setMessageShowToast({type: 'success', content: 'Reservation has been deleted!'});
        setShowReservations(showReservations.filter(reservation => reservation._id !== id));
    };

    const [currentPage, setCurrentPage] = useState(1);
    const reservationPerPage = 5;

    const totalPages = Math.ceil(showReservations.length / reservationPerPage);
    const startIndex = (currentPage - 1) * reservationPerPage;
    const currentReservations = showReservations.slice(startIndex, startIndex + reservationPerPage);

    const handlePagination = (page) => {
        setCurrentPage(page);
    };

    
    if (isLoading) {
        return <LoadingSpinner/>;
    }

    return (
        <>
        {showMessageToast && <MessageToast message={showMessageToast} onClose={setMessageShowToast}/>}

            <div className="relative w-full overflow-x-auto block">
                <table className="min-w-[1400px] w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-300 dark:text-gray-800">
                        <tr>
                            <th className="px-6 py-3" scope="col">S.N</th>
                            <th className="px-6 py-3" scope="col">Name</th>
                            <th className="px-6 py-3" scope="col">Phone</th>
                            <th className="px-6 py-3" scope="col">Email</th>
                            <th className="px-6 py-3" scope="col">Motorcycle</th>
                            <th className="px-6 py-3" scope="col">Start Date</th>
                            <th className="px-6 py-3" scope="col">End Date</th>
                            <th className="px-6 py-3" scope="col">Total Price</th>
                            <th className="px-6 py-3" scope="col">Date order</th>
                            <th className="px-6 py-3" scope="col">Status</th>
                            <th className="px-6 py-3" scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentReservations.map((reservation, index) => (
                            <tr key={reservation._id} className="bg-white border-b dark:bg-gray-100 dark:border-gray-400 border-gray-200 dark:text-black" >
                                <td className="px-6 py-4" scope="row">{startIndex + index + 1}</td>
                                <td className="px-6 py-4" scope="row">{reservation.username}</td>
                                <td className="px-6 py-4" scope="row">{reservation.telephone}</td>
                                <td className="px-6 py-4" scope="row">{reservation.email}</td>
                                <td className="px-6 py-4" scope="row"><MotorcycleInfo motorcycleId={reservation.motorcycleId} /></td>
                                <td className="px-6 py-4" scope="row">{new Date(reservation.startDate).toLocaleDateString("en-GB", { timeZone: "UTC" })}</td>
                                <td className="px-6 py-4" scope="row">{new Date(reservation.endDate).toLocaleDateString("en-GB", { timeZone: "UTC" })}</td>
                                <td className="px-6 py-4" scope="row">{reservation.totalPrice} lv.</td>
                                <td className="px-8 py-4" scope="row">{new Date(reservation.dateOrder).toLocaleDateString("en-GB", { timeZone: "UTC" })}</td>
                                <td className="px-6 py-4" scope="row">{reservation.status}</td>
                                <td className="px-6 py-4" scope="row">
                                    <button onClick={() => { setIsOpenDetails(true); setEditReservation(reservation); }}
                                        className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">
                                        Details
                                    </button>
                                    <button onClick={() => { setIsOpenDelete(true); setDeleteReservation(reservation); }}
                                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Pagination 
                currentPage={currentPage}
                totalPages={totalPages}
                handlePagination={handlePagination}
            />

            {/* Details Reservation */}
                {isOpenDetails && <ReservationDetails
                reservationId={editReservation._id}
                setIsOpen={setIsOpenDetails}
                setEditReservation={setEditReservation}
            />}

            {/* Delete Reservation */}
            {isOpenDelete && <DeleteReservationModal
                reservation={deleteReservation}
                setIsOpen={setIsOpenDelete}
                handleDeleteLocal={handleDelete}
            />}

        </>
    );
};

export default ReservationTable;