export default function CheckoutMobileModal({
    motorcycle,
    reservationData,
    isOpen,
    setIsOpen
}) {
    const motoRentPrice = Number(reservationData.rentPricePerDay).toFixed(2);
    const priceAllDay = (motoRentPrice * Number(reservationData.rentDays)).toFixed(2);
    const priceEquipment = Number(reservationData.passengerEquipment).toFixed(2);
    const priceHelmet = Number(reservationData.passengerHelmet).toFixed(2);
    const priceEmptyTank = Number(reservationData.emptyTank).toFixed(2);
    const priceDeliveryAirport = Number(reservationData.deliveryAirport).toFixed(2);
    const priceReturnAirport = Number(reservationData.returnAirport).toFixed(2);
    const priceDeliveryHotel = Number(reservationData.deliveryHotel).toFixed(2);
    const priceReturnHotel = Number(reservationData.returnHotel).toFixed(2);
    const totalSum = Number(reservationData.totalSum).toFixed(2);
    return (
        <>
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
                                    <img src={motorcycle.image} alt={`${motorcycle.brand} ${motorcycle.model}`} />
                                </div>
                                <div className="reservation-moto-title">
                                    <b>{motorcycle.brand} {motorcycle.model}</b>
                                </div>
                                <hr />
                                <div className="checkout-2-boxs">
                                    <div className="start-date-rent">
                                        <h5>Start</h5>
                                        <div className="date">
                                            <img src="/images/icons/icons8-date-50.png" alt="" />
                                            <input type="hidden" name="startDate" defaultValue={reservationData.startDate} />
                                            {reservationData.startDate}
                                        </div>
                                        <div className="location">
                                            {reservationData.deliveryAirport &&
                                                <>
                                                    <img src="/images/icons/icons8-airport-64.png" alt="" />
                                                    from Airport
                                                    <input type="hidden" name="delivery" defaultValue="from Airport" />
                                                </>
                                            }

                                            {reservationData.deliveryHotel &&
                                                <>
                                                    <img src="/images/icons/icons8-5-star-hotel-64.png" alt="" />
                                                    from a Hotel
                                                    <input type="hidden" name="delivery" defaultValue="from a Hotel" />
                                                </>
                                            }

                                            {(!reservationData.deliveryAirport && !reservationData.deliveryHotel) &&
                                                <>
                                                    <img src="/images/icons/icons8-office-50.png" alt="" />
                                                    from Office
                                                    <input type="hidden" name="delivery" defaultValue="from Office" />
                                                </>
                                            }

                                        </div>
                                    </div>
                                    <div className="end-date-rent">
                                        <h5>End</h5>
                                        <div className="date">
                                            <img src="/images/icons/icons8-date-50.png" alt="" />
                                            <input type="hidden" name="endDate" defaultValue={reservationData.endDate} />
                                            {reservationData.endDate}
                                        </div>
                                        <div className="location">
                                            {reservationData.returnAirport &&
                                                <>
                                                    <img src="/images/icons/icons8-airport-64.png" alt="" />
                                                    from Airport
                                                    <input type="hidden" name="bringBack" defaultValue="from Airport" />
                                                </>
                                            }

                                            {reservationData.returnHotel &&
                                                <>
                                                    <img src="/images/icons/icons8-5-star-hotel-64.png" alt="" />
                                                    from a Hotel
                                                    <input type="hidden" name="bringBack" defaultValue="from a Hotel" />
                                                </>
                                            }

                                            {(!reservationData.returnHotel && !reservationData.returnAirport) &&
                                                <>
                                                    <img src="/images/icons/icons8-office-50.png" alt="" />
                                                    from Office
                                                    <input type="hidden" name="bringBack" defaultValue="from Office" />
                                                </>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="checkout-2-boxs">
                                    <div className="description">
                                        <input type="hidden" name="motorcycleId" defaultValue={motorcycle._id} />
                                        <div className="desc-header">Moto Rent {reservationData.rentDays} days</div>
                                        <input type="hidden" name="days" defaultValue={reservationData.rentDays} />
                                        <div className="desc-sub">Rent for day</div>
                                        <div className="desc-header">Add-ons</div>
                                        <div className="desc-sub">Equipment </div>
                                        <div className="desc-sub">Helmet</div>
                                        <div className="desc-sub">Empty tank</div>
                                        {priceDeliveryAirport !== 'NaN' && <div className="desc-sub">Take/airport/</div>}
                                        {priceReturnAirport !== 'NaN' && <div className="desc-sub">Return/airport/</div>}
                                        {priceDeliveryHotel !== 'NaN' && <div className="desc-sub">Take/hotel/</div>}
                                        {priceReturnHotel !== 'NaN' && <div className="desc-sub">Return/hotel/</div>}
                                        <div className="desc-header">
                                            <b>All</b>
                                        </div>
                                    </div>
                                    <div className="checkout-prices">
                                        <div className="price-header">{priceAllDay} lv.</div>
                                        <div className="price-sub">{motoRentPrice} lv.</div>
                                        <div className="price-header">{(totalSum - priceAllDay).toFixed(2)} lv.</div>
                                        <div className="price-sub">{priceEquipment !== 'NaN' ? priceEquipment : '0.00'} lv.</div>
                                        <div className="price-sub">{priceHelmet !== 'NaN' ? priceHelmet : '0.00'} lv.</div>
                                        <div className="price-sub">{priceEmptyTank !== 'NaN' ? priceEmptyTank : '0.00'} lv.</div>
                                        {priceDeliveryAirport !== 'NaN' && <div className="price-sub">{priceDeliveryAirport} lv.</div>}
                                        {priceReturnAirport !== 'NaN' && <div className="price-sub">{priceReturnAirport} lv.</div>}
                                        {priceDeliveryHotel !== 'NaN' && <div className="price-sub">{priceDeliveryHotel} lv.</div>}
                                        {priceReturnHotel !== 'NaN' && <div className="price-sub">{priceReturnHotel} lv.</div>}
                                        <div className="price-header">
                                            <b>{totalSum} lv.</b>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="checkout-2-boxs">
                                    <div className="pay-now">
                                        <b>Pay now</b>
                                        <p>{(totalSum * 0.2).toFixed(2)} lv.</p>
                                        <input type="hidden" name="paid" defaultValue={(totalSum * 0.2).toFixed(2)} />
                                    </div>
                                    <div className="pay-onsite">
                                        <b>Pay after</b>
                                        <p>{(totalSum * 0.8).toFixed(2)} lv.</p>
                                        <input type="hidden" name="afterpay" defaultValue={(totalSum * 0.8).toFixed(2)} />
                                    </div>
                                </div>
                                <div className="pay-button text-center">
                                    <input type="hidden" name="totalPrice" defaultValue={totalSum} />
                                    <input
                                        type="submit"
                                        name="submit_pay_rent_moto"
                                        defaultValue={`Pay ${(totalSum * 0.2).toFixed(2)} lv`}
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

            <div className="buttons-mobile text-center" id="buttons-mobile">
                <div className="more-button">
                    <div onClick={() => setIsOpen(true)} >
                        Details<span>&#10548;</span>
                    </div>
                </div>
                <div className="pay-button-mobile">
                    <button type="submit" name="submit_pay_rent_moto">{`Pay ${(totalSum * 0.2).toFixed(2)} lv`}</button>
                </div>
            </div>
        </>
    );
}