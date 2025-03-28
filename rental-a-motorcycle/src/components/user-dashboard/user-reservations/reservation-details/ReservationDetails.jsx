import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaCheckCircle, FaTimesCircle, FaClock } from "react-icons/fa";
import { useEditReservation, useReservation } from "../../../../api/reservationApi";
import { useEditMotorcycle, useMotorcycle } from "../../../../api/motorcycleApi";
import StatusBadge from "../../StatusBadge";
import MessageToast from "../../../messageToast/MessageToast";
import LoadingSpinner from "../../../loading-spinner/LoadingSpinner";

export default function ReservationDetails() {
    const { reservationId } = useParams();
    const [showReservation, setShowReservation] = useState(null);
    const [showMorocycle, setShowMotorcycle] = useState(null);
    const [showMessageToast, setMessageShowToast] = useState(false);

    const { reservation, isLoading } = useReservation(reservationId);
    const { edit } = useEditReservation();
    const { edit: editMotorcycle } = useEditMotorcycle();

    useEffect(() => {
        if (reservation) {
            setShowReservation(reservation);
        }
    }, [reservation]);

    const { motorcycle } = useMotorcycle(showReservation?.motorcycleId);

    useEffect(() => {
        if (motorcycle) {
            setShowMotorcycle(motorcycle);
        }
    }, [motorcycle]);


    if (isLoading) {
        return <LoadingSpinner/>;
    }

    const handleEditReservation = async () => {
        try {
            const editData = {
                status: 'Canceled',
                paid: 0,
                afterpay: 0,
                totalPrice: 0,
            }
            const editReservation = await edit(reservationId, editData);

            const reservationCount = motorcycle.reservationCount - 1;
            editMotorcycle(motorcycle._id, { reservationCount });

            setMessageShowToast({ type: 'success', content: 'Successfully canceled the reservation!' });
            setShowReservation(editReservation);
        } catch (err) {
            setMessageShowToast({ type: 'error', content: err.message });
        }

    }

    return (
        <>
            {showMessageToast && <MessageToast message={showMessageToast} onClose={setMessageShowToast} />}

            <div className="w-full bg-white shadow-lg rounded-lg p-8">
                <h1 className="text-2xl font-bold text-center text-gray-900 mb-6">Reservation Details</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-4 rounded-lg shadow">
                        <h3 className="text-lg font-semibold text-gray-800">User Details</h3>
                        <p><strong>Name:</strong> {showReservation.username}</p>
                        <p><strong>Phone:</strong> {showReservation.telephone}</p>
                        <p><strong>Email:</strong> {showReservation.email}</p>
                        <p><strong>License Category:</strong> {showReservation.licenseCategory}</p>
                        <p><strong>Birthday:</strong> {new Date(showReservation.birthday).toLocaleDateString()}</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg shadow">
                        <h3 className="text-lg font-semibold text-gray-800">Reservation Info</h3>
                        <p><strong>Status:</strong> <StatusBadge status={showReservation.status} /></p>
                        <p><strong>Order Date:</strong> {new Date(showReservation.dateOrder).toLocaleDateString()}</p>
                        <p><strong>Rental Period:</strong> {showReservation.days} days</p>
                        <p><strong>Start Date:</strong> {new Date(showReservation.startDate).toLocaleDateString()}</p>
                        <p><strong>End Date:</strong> {new Date(showReservation.endDate).toLocaleDateString()}</p>
                        <p><strong>Delivery:</strong> {showReservation.delivery}</p>
                        <p><strong>Return:</strong> {showReservation.bringBack}</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg shadow">
                        <h3 className="text-lg font-semibold text-gray-800">Payment Details</h3>
                        <p><strong>Paid:</strong> {showReservation.paid} lv.</p>
                        <p><strong>Due After Rental:</strong> {showReservation.afterpay} lv.</p>
                        <p><strong>Total Price:</strong> {showReservation.totalPrice} lv.</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg shadow">
                        <h3 className="text-lg font-semibold text-gray-800">Additional Equipment</h3>
                        <p><strong>Passenger Equipment:</strong> {showReservation.passengerEquipment === "yes" ? "✔ Yes" : "❌ No"}</p>
                        <p><strong>Passenger Helmet:</strong> {showReservation.passengerHelmet === "yes" ? "✔ Yes" : "❌ No"}</p>
                        <p><strong>Empty Tank Return:</strong> {showReservation.emptyTank === "yes" ? "✔ Yes" : "❌ No"}</p>
                    </div>
                </div>

                <div className="mt-8 bg-gray-50 p-4 rounded-lg shadow flex items-center">
                    <img src={showMorocycle.image || "/images/motorcycle_default.jpg"} alt={showMorocycle.model} className="w-52 object-cover rounded-lg" />
                    <div className="ml-4">
                        <h3 className="text-lg font-semibold">{showMorocycle.brand} {showMorocycle.model}</h3>
                        <p><strong>Type:</strong> {showMorocycle.type}</p>
                        <p><strong>Engine:</strong> {showMorocycle.engine}cc</p>
                        <p><strong>Power:</strong> {showMorocycle.power}hp</p>
                        <p><strong>Weight:</strong> {showMorocycle.weight}kg</p>
                        <p><strong>Category:</strong> {showMorocycle.category}</p>
                    </div>
                </div>

                {showReservation.status === "Pending" && (
                    <div className="mt-6 text-center">
                        <button onClick={handleEditReservation} className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition">
                            Cancel Reservation
                        </button>
                    </div>
                )}

                <div className="mt-6 text-center">
                    <Link to="/user-dashboard">
                        <button className="px-6 py-3 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600 transition">
                            Back
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};
