import { Link } from "react-router";

import DatePicker from "react-datepicker";

export default function RentalMobileModal({
    isOpen,
    startDate,
    endDate,
    setIsOpen,
    setStartDate,
    setEndDate
}) {
    return (
        <>
            {/* Small Modal */}
            {isOpen && (
                <div onClick={() => setIsOpen(false)} className="bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40">
                    <div
                        id="small-modal"
                        tabIndex={-1}
                        className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full justify-center items-center flex"
                        aria-modal="true"
                        role="dialog"
                    >
                        <div className="relative w-full max-w-md max-h-full">
                            {/* Modal content */}
                            <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md text-center" onClick={(e) => e.stopPropagation()}>
                                {/* Modal header */}
                                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                                        Rent a Honda CBR 600RR
                                    </h3>
                                    <button
                                        type="button"
                                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <svg
                                            className="w-3 h-3"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 14 14"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                            />
                                        </svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                </div>
                                {/* Modal body */}
                                <div className="p-4 md:p-1 space-y-4">

                                    <div className="rent-for-days js-rent-for-days">Rent for 1 day</div>
                                    <input
                                        form="form-reservation"
                                        type="hidden"
                                        name="rent-days"
                                        defaultValue={1}
                                        className="js-rent-for-days-input"
                                    />
                                    <div className="rent-per-day js-rent-per-day">(70.00 lv./ day)</div>
                                    <input
                                        form="form-reservation"
                                        type="hidden"
                                        name="rent-per-day"
                                        defaultValue={70.0}
                                        className="js-rent-per-day-input"
                                    />
                                    <div className="rent-price-sum js-rent-price-sum">70.00 lv.</div>
                                    <input
                                        form="form-reservation"
                                        type="hidden"
                                        name="moto-rent-price"
                                        defaultValue={70.0}
                                        className="js-moto-rent-price-input"
                                    />
                                    <input
                                        form="form-reservation"
                                        type="hidden"
                                        name="rent-price-sum"
                                        defaultValue={70.0}
                                        className="js-rent-price-sum-input"
                                    />
                                    <hr />

                                    <div className="start-rent" id="start-rent">
                                        <p>Rent date</p>
                                        <DatePicker
                                            selected={startDate}
                                            onChange={(date) => setStartDate(date)}
                                            dateFormat="dd/MM/yyyy"
                                            minDate={new Date()}
                                            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        />
                                    </div>
                                    <div className="end-rent">
                                        <p>Return date</p>
                                        <DatePicker
                                            selected={endDate}
                                            onChange={(date) => setEndDate(date)}
                                            dateFormat="dd/MM/yyyy"
                                            minDate={startDate}
                                            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        />
                                    </div>
                                    <div className="check-button">
                                        <Link to="/checkout/motorcycleId" onClick={() => setIsOpen(false)}>
                                            <button
                                                name="submit_check_button"
                                                id="submit_check_button"
                                            >
                                                Next
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                                {/* Modal footer */}
                                <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                    <div className="more-rent">
                                        <div className="more-rent-item">
                                            <img src="/images/icons/icons8-check-48.png" alt="" />
                                            <div>Flexible cancellation</div>
                                        </div>
                                        <div className="more-rent-item">
                                            <img src="/images/icons/icons8-check-48.png" alt="" />
                                            <div>Free correction</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
}