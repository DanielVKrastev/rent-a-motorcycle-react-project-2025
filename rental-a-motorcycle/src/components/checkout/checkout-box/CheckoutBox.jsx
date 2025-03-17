export default function CheckoutBox({
    setIsOpen
}) {
    return (
        <>
            <div className="reservation-checkout-right text-center" id="reservation-checkout-right">
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
        </>
    );
}