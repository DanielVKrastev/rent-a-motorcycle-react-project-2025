import { Link } from "react-router";

import DatePicker from "react-datepicker";

export default function RentalBox({
    motorcycle,
    startDate,
    endDate,
    sumAddOptions,
    setStartDate,
    setEndDate
}) {
    let differenceInTime = endDate.getTime() - startDate.getTime();

    //calc. the no. of days between 2 dates
    let differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24));
    if(differenceInDays === 0){
        differenceInDays += 1;
    }

    let pricePerDayWithAddOns = (motorcycle.pricePerDay + sumAddOptions / differenceInDays).toFixed(2);
    if(differenceInDays > 5) {
        pricePerDayWithAddOns = (pricePerDayWithAddOns - 5).toFixed(2);
    }
    if(differenceInDays > 7){
        pricePerDayWithAddOns = (pricePerDayWithAddOns - 5).toFixed(2);
    }
    
    const totalSum = (differenceInDays * pricePerDayWithAddOns).toFixed(2);

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
            {/* End rent box */}
        </>
    );
}