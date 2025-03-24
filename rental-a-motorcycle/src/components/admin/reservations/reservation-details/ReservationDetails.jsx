import { useEditReservation, useReservation } from "../../../../api/reservationApi";
import MotorcycleInfo from "../reservations-table/MotorcycleInfo";
import { useEffect, useState } from "react";

export default function ReservationDetails({
    reservationId,
    setIsOpen,
    setEditReservation,
}) {
    const { reservation, isLoading } = useReservation(reservationId);

    const { edit } = useEditReservation();

    const [selectedValueStatus, setSelectedValueStatus] = useState(reservation?.status || '');

    const handleChangeSelectStatus = (e) => {
        setSelectedValueStatus(e.target.value);
    };

    // For select value
    useEffect(() => {
        if (!isLoading && reservation) {
            setSelectedValueStatus(reservation.status);
        }
    }, [reservation, isLoading]);

    async function submitActionAddMotorcycle(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const status = formData.get('status');

        try {
            const editReservation = await edit(reservationId, { status });
            setEditReservation(editReservation);
            setIsOpen(false);
        } catch (err) {
            console.log(err);
        }

    }

    return (
        <>
            <div onClick={() => setIsOpen(false)} className="bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-50">
                <div
                    className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full justify-center items-center flex"
                    id="large-modal"
                    tabIndex="-1"
                    role="dialog">
                    <div className="relative w-full max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
                        <div className="relative bg-white rounded-lg shadow-sm">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200">
                                <h3 className="text-xl font-medium text-gray-900">
                                    Deitals Reservation for {reservation.motorcycleId && <MotorcycleInfo motorcycleId={reservation.motorcycleId} />}
                                </h3>
                                <button
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                                    data-modal-hide="large-modal"
                                    type="button"
                                    onClick={() => setIsOpen(false)}>
                                    <svg
                                        aria-hidden="true"
                                        className="w-3 h-3"
                                        fill="none"
                                        viewBox="0 0 14 14"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                        />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <form onSubmit={submitActionAddMotorcycle}>
                                <div className="p-4 md:p-5 space-y-4">

                                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 max-w-2xl mx-auto p-5 mt-0">
                                        <div className="mb-3 text-gray-500 dark:text-gray-400">
                                            <div className="mb-5">
                                                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">
                                                    Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="username"
                                                    name="username"
                                                    className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                    placeholder="Honda"
                                                    defaultValue={reservation.username}
                                                    readOnly
                                                />
                                            </div>

                                            <div className="mb-5">
                                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                                                    Email
                                                </label>
                                                <input
                                                    type="text"
                                                    id="email"
                                                    name="email"
                                                    className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                    placeholder="CB 1000"
                                                    defaultValue={reservation.email}
                                                    readOnly
                                                />
                                            </div>

                                            <div className="mb-5">
                                                <label htmlFor="telephone" className="block mb-2 text-sm font-medium text-gray-900">
                                                    Telephone
                                                </label>
                                                <input
                                                    type="text"
                                                    id="telephone"
                                                    name="telephone"
                                                    className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                    placeholder="CB 1000"
                                                    defaultValue={reservation.telephone}
                                                    readOnly
                                                />
                                            </div>

                                            <div className="mb-5">
                                                <label htmlFor="birthday" className="block mb-2 text-sm font-medium text-gray-900">
                                                    Birthday
                                                </label>
                                                <input
                                                    type="date"
                                                    id="birthday"
                                                    name="birthday"
                                                    className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                    placeholder="1000"
                                                    min="1"
                                                    defaultValue={reservation.birthday? reservation.birthday.split("T")[0] : ''}
                                                    readOnly
                                                />
                                            </div>

                                            <div className="mb-5">
                                                <label htmlFor="licenseCategory" className="block mb-2 text-sm font-medium text-gray-900">
                                                    License Category
                                                </label>
                                                <input
                                                    type="text"
                                                    id="licenseCategory"
                                                    name="licenseCategory"
                                                    className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                    placeholder="1000"
                                                    min="1"
                                                    defaultValue={reservation.licenseCategory}
                                                    readOnly
                                                />
                                            </div>

                                            <div className="mb-5">
                                                <label htmlFor="dateOrder" className="block mb-2 text-sm font-medium text-gray-900">
                                                    Date Order
                                                </label>
                                                <input
                                                    type="date"
                                                    id="dateOrder"
                                                    name="dateOrder"
                                                    className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                    placeholder="125"
                                                    min="1"
                                                    defaultValue={reservation.dateOrder? reservation.dateOrder.split("T")[0] : ''}
                                                    readOnly
                                                />
                                            </div>

                                            <div className="mb-5">
                                                <label htmlFor="days" className="block mb-2 text-sm font-medium text-gray-900">
                                                    Days
                                                </label>
                                                <input
                                                    type="number"
                                                    id="days"
                                                    name="days"
                                                    className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                    placeholder="285"
                                                    min="1"
                                                    defaultValue={reservation.days}
                                                    readOnly
                                                />
                                            </div>

                                            
                                            <div className="mb-5">
                                                <label htmlFor="startDate" className="block mb-2 text-sm font-medium text-gray-900">
                                                    Start Date
                                                </label>
                                                <input
                                                    type="date"
                                                    id="startDate"
                                                    name="startDate"
                                                    className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                    placeholder="205"
                                                    min="1"
                                                    defaultValue={reservation.startDate? reservation.startDate.split("T")[0] : ''}
                                                    readOnly
                                                />
                                            </div>

                                            <div className="mb-5">
                                                <label htmlFor="endDate" className="block mb-2 text-sm font-medium text-gray-900">
                                                    End Date
                                                </label>
                                                <input
                                                    type="date"
                                                    id="endDate"
                                                    name="endDate"
                                                    className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                    placeholder="205"
                                                    min="1"
                                                    defaultValue={reservation.endDate? reservation.endDate.split("T")[0] : ''}
                                                    readOnly
                                                />
                                            </div>

                                        </div>

                                        <div className="mb-3 text-gray-500 dark:text-gray-400">

                                            <div className="mb-5">
                                                <label htmlFor="delivery" className="block mb-2 text-sm font-medium text-gray-900">
                                                    Delivery
                                                </label>
                                                <input
                                                    type="text"
                                                    id="delivery"
                                                    name="delivery"
                                                    className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                    placeholder="2024"
                                                    min="1900"
                                                    defaultValue={reservation.delivery}
                                                    readOnly
                                                />
                                            </div>

                                            <div className="mb-5">
                                                <label htmlFor="bringBack" className="block mb-2 text-sm font-medium text-gray-900">
                                                    Bring Back
                                                </label>
                                                <input
                                                    type="text"
                                                    id="bringBack"
                                                    name="bringBack"
                                                    className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                    placeholder="2024"
                                                    min="1900"
                                                    defaultValue={reservation.bringBack}
                                                    readOnly
                                                />
                                            </div>

                                            <div className="mb-5">
                                                <label htmlFor="paid" className="block mb-2 text-sm font-medium text-gray-900">
                                                    Paid
                                                </label>
                                                <input
                                                    type="number"
                                                    id="paid"
                                                    name="paid"
                                                    className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                    placeholder="18"
                                                    min="1"
                                                    defaultValue={reservation.paid}
                                                    readOnly
                                                />
                                            </div>

                                            <div className="mb-5">
                                                <label htmlFor="afterpay" className="block mb-2 text-sm font-medium text-gray-900">
                                                    Afterpay
                                                </label>
                                                <input
                                                    type="number"
                                                    id="afterpay"
                                                    name="afterpay"
                                                    className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                    placeholder="18"
                                                    min="1"
                                                    defaultValue={reservation.afterpay}
                                                    readOnly
                                                />
                                            </div>

                                            <div className="mb-5">
                                                <label htmlFor="totalPrice" className="block mb-2 text-sm font-medium text-gray-900">
                                                    Total Price
                                                </label>
                                                <input
                                                    type="number"
                                                    id="totalPrice"
                                                    name="totalPrice"
                                                    className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                    placeholder="50"
                                                    min="0"
                                                    defaultValue={reservation.totalPrice}
                                                    readOnly
                                                />
                                            </div>

                                            <div className="mb-5">
                                                <label htmlFor="passengerEquipment" className="block mb-2 text-sm font-medium text-gray-900">
                                                    Passenger Equipment
                                                </label>
                                                <input
                                                    type="text"
                                                    id="passengerEquipment"
                                                    name="passengerEquipment"
                                                    className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                    placeholder="50"
                                                    min="0"
                                                    defaultValue={reservation.passengerEquipment}
                                                    readOnly
                                                />
                                            </div>

                                            <div className="mb-5">
                                                <label htmlFor="passengerHelmet" className="block mb-2 text-sm font-medium text-gray-900">
                                                    Passenger Helmet
                                                </label>
                                                <input
                                                    type="text"
                                                    id="passengerHelmet"
                                                    name="passengerHelmet"
                                                    className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                    placeholder="50"
                                                    min="0"
                                                    defaultValue={reservation.passengerHelmet}
                                                    readOnly
                                                />
                                            </div>

                                            <div className="mb-5">
                                                <label htmlFor="emptyTank" className="block mb-2 text-sm font-medium text-gray-900">
                                                    Empty Tank
                                                </label>
                                                <input
                                                    type="text"
                                                    id="emptyTank"
                                                    name="emptyTank"
                                                    className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                    placeholder="50"
                                                    min="0"
                                                    defaultValue={reservation.emptyTank}
                                                    readOnly
                                                />
                                            </div>

                                            <div className="mb-5">
                                                <label
                                                    htmlFor="status"
                                                    className="block mb-2 text-sm font-medium text-red-400"
                                                >
                                                    Select reservation status
                                                </label>
                                                <select
                                                    id="status"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                    name="status"
                                                    value={selectedValueStatus}
                                                    onChange={handleChangeSelectStatus}
                                                >
                                                    <option value="Pending">Pending</option>
                                                    <option value="Confirmed">Confirmed</option>
                                                    <option value="In progress">In progress</option>
                                                    <option value="Completed">Completed</option>
                                                    <option value="Canceled">Canceled</option>
                                                    <option value="Rejected">Rejected</option>
                                                </select>
                                            </div>

                                        </div>

                                    </div>


                                </div>
                                <div className="flex items-center p-4 md:p-5 space-x-3 rtl:space-x-reverse border-t border-gray-200 rounded-b">

                                    <button
                                        type="submit"
                                        className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        data-modal-hide="large-modal"
                                    >
                                        <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                                        Edit reservation
                                    </button>

                                    <button
                                        className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                                        data-modal-hide="large-modal"
                                        type="button"
                                        onClick={() => setIsOpen(false)}>
                                        Close
                                    </button>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}