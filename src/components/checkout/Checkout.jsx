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
                            <h1>Детайли за резервацията</h1>
                            <br />
                            <h2>Данни за водача</h2>
                            <h3>Тази информация ще се използва за потвърждение за наем</h3>
                            <div className="input-reservation-box">
                                <label htmlFor="first_name">Име *</label>
                                <br />
                                <input type="text" name="first_name" placeholder="Име" required="" />
                            </div>
                            <div className="input-reservation-box">
                                <label htmlFor="second_name">Фамилия *</label>
                                <br />
                                <input
                                    type="text"
                                    name="second_name"
                                    placeholder="Фамилия"
                                    required=""
                                />
                            </div>
                            <div className="input-reservation-box">
                                <label htmlFor="client_telephone">Телефонен номер *</label>
                                <br />
                                <input
                                    type="text"
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
                                <label htmlFor="license_category">Категория *</label>
                                <br />
                                <select name="license_category" required="">
                                    <option value="A">A</option>
                                    <option value="A2">A2</option>
                                    <option value="A1">A1</option>
                                    <option value="AM">AM</option>
                                </select>
                            </div>
                            <div className="input-reservation-box" required="">
                                <label htmlFor="birthday">Рожденна дата *</label>
                                <br />
                                <input type="date" name="birthday" />
                            </div>
                            <div className="clearfix" />
                        </section>
                        {/* End section for reservation for data driver */}
                        <hr />
                        {/* Start section for Terms & Conditions */}
                        <section className="terms-section">
                            <h2>Правила и условия</h2>
                            <h3>Приемете условията за да продължите</h3>
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
                                    Приемам политиката за поверителност на Moto Krastev Rent &amp; Tour,
                                    условията за ползване и условия за резервация.
                                </div>
                            </div>
                            <div className="terms-box">
                                <div className="terms-checkbox text-center">
                                    <input type="checkbox" name="subscribe-submit" defaultValue="Yes" />
                                </div>
                                <div className="terms-text">
                                    Абонирайте се за нашия бюлетин и ние ще ви информираме за нашите
                                    нови обиколки и услуги.
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
                                <h5>Наемане</h5>
                                <div className="date">
                                    <img src="/images/icons/icons8-date-50.png" alt="" />
                                    <input type="hidden" name="date_from" defaultValue="03.03.2025" />
                                    03.03.2025
                                </div>
                                <div className="location">
                                    <img src="/images/icons/icons8-airport-64.png" alt="" />
                                    от летище
                                    <input type="hidden" name="delivery" defaultValue="от летище" />
                                    <img src="/images/icons/icons8-5-star-hotel-64.png" alt="" />
                                    от хотел
                                    <input type="hidden" name="delivery" defaultValue="от хотел" />
                                    <img src="/images/icons/icons8-office-50.png" alt="" />
                                    от офис
                                    <input type="hidden" name="delivery" defaultValue="от офис" />
                                </div>
                            </div>
                            <div className="end-date-rent">
                                <h5>Отдаване</h5>
                                <div className="date">
                                    <img src="/images/icons/icons8-date-50.png" alt="" />
                                    <input type="hidden" name="date_to" defaultValue="03.10.2025" />
                                    03.10.2025
                                </div>
                                <div className="location">
                                    <img src="/images/icons/icons8-airport-64.png" alt="" />
                                    от летище
                                    <input type="hidden" name="bring_back" defaultValue="от летище" />
                                    <img src="/images/icons/icons8-5-star-hotel-64.png" alt="" />
                                    от хотел
                                    <input type="hidden" name="bring_back" defaultValue="от хотел" />
                                    <img src="/images/icons/icons8-office-50.png" alt="" />
                                    от офис
                                    <input type="hidden" name="bring_back" defaultValue="от офис" />
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="checkout-2-boxs">
                            <div className="description">
                                <input type="hidden" name="id_motorcycle" defaultValue="id" />
                                <div className="desc-header">Наем на мотоциклет 7 дни</div>
                                <input type="hidden" name="days" defaultValue={7} />
                                <div className="desc-sub">Наем за ден</div>
                                <div className="desc-header">Добавки</div>
                                <div className="desc-sub">Екипировка</div>
                                <div className="desc-sub">Каска</div>
                                <div className="desc-sub">Празен резервоар</div>
                                <div className="desc-sub">Доставяне/летище/</div>
                                <div className="desc-sub">Връщане/летище/</div>
                                <div className="desc-sub">Доставяне/хотел/</div>
                                <div className="desc-sub">Връщане/хотел/</div>
                                <div className="desc-header">
                                    <b>Общо</b>
                                </div>
                            </div>
                            <div className="checkout-prices">
                                <div className="price-header">70 лв.</div>
                                <div className="price-sub">120 лв.</div>
                                <div className="price-header">0 лв.</div>
                                <div className="price-sub">
                                    0 лв.
                                    <input type="hidden" name="equipment" defaultValue={0} />
                                </div>
                                <div className="price-sub">
                                    0 лв.
                                    <input type="hidden" name="helmet" defaultValue={0} />
                                </div>
                                <div className="price-sub">
                                    0 лв.
                                    <input type="hidden" name="tank" defaultValue={0} />
                                </div>
                                <div className="price-sub">0 лв.</div>
                                <div className="price-sub">0 лв.</div>
                                <div className="price-sub">0 лв.</div>
                                <div className="price-sub">0 лв.</div>
                                <div className="price-header">
                                    <b>120 лв.</b>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="checkout-2-boxs">
                            <div className="pay-now">
                                <b>Плати сега</b>
                                <p>120 лв.</p>
                                <input type="hidden" name="paid" defaultValue={120} />
                            </div>
                            <div className="pay-onsite">
                                <b>Плати на място</b>
                                <p>120 лв.</p>
                                <input type="hidden" name="afterpay" defaultValue={120} />
                            </div>
                        </div>
                        <div className="pay-button text-center">
                            <input type="hidden" name="total_price" defaultValue={120} />
                            <input
                                type="submit"
                                name="submit_pay_rent_moto"
                                defaultValue="Плати 120 лв"
                            />
                        </div>
                        <div className="close-button text-center">
                            <div className="button">
                                Затвори
                            </div>
                        </div>
                    </div>
                    <div className="buttons-mobile text-center" id="buttons-mobile">
                        <div className="more-button">
                            <div onClick={() => setIsOpen(true)} >
                                Подробности<span>&#10548;</span>
                            </div>
                        </div>
                        <div className="pay-button-mobile">
                            <button name="submit_pay_rent_moto">Плати 120 лв</button>
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
                                        <h5>Наемане</h5>
                                        <div className="date">
                                            <img src="/images/icons/icons8-date-50.png" alt="" />
                                            <input type="hidden" name="date_from" defaultValue="03.03.2025" />
                                            03.03.2025
                                        </div>
                                        <div className="location">
                                            <img src="/images/icons/icons8-airport-64.png" alt="" />
                                            от летище
                                            {/*
                                            <input type="hidden" name="delivery" defaultValue="от летище" />
                                            <img src="/images/icons/icons8-5-star-hotel-64.png" alt="" />
                                            от хотел
                                            <input type="hidden" name="delivery" defaultValue="от хотел" />
                                            <img src="/images/icons/icons8-office-50.png" alt="" />
                                            от офис
                                            <input type="hidden" name="delivery" defaultValue="от офис" />
                                            */}
                                        </div>
                                    </div>
                                    <div className="end-date-rent">
                                        <h5>Отдаване</h5>
                                        <div className="date">
                                            <img src="/images/icons/icons8-date-50.png" alt="" />
                                            <input type="hidden" name="date_to" defaultValue="03.10.2025" />
                                            03.10.2025
                                        </div>
                                        <div className="location">
                                            <img src="/images/icons/icons8-airport-64.png" alt="" />
                                            от летище
                                            <input type="hidden" name="bring_back" defaultValue="от летище" />
                                            {/*
                                            <img src="/images/icons/icons8-5-star-hotel-64.png" alt="" />
                                            от хотел
                                            <input type="hidden" name="bring_back" defaultValue="от хотел" />
                                            <img src="/images/icons/icons8-office-50.png" alt="" />
                                            от офис
                                            <input type="hidden" name="bring_back" defaultValue="от офис" />
                                            */}
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="checkout-2-boxs">
                                    <div className="description">
                                        <input type="hidden" name="id_motorcycle" defaultValue="id" />
                                        <div className="desc-header">Наем на мотоциклет 7 дни</div>
                                        <input type="hidden" name="days" defaultValue={7} />
                                        <div className="desc-sub">Наем за ден</div>
                                        <div className="desc-header">Добавки</div>
                                        <div className="desc-sub">Екипировка</div>
                                        <div className="desc-sub">Каска</div>
                                        <div className="desc-sub">Празен резервоар</div>
                                        <div className="desc-sub">Доставяне/летище/</div>
                                        <div className="desc-sub">Връщане/летище/</div>
                                        <div className="desc-sub">Доставяне/хотел/</div>
                                        <div className="desc-sub">Връщане/хотел/</div>
                                        <div className="desc-header">
                                            <b>Общо</b>
                                        </div>
                                    </div>
                                    <div className="checkout-prices">
                                        <div className="price-header">70 лв.</div>
                                        <div className="price-sub">120 лв.</div>
                                        <div className="price-header">0 лв.</div>
                                        <div className="price-sub">
                                            0 лв.
                                            <input type="hidden" name="equipment" defaultValue={0} />
                                        </div>
                                        <div className="price-sub">
                                            0 лв.
                                            <input type="hidden" name="helmet" defaultValue={0} />
                                        </div>
                                        <div className="price-sub">
                                            0 лв.
                                            <input type="hidden" name="tank" defaultValue={0} />
                                        </div>
                                        <div className="price-sub">0 лв.</div>
                                        <div className="price-sub">0 лв.</div>
                                        <div className="price-sub">0 лв.</div>
                                        <div className="price-sub">0 лв.</div>
                                        <div className="price-header">
                                            <b>120 лв.</b>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="checkout-2-boxs">
                                    <div className="pay-now">
                                        <b>Плати сега</b>
                                        <p>120 лв.</p>
                                        <input type="hidden" name="paid" defaultValue={120} />
                                    </div>
                                    <div className="pay-onsite">
                                        <b>Плати на място</b>
                                        <p>120 лв.</p>
                                        <input type="hidden" name="afterpay" defaultValue={120} />
                                    </div>
                                </div>
                                <div className="pay-button text-center">
                                    <input type="hidden" name="total_price" defaultValue={120} />
                                    <input
                                        type="submit"
                                        name="submit_pay_rent_moto"
                                        defaultValue="Плати 120 лв"
                                    />
                                </div>
                                <div className="close-button text-center">
                                    <div className="button" onClick={() => setIsOpen(false)}>
                                        Затвори
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