import DatePicker from "react-datepicker";

export default function RentalMobileModal({
    motorcycle,
    sumAddOptions,
    startDate,
    endDate,
    isOpen,
    setIsOpen,
    setStartDate,
    setEndDate
}) {
    let differenceInTime = endDate.getTime() - startDate.getTime();

    //calc. the no. of days between 2 dates
    let differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24));
    if (differenceInDays === 0) {
        differenceInDays += 1;
    }

    let pricePerDayWithAddOns = (motorcycle.pricePerDay + sumAddOptions / differenceInDays).toFixed(2);
    if (differenceInDays > 5) {
        pricePerDayWithAddOns = (pricePerDayWithAddOns - 5).toFixed(2);
    }
    if (differenceInDays > 7) {
        pricePerDayWithAddOns = (pricePerDayWithAddOns - 5).toFixed(2);
    }

    const totalSum = (differenceInDays * pricePerDayWithAddOns).toFixed(2);
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

                                    <div className="rent-for-days">Rent for {differenceInDays} day</div>
                                    <input
                                        form="form-reservation"
                                        type="hidden"
                                        name="rentDays"
                                        defaultValue={differenceInDays}
                                    />
                                    <div className="rent-per-day">
                                        ({pricePerDayWithAddOns} lv. / day)
                                    </div>
                                    <input
                                        form="form-reservation"
                                        type="hidden"
                                        name="rentPricePerDay"
                                        defaultValue={pricePerDayWithAddOns}
                                    />
                                    <input
                                        form="form-reservation"
                                        type="hidden"
                                        name="motoRentPrice"
                                        defaultValue={motorcycle.pricePerDay}
                                    />
                                    <div className="rent-price-sum">
                                        {totalSum} lv.
                                    </div>
                                    <input
                                        form="form-reservation"
                                        type="hidden"
                                        name="totalSum"
                                        defaultValue={totalSum}
                                    />

                                    <hr />

                                    <div className="start-rent" id="start-rent">
                                        <p>Rental date</p>
                                        <DatePicker
                                            selected={startDate}
                                            onChange={(date) => setStartDate(date)}
                                            dateFormat="dd/MM/yyyy"
                                            minDate={new Date()}
                                        />
                                    </div>
                                    <div className="end-rent">
                                        <p>Return date</p>
                                        <DatePicker
                                            selected={endDate}
                                            onChange={(date) => setEndDate(date)}
                                            dateFormat="dd/MM/yyyy"
                                            minDate={startDate}
                                        />
                                    </div>
                                    <div className="check-button">
                                        <button
                                            form="form-reservation"
                                            type="submit"
                                            id="submit_check_button"
                                        >
                                            Next
                                        </button>

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

            <div className="page-box-right-mobile text-center" id="mobile-box">
                <div className="rent-for-days js-rent-for-days-mobile">Rent for {differenceInDays} day</div>
                <div className="rent-price-sum js-rent-price-sum-mobile">{pricePerDayWithAddOns} lv.</div>
                <div className="next-button-mobile">

                    <div className="block space-y-4 md:flex md:space-y-0 md:space-x-4 rtl:space-x-reverse">
                        {/* Modal toggle */}
                        <button
                            onClick={() => setIsOpen(true)}
                            className="block w-full md:w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            type="button"
                        >
                            Next
                        </button>
                    </div>

                </div>
            </div>
        </>
    );
}