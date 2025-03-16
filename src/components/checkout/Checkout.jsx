import { useEffect, useState } from "react";
import { Link } from "react-router";

import './Checkout.css';

export default function Checkout() {
    const [isOpen, setIsOpen] = useState(false);

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
            <div className="reservation-2-boxs">
                <form action="checkout.php" method="POST">
                    <div className="reservation-data-left" id="reservation-data-left">
                        {/* Start section for reservation for data driver */}
                        <section className="reservation-driver-section">
                            <h1 className="text-2xl font-bold">Reservation details</h1>
                            <br />
                            <h2 className="text-1xl font-bold">Driver details</h2>
                            <h3 className="text-1xl font-bold">This information will be used for rental confirmation.</h3>
                            <div className="input-reservation-box">
                                <label htmlFor="first-name">Name *</label>
                                <br />
                                <input type="text" name="first-name" placeholder="Ivan" required="" />
                            </div>
                            <div className="input-reservation-box">
                                <label htmlFor="last-name">Last name *</label>
                                <br />
                                <input
                                    type="text"
                                    name="last-name"
                                    placeholder="Ivanov"
                                    required=""
                                />
                            </div>
                            <div className="input-reservation-box">
                                <label htmlFor="client_telephone">Telephone *</label>
                                <br />
                                <input
                                    type="number"
                                    name="client_telephone"
                                    defaultValue={+359}
                                    required=""
                                />
                            </div>
                            <div className="input-reservation-box">
                                <label htmlFor="email">E-mail *</label>
                                <br />
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="email@email.com"
                                    required=""
                                />
                            </div>
                            <div className="input-reservation-box">
                                <label htmlFor="license_category">Category *</label>
                                <br />
                                <select name="license_category" required="">
                                    <option value="A">A</option>
                                    <option value="A2">A2</option>
                                    <option value="A1">A1</option>
                                    <option value="AM">AM</option>
                                </select>
                            </div>
                            <div className="input-reservation-box" required="">
                                <label htmlFor="birthday">Date of birth *</label>
                                <br />
                                <input type="date" name="birthday" />
                            </div>
                            <div className="clearfix" />
                        </section>
                        {/* End section for reservation for data driver */}
                        <hr />
                        {/* Start section for Terms & Conditions */}
                        <section className="terms-section">
                            <h2 className="text-1xl font-bold">Terms and conditions</h2>
                            <h3 className="text-1xl font-bold">Accept the terms to continue</h3>
                            <div className="terms-box">
                                <div className="terms-checkbox text-center">
                                    <input
                                        type="checkbox"
                                        name="terms"
                                        defaultValue="Accept"
                                        required=""
                                    />
                                </div>
                                <div className="terms-text">
                                    I accept Moto Krastev's privacy policy, terms of use and booking conditions.
                                </div>
                            </div>
                            <div className="terms-box">
                                <div className="terms-checkbox text-center">
                                    <input type="checkbox" name="subscribe-submit" defaultValue="Yes" />
                                </div>
                                <div className="terms-text">
                                    Subscribe to our newsletter and we will inform you about our new services.
                                </div>
                            </div>
                        </section>
                        {/* End section for Terms & Conditions */}
                    </div>
                    <div
                        className="reservation-checkout-right text-center"
                        id="reservation-checkout-right"
                    >
                        <div className="reservation-moto-img">
                            <img src="/images/honda_cbr.png" alt="" />
                        </div>
                        <div className="reservation-moto-title">
                            <b>Honda CBR 600RR</b>
                        </div>
                        <hr />
                        <div className="checkout-2-boxs">
                            <div className="start-date-rent">
                                <h5>Start</h5>
                                <div className="date">
                                    <img src="/images/icons/icons8-date-50.png" alt="" />
                                    <input type="hidden" name="date_from" defaultValue="03.03.2025" />
                                    03.03.2025
                                </div>
                                <div className="location">
                                    <img src="/images/icons/icons8-airport-64.png" alt="" />
                                    from Airport
                                    <input type="hidden" name="delivery" defaultValue="от летище" />
                                    <img src="/images/icons/icons8-5-star-hotel-64.png" alt="" />
                                    from a Hotel
                                    <input type="hidden" name="delivery" defaultValue="от хотел" />
                                    <img src="/images/icons/icons8-office-50.png" alt="" />
                                    from Office
                                    <input type="hidden" name="delivery" defaultValue="от офис" />
                                </div>
                            </div>
                            <div className="end-date-rent">
                                <h5>End</h5>
                                <div className="date">
                                    <img src="/images/icons/icons8-date-50.png" alt="" />
                                    <input type="hidden" name="date_to" defaultValue="03.10.2025" />
                                    03.10.2025
                                </div>
                                <div className="location">
                                    <img src="/images/icons/icons8-airport-64.png" alt="" />
                                    from Airport
                                    <input type="hidden" name="bring_back" defaultValue="от летище" />
                                    <img src="/images/icons/icons8-5-star-hotel-64.png" alt="" />
                                    from a Hotel
                                    <input type="hidden" name="bring_back" defaultValue="от хотел" />
                                    <img src="/images/icons/icons8-office-50.png" alt="" />
                                    from Office
                                    <input type="hidden" name="bring_back" defaultValue="от офис" />
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="checkout-2-boxs">
                            <div className="description">
                                <input type="hidden" name="id_motorcycle" defaultValue="id" />
                                <div className="desc-header">Moto Rent 7 days</div>
                                <input type="hidden" name="days" defaultValue={7} />
                                <div className="desc-sub">Rent for day</div>
                                <div className="desc-header">Add-ons</div>
                                <div className="desc-sub">Equipment </div>
                                <div className="desc-sub">Helmet</div>
                                <div className="desc-sub">Empty tank</div>
                                <div className="desc-sub">Take/airport/</div>
                                <div className="desc-sub">Return/airport/</div>
                                <div className="desc-sub">Take/hotel/</div>
                                <div className="desc-sub">Return/hotel/</div>
                                <div className="desc-header">
                                    <b>All</b>
                                </div>
                            </div>
                            <div className="checkout-prices">
                                <div className="price-header">70 lv.</div>
                                <div className="price-sub">120 lv.</div>
                                <div className="price-header">0 lv.</div>
                                <div className="price-sub">
                                    0 lv.
                                    <input type="hidden" name="equipment" defaultValue={0} />
                                </div>
                                <div className="price-sub">
                                    0 lv.
                                    <input type="hidden" name="helmet" defaultValue={0} />
                                </div>
                                <div className="price-sub">
                                    0 lv.
                                    <input type="hidden" name="tank" defaultValue={0} />
                                </div>
                                <div className="price-sub">0 lv.</div>
                                <div className="price-sub">0 lv.</div>
                                <div className="price-sub">0 lv.</div>
                                <div className="price-sub">0 lv.</div>
                                <div className="price-header">
                                    <b>120 lv.</b>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="checkout-2-boxs">
                            <div className="pay-now">
                                <b>Pay now</b>
                                <p>120 lv.</p>
                                <input type="hidden" name="paid" defaultValue={120} />
                            </div>
                            <div className="pay-onsite">
                                <b>Pay after</b>
                                <p>120 lv.</p>
                                <input type="hidden" name="afterpay" defaultValue={120} />
                            </div>
                        </div>
                        <div className="pay-button text-center">
                            <input type="hidden" name="total_price" defaultValue={120} />
                            <input
                                type="submit"
                                name="submit_pay_rent_moto"
                                defaultValue="Pay 120 lv"
                            />
                        </div>
                        <div className="close-button text-center">
                            <div className="button">
                                Close
                            </div>
                        </div>
                    </div>
                    <div className="buttons-mobile text-center" id="buttons-mobile">
                        <div className="more-button">
                            <div onClick={() => setIsOpen(true)} >
                                Details<span>&#10548;</span>
                            </div>
                        </div>
                        <div className="pay-button-mobile">
                            <button name="submit_pay_rent_moto">Pay 120 lv</button>
                        </div>
                    </div>
                    <div className="clearfix" />
                </form>
            </div>

            {/* Small Modal */}
            {isOpen && (
                <div onClick={() => setIsOpen(false)} className="bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-50">
                    <div
                        id="small-modal"
                        tabIndex={-1}
                        className="fixed top-0 left-0 right-0 z-50 w-full p-4  md:inset-0 h-[calc(100%-1rem)] max-h-full justify-center items-center flex"
                        aria-modal="true"
                        role="dialog"
                    >
                        <div className="relative w-full z-50 max-w-md max-h-full">
                            {/* Modal content */}
                            <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md text-center z-50" onClick={(e) => e.stopPropagation()}>
                                <div className="reservation-moto-img">
                                    <img src="/images/honda_cbr.png" alt="" />
                                </div>
                                <div className="reservation-moto-title">
                                    <b>Honda CBR 600RR</b>
                                </div>
                                <hr />
                                <div className="checkout-2-boxs">
                                    <div className="start-date-rent">
                                        <h5>Start</h5>
                                        <div className="date">
                                            <img src="/images/icons/icons8-date-50.png" alt="" />
                                            <input type="hidden" name="date_from" defaultValue="03.03.2025" />
                                            03.03.2025
                                        </div>
                                        <div className="location">
                                            <img src="/images/icons/icons8-airport-64.png" alt="" />
                                            from Airport
                                            {/*
                                            <input type="hidden" name="delivery" defaultValue="от летище" />
                                            <img src="/images/icons/icons8-5-star-hotel-64.png" alt="" />
                                            from a Hotel
                                            <input type="hidden" name="delivery" defaultValue="от хотел" />
                                            <img src="/images/icons/icons8-office-50.png" alt="" />
                                            from Office
                                            <input type="hidden" name="delivery" defaultValue="от офис" />
                                            */}
                                        </div>
                                    </div>
                                    <div className="end-date-rent">
                                        <h5>End</h5>
                                        <div className="date">
                                            <img src="/images/icons/icons8-date-50.png" alt="" />
                                            <input type="hidden" name="date_to" defaultValue="03.10.2025" />
                                            03.10.2025
                                        </div>
                                        <div className="location">
                                            <img src="/images/icons/icons8-airport-64.png" alt="" />
                                            from Airport
                                            <input type="hidden" name="bring_back" defaultValue="от летище" />
                                            {/*
                                            <img src="/images/icons/icons8-5-star-hotel-64.png" alt="" />
                                            from a Hotel
                                            <input type="hidden" name="bring_back" defaultValue="от хотел" />
                                            <img src="/images/icons/icons8-office-50.png" alt="" />
                                            from Office
                                            <input type="hidden" name="bring_back" defaultValue="от офис" />
                                            */}
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="checkout-2-boxs">
                                    <div className="description">
                                        <input type="hidden" name="id_motorcycle" defaultValue="id" />
                                        <div className="desc-header">Moto Rent 7 days</div>
                                        <input type="hidden" name="days" defaultValue={7} />
                                        <div className="desc-sub">Rent for day</div>
                                        <div className="desc-header">Add-ons</div>
                                        <div className="desc-sub">Equipment </div>
                                        <div className="desc-sub">Helmet</div>
                                        <div className="desc-sub">Empty tank</div>
                                        <div className="desc-sub">Take/airport/</div>
                                        <div className="desc-sub">Return/airport/</div>
                                        <div className="desc-sub">Take/hotel/</div>
                                        <div className="desc-sub">Return/hotel/</div>
                                        <div className="desc-header">
                                            <b>All</b>
                                        </div>
                                    </div>
                                    <div className="checkout-prices">
                                        <div className="price-header">70 lv.</div>
                                        <div className="price-sub">120 lv.</div>
                                        <div className="price-header">0 lv.</div>
                                        <div className="price-sub">
                                            0 lv.
                                            <input type="hidden" name="equipment" defaultValue={0} />
                                        </div>
                                        <div className="price-sub">
                                            0 lv.
                                            <input type="hidden" name="helmet" defaultValue={0} />
                                        </div>
                                        <div className="price-sub">
                                            0 lv.
                                            <input type="hidden" name="tank" defaultValue={0} />
                                        </div>
                                        <div className="price-sub">0 lv.</div>
                                        <div className="price-sub">0 lv.</div>
                                        <div className="price-sub">0 lv.</div>
                                        <div className="price-sub">0 lv.</div>
                                        <div className="price-header">
                                            <b>120 lv.</b>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="checkout-2-boxs">
                                    <div className="pay-now">
                                        <b>Pay now</b>
                                        <p>120 lv.</p>
                                        <input type="hidden" name="paid" defaultValue={120} />
                                    </div>
                                    <div className="pay-onsite">
                                        <b>Pay after</b>
                                        <p>120 lv.</p>
                                        <input type="hidden" name="afterpay" defaultValue={120} />
                                    </div>
                                </div>
                                <div className="pay-button text-center">
                                    <input type="hidden" name="total_price" defaultValue={120} />
                                    <input
                                        type="submit"
                                        name="submit_pay_rent_moto"
                                        defaultValue="Pay 120 lv"
                                    />
                                </div>
                                <div className="close-button text-center">
                                    <div className="button" onClick={() => setIsOpen(false)}>
                                        Close
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