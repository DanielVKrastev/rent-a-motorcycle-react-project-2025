import Comments from "../comments/Comments";

export default function DetailsBox({
    motorcycle,
    comments,
    setAddOptions
}) {
    function addHandlerPrice(event, amount){
        const isChecked = event.target.checked;
       
        setAddOptions(prev => isChecked ? prev + amount : prev - amount);
    }

    return (
        <>
            <div className="page-box-left" id="page-box-left">
                <div className="moto-img">
                    <img src={motorcycle.image? motorcycle.image : "/images/motorcycle_default.jpg"} alt={`${motorcycle.brand} ${motorcycle.model}`} />
                </div>
                <div className="moto-title">
                    <h2>{motorcycle.brand} {motorcycle.model}</h2>
                </div>
                <div className="moto-type">
                    <h3>{motorcycle.type}</h3>
                </div>
                <div className="moto-specs">
                    <div className="moto-specs-box">
                        <div className="moto-specs-icons">
                            <img src="/images/icons/icons8-moto-50.png" alt="" />
                        </div>
                        <div className="moto-specs-text">{motorcycle.engine} cc</div>
                    </div>
                    <div className="moto-specs-box">
                        <div className="moto-specs-icons">
                            <img src="/images/icons/icons8-horse-50.png" alt="" />
                        </div>
                        <div className="moto-specs-text">{motorcycle.power} hp</div>
                    </div>
                    <div className="moto-specs-box">
                        <div className="moto-specs-icons">
                            <img src="/images/icons/icons8-speed-50.png" alt="" />
                        </div>
                        <div className="moto-specs-text">{motorcycle.maxSpeed} km/h</div>
                    </div>
                    <div className="moto-specs-box">
                        <div className="moto-specs-icons">
                            <img src="/images/icons/icons8-calendar-50.png" alt="" />
                        </div>
                        <div className="moto-specs-text">{motorcycle.year} year</div>
                    </div>
                    <div className="moto-specs-box">
                        <div className="moto-specs-icons">
                            <img src="/images/icons/icons8-weight-50.png" alt="" />
                        </div>
                        <div className="moto-specs-text">{motorcycle.weight} kg</div>
                    </div>
                    <div className="moto-specs-box">
                        <div className="moto-specs-icons">
                            <img src="/images/icons/icons8-fuel-50.png" alt="" />
                        </div>
                        <div className="moto-specs-text">{motorcycle.tank} L</div>
                    </div>
                    <div className="moto-specs-box">
                        <div className="moto-specs-icons">
                            <img src="/images/icons/icons8-certificate-50.png" alt="" />
                        </div>
                        <div className="moto-specs-text">{motorcycle.category}</div>
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
                                name="passengerEquipment"
                                defaultValue={25}
                                onChange={(e) => addHandlerPrice(e, 25)}
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
                                name="passengerHelmet"
                                defaultValue={20}
                                onChange={(e) => addHandlerPrice(e, 20)}

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
                                name="emptyTank"
                                defaultValue={60}
                                onChange={(e) => addHandlerPrice(e, 60)}

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
                                name="deliveryAirport"
                                defaultValue={25.0}
                                onChange={(e) => addHandlerPrice(e, 25)}

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
                                name="returnAirport"
                                defaultValue={25.0}
                                onChange={(e) => addHandlerPrice(e, 25)}

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
                                name="deliveryHotel"
                                defaultValue={20.0}
                                onChange={(e) => addHandlerPrice(e, 20)}

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
                                name="returnHotel"
                                defaultValue={20.0}
                                onChange={(e) => addHandlerPrice(e, 20)}

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
                        {motorcycle.category === "A" && (
                            <div className="policy-box-text">
                                You must be <b>at least 21 years old</b> and have 12 months of driving experience.
                            </div>
                        )}

                        {motorcycle.category === "A2" && (
                            <div className="policy-box-text">
                                You must be <b>at least 19 years old</b> and have 12 months of driving experience.
                            </div>

                        )}
                        {motorcycle.category === "A1" && (
                            <div className="policy-box-text">
                                You must be <b>at least 17 years old</b> and have 12 months of driving experience.
                            </div>

                        )}

                    </div>
                    <div className="policy-box">
                        <div className="policy-box-icon">
                            <img src="/images/icons/policy/icons8-book-48.png" alt="" />
                        </div>
                        {motorcycle.category === "A" && (
                            <div className="policy-box-text">
                                This motorcycle requires a <b>Category A</b> license.
                            </div>
                        )}

                        {motorcycle.category === "A2" && (
                            <div className="policy-box-text">
                                This motorcycle requires a <b>Category A2</b> license.
                            </div>
                        )}

                        {motorcycle.category === "A1" && (
                            <div className="policy-box-text">
                                This motorcycle requires a <b>Category A1</b> license.
                            </div>
                        )}

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

                <Comments comments={comments}/>

            </div>
        </>
    );
}