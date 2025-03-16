import { Link } from "react-router";
import { useEffect, useState } from "react";
import MostRented from "../most-rented/MostRented";
import DatePicker from "react-datepicker";

import './MotorcycleRent.css';
import Comments from "./comments/Comments";

export default function MotorcycleRent() {
    const [isOpen, setIsOpen] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    return (
        <>
            <div className="page-2-boxs">
                <form id="form-reservation" method="post" target="" action="" />
                <div className="page-box-left" id="page-box-left">
                    <div className="moto-img">
                        <img src="/images/honda_cbr.png" alt="" />
                    </div>
                    <div className="moto-title">
                        <h2>Honda CBR 600RR </h2>
                    </div>
                    <div className="moto-type">
                        <h3>Sport</h3>
                    </div>
                    <div className="moto-specs">
                        <div className="moto-specs-box">
                            <div className="moto-specs-icons">
                                <img src="/images/icons/icons8-moto-50.png" alt="" />
                            </div>
                            <div className="moto-specs-text">600 cc</div>
                        </div>
                        <div className="moto-specs-box">
                            <div className="moto-specs-icons">
                                <img src="/images/icons/icons8-horse-50.png" alt="" />
                            </div>
                            <div className="moto-specs-text">115 hp</div>
                        </div>
                        <div className="moto-specs-box">
                            <div className="moto-specs-icons">
                                <img src="/images/icons/icons8-speed-50.png" alt="" />
                            </div>
                            <div className="moto-specs-text">266 km/h</div>
                        </div>
                        <div className="moto-specs-box">
                            <div className="moto-specs-icons">
                                <img src="/images/icons/icons8-calendar-50.png" alt="" />
                            </div>
                            <div className="moto-specs-text">2009 year</div>
                        </div>
                        <div className="moto-specs-box">
                            <div className="moto-specs-icons">
                                <img src="/images/icons/icons8-weight-50.png" alt="" />
                            </div>
                            <div className="moto-specs-text">210 kg</div>
                        </div>
                        <div className="moto-specs-box">
                            <div className="moto-specs-icons">
                                <img src="/images/icons/icons8-fuel-50.png" alt="" />
                            </div>
                            <div className="moto-specs-text">20 L</div>
                        </div>
                        <div className="moto-specs-box">
                            <div className="moto-specs-icons">
                                <img src="/images/icons/icons8-certificate-50.png" alt="" />
                            </div>
                            <div className="moto-specs-text">A</div>
                        </div>
                    </div>
                    <hr />
                    {/* Start section for Include in price */}
                    <section className="include-price">
                        <div className="subtitle">
                            <h2 className="text-2xl font-bold">Included in the price</h2>
                            <h3 className="text-4xl font-bold mt-1">EVERYONE LOVES FREE STUFF!</h3>
                        </div>
                        <div className="container-moto-rent">
                            <div className="container-moto-rent-icons">
                                <img src="/images/icons/icons8-motorcycle-64.png" alt="" />
                            </div>
                            <div className="container-moto-rent-text">Model Guarantee</div>
                        </div>
                        <div className="container-moto-rent">
                            <div className="container-moto-rent-icons">
                                <img src="/images/icons/icons8-shake-phone-64.png" alt="" />
                            </div>
                            <div className="container-moto-rent-text">Phone holder</div>
                        </div>
                        <div className="container-moto-rent">
                            <div className="container-moto-rent-icons">
                                <img src="/images/icons/icons8-odometer-64.png" alt="" />
                            </div>
                            <div className="container-moto-rent-text">No mileage restrictions</div>
                        </div>
                        <div className="container-moto-rent">
                            <div className="container-moto-rent-icons">
                                <img src="/images/icons/icons8-jacket-64.png" alt="" />
                            </div>
                            <div className="container-moto-rent-text">Equipment included</div>
                        </div>
                        <div className="container-moto-rent">
                            <div className="container-moto-rent-icons">
                                <img src="/images/icons/icons8-petrol-full-64.png" alt="" />
                            </div>
                            <div className="container-moto-rent-text">
                                Full tank included
                            </div>
                        </div>
                        <div className="container-moto-rent">
                            <div className="container-moto-rent-icons">
                                <img src="/images/icons/icons8-suitcase-64.png" alt="" />
                            </div>
                            <div className="container-moto-rent-text">Motorcycle suitcase</div>
                        </div>
                        <div className="clearfix" />
                    </section>
                    {/* End section for include in price */}
                    <hr />
                    {/* Start section for add-ons option */}
                    <section className="add-option" id="sumCheckboxes">
                        <div className="subtitle">
                            <h2 className="text-2xl font-bold">Available add-ons</h2>
                            <h3 className="text-4xl font-bold mt-1">DO YOU WANT ANY ADDITIONAL EXTRAS?</h3>
                        </div>
                        <div className="container-moto-rent">
                            <div className="container-moto-rent-icons">
                                <img src="/images/icons/icons8-jacket-passager-64.png" alt="" />
                            </div>
                            <div className="container-moto-rent-text">
                                <input
                                    form="form-reservation"
                                    type="checkbox"
                                    name="add-options-equipment"
                                    defaultValue={25.0}
                                    data-amount={25.0}

                                />
                                Passenger equipment <b>+ 25 lv.</b>
                            </div>
                        </div>
                        <div className="container-moto-rent">
                            <div className="container-moto-rent-icons">
                                <img src="/images/icons/icons8-helmet-64.png" alt="" />
                            </div>
                            <div className="container-moto-rent-text">
                                <input
                                    form="form-reservation"
                                    type="checkbox"
                                    name="add-options-helmet"
                                    defaultValue={20.0}
                                    data-amount={20.0}

                                />
                                Passenger helmet <b>+ 20 lv.</b>
                            </div>
                        </div>
                        <div className="container-moto-rent">
                            <div className="container-moto-rent-icons">
                                <img src="/images/icons/icons8-petrol-empty-64.png" alt="" />
                            </div>
                            <div className="container-moto-rent-text">
                                <input
                                    form="form-reservation"
                                    type="checkbox"
                                    name="add-options-tank"
                                    defaultValue={60.0}
                                    data-amount={60.0}

                                />
                                Return with an empty tank <b>+ 60 lv.</b>
                            </div>
                        </div>
                        <div className="container-moto-rent">
                            <div className="container-moto-rent-icons">
                                <img src="/images/icons/icons8-airport-64.png" alt="" />
                            </div>
                            <div className="container-moto-rent-text">
                                <input
                                    form="form-reservation"
                                    type="checkbox"
                                    name="add-options-delivery-airport"
                                    defaultValue={25.0}
                                    data-amount={25.0}

                                />
                                Take on /Airport/ <b>+ 25 lv.</b>
                            </div>
                        </div>
                        <div className="container-moto-rent">
                            <div className="container-moto-rent-icons">
                                <img src="/images/icons/icons8-airport-64.png" alt="" />
                            </div>
                            <div className="container-moto-rent-text">
                                <input
                                    form="form-reservation"
                                    type="checkbox"
                                    name="add-options-return-airport"
                                    defaultValue={25.0}
                                    data-amount={25.0}

                                />
                                Return /Airport/ <b>+ 25 lv.</b>
                            </div>
                        </div>
                        <div className="container-moto-rent">
                            <div className="container-moto-rent-icons">
                                <img src="/images/icons/icons8-5-star-hotel-64.png" alt="" />
                            </div>
                            <div className="container-moto-rent-text">
                                <input
                                    form="form-reservation"
                                    type="checkbox"
                                    name="add-options-delivery-hotel"
                                    defaultValue={20.0}
                                    data-amount={20.0}

                                />
                                Take on /Hotel/ <b>+ 20 lv.</b>
                            </div>
                        </div>
                        <div className="container-moto-rent">
                            <div className="container-moto-rent-icons">
                                <img src="/images/icons/icons8-5-star-hotel-64.png" alt="" />
                            </div>
                            <div className="container-moto-rent-text">
                                <input
                                    form="form-reservation"
                                    type="checkbox"
                                    name="add-options-return-hotel"
                                    defaultValue={20.0}
                                    data-amount={20.0}

                                />
                                Return /Hotel/ <b>+ 20 lv.</b>
                            </div>
                        </div>
                        <div className="clearfix" />
                    </section>
                    {/* End section for add-ons option */}
                    <hr />
                    {/* Start section for policy rental */}
                    <section className="policy-rent">
                        <div className="subtitle">
                            <h2 className="text-2xl font-bold">Rental Policy</h2>
                            <h3 className="text-4xl font-bold mt-1">WHAT YOU NEED TO KNOW!</h3>
                        </div>
                        <div className="policy-box">
                            <div className="policy-box-icon">
                                <img src="/images/icons/policy/icons8-dolar-64.png" alt="" />
                            </div>
                            <div className="policy-box-text">
                                <b>Pay just 20% now</b>, and settle the rest on site.
                            </div>
                        </div>
                        <div className="policy-box">
                            <div className="policy-box-icon">
                                <img src="/images/icons/policy/icons8-refund-50.png" alt="" />
                            </div>
                            <div className="policy-box-text">
                                You can cancel your booking <b>up to 7 days before</b> the rental date and receive a full refund.
                            </div>
                        </div>
                        <div className="policy-box">
                            <div className="policy-box-icon">
                                <img src="/images/icons/policy/icons8-road-64.png" alt="" />
                            </div>
                            <div className="policy-box-text">
                                <b>No</b> mileage restrictions.
                            </div>
                        </div>
                        <div className="policy-box">
                            <div className="policy-box-icon">
                                <img src="/images/icons/policy/icons8-man-50.png" alt="" />
                            </div>
                            <div className="policy-box-text">
                                You must be <b>at least 21 years old</b> and have 12 months of driving experience.
                            </div>
                            <div className="policy-box-text">
                                You must be <b>at least 19 years old</b> and have 12 months of driving experience.
                            </div>
                            <div className="policy-box-text">
                                You must be <b>at least 17 years old</b> and have 12 months of driving experience.
                            </div>

                        </div>
                        <div className="policy-box">
                            <div className="policy-box-icon">
                                <img src="/images/icons/policy/icons8-book-48.png" alt="" />
                            </div>
                            <div className="policy-box-text">
                                Този мотоциклет изисква свидетелство - <b>категория А</b>.
                            </div>
                            <div className="policy-box-text">
                                Този мотоциклет изисква свидетелство - <b>категория А2</b>.
                            </div>
                            <div className="policy-box-text">
                                Този мотоциклет изисква свидетелство - <b>категория А1</b>.
                            </div>
                        </div>
                        <div className="policy-box">
                            <div className="policy-box-icon">
                                <img src="/images/icons/policy/icons8-book-48.png" alt="" />
                            </div>
                            <div className="policy-box-text">
                                This motorcycle requires a <b>Category A</b> license.
                            </div>
                            <div className="policy-box-text">
                                This motorcycle requires a <b>Category A2</b> license.
                            </div>
                            <div className="policy-box-text">
                                This motorcycle requires a <b>Category A1</b> license.
                            </div>
                        </div>
                        <div className="policy-box">
                            <div className="policy-box-icon">
                                <img src="/images/icons/policy/icons8-delivery-64.png" alt="" />
                            </div>
                            <div className="policy-box-text">
                                Delivery/pickup services are available <b>in the Varna area and upon request</b>.
                            </div>
                        </div>
                        <div className="policy-box">
                            <div className="policy-box-icon">
                                <img src="/images/icons/policy/icons8-earth-50.png" alt="" />
                            </div>
                            <div className="policy-box-text">
                                Crossing <b>into another country</b> is not allowed.
                            </div>
                        </div>
                        <div className="policy-box">
                            <div className="policy-box-icon">
                                <img src="/images/icons/policy/icons8-more-50.png" alt="" />
                            </div>
                            <div className="policy-box-text">
                                Included services and paid extras are subject to availability.
                            </div>
                        </div>
                        <div className="policy-box">
                            <div className="policy-box-icon">
                                <img src="/images/icons/policy/icons8-call-50.png" alt="" />
                            </div>
                            <div className="policy-box-text">
                                If you have any questions or specific requirements, please visit our{" "}
                                <a href="/about.php">"Contact"</a> page.
                            </div>
                        </div>

                        <div className="clearfix" />
                    </section>
                    {/* End section for policy rental */}
                    <hr />
                    
                    <Comments />

                </div>
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
                    <div className="rent-per-day js-rent-per-day">(70.00 lv. / day)</div>
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
            </div>
            <div className="clearfix" />
            <div id="page-boxs-end" />
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


            <MostRented />

        </>
    );
}