import DatePicker from "react-datepicker";

export default function RentalBox({
    motorcycle,
    startDate,
    endDate,
    sumAddOptions,
    disabledDates,
    setStartDate,
    setEndDate
}) {
    let differenceInTime = endDate.getTime() - startDate.getTime();
    
    console.log(disabledDates);
    
    const isDateInRange = (date) => {
        return disabledDates.some(range => {
            const startDate = new Date(range.start);
            const endDate = new Date(range.end);
            const currentDate = new Date(date);
    
            // Set the time to 00:00:00 so that only dates are compared
            startDate.setHours(0, 0, 0, 0);
            endDate.setHours(0, 0, 0, 0);
            currentDate.setHours(0, 0, 0, 0);
    
            return currentDate >= startDate && currentDate <= endDate;
        });
      };
    

    //calc. the no. of days between 2 dates
    let differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24));
    if(differenceInDays === 0){
        differenceInDays += 1;
    }

    let pricePerDayAddOns = Number(sumAddOptions / differenceInDays);
    let pricePerDayMoto = Number(motorcycle.pricePerDay);

    if(differenceInDays > 5) {
        pricePerDayMoto = (pricePerDayMoto - 5);
    }
    if(differenceInDays > 7){
        pricePerDayMoto = (pricePerDayMoto - 5);
    }
    
    const totalSum = Number(differenceInDays * (Number(pricePerDayMoto.toFixed(2)) + Number(pricePerDayAddOns.toFixed(2)))).toFixed(2);

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
                    ({(pricePerDayMoto + pricePerDayAddOns).toFixed(2)} lv. / day)
                </div>
                <input
                    form="form-reservation"
                    type="hidden"
                    name="rentPricePerDay"
                    defaultValue={pricePerDayMoto.toFixed(2)}
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
                        filterDate={(date) => !isDateInRange(date)}  // Excludes dates in intervals
                        onChange={(date) => {setStartDate(date); setEndDate(date) }}
                        dateFormat="dd/MM/yyyy"
                        minDate={new Date()}
                    />
                </div>
                <div className="end-rent">
                    <p>Return date</p>
                    <DatePicker
                        selected={endDate}
                        filterDate={(date) => !isDateInRange(date)}  // Excludes dates in intervals
                        onChange={(date) => setEndDate(date)}
                        dateFormat="dd/MM/yyyy"
                        minDate={new Date(startDate)}
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