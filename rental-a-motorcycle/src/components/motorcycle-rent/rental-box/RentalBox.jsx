import { Link } from "react-router";

import DatePicker from "react-datepicker";

export default function RentalBox({
    motorcycle,
    startDate,
    endDate,
    setIsOpen,
    setStartDate,
    setEndDate
}) {
    return (
        <>
            {/* Start rent box */}
            <div className="page-box-right text-center" id="page-box-right">
                <div className="btn-close-box">
                    <img
                        src="/images/icons/icons8-close-48.png"
                        alt=""
                    />
                </div>
                <div className="rent-for-days js-rent-for-days">Rent for 1 day</div>
                <input
                    form="form-reservation"
                    type="hidden"
                    name="rent-days"
                    defaultValue={1}
                    className="js-rent-for-days-input"
                />
                <div className="rent-per-day js-rent-per-day">({(motorcycle.pricePerDay).toFixed(2)} lv. / day)</div>
                <input
                    form="form-reservation"
                    type="hidden"
                    name="rent-per-day"
                    defaultValue={70.0}
                    className="js-rent-per-day-input"
                />
                <div className="rent-price-sum js-rent-price-sum">{(motorcycle.pricePerDay).toFixed(2)} lv.</div>
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
                    <Link to="/checkout/motorcycleId">
                        <button
                            form="form-reservation"
                            type="submit"
                            name="submit_check_button"
                            id="submit_check_button"
                        >
                            Next
                        </button>
                    </Link>

                </div>
                <hr />
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

            <div className="page-box-right-mobile text-center" id="mobile-box">
                <div className="rent-for-days js-rent-for-days-mobile">Rent for 1 day</div>
                <div className="rent-price-sum js-rent-price-sum-mobile">70.00 lv.</div>
                <div className="next-button-mobile">

                    <div className="block space-y-4 md:flex md:space-y-0 md:space-x-4 rtl:space-x-reverse">
                        {/* Modal toggle */}
                        <button
                            onClick={() => setIsOpen(true)}
                            className="block w-full md:w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            type="button"
                        >
                            Напред
                        </button>
                    </div>

                </div>
            </div>
            {/* End rent box */}
        </>
    );
}