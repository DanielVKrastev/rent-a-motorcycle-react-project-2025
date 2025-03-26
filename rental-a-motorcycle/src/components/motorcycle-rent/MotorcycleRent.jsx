import { useEffect, useState } from "react";

import './MotorcycleRent.css';

import MostRented from "../most-rented/MostRented";

import DetailsBox from "./details-box/DetailsBox";
import RentalBox from "./rental-box/RentalBox";
import RentalMobileModal from "./rental-box/rental-mobile-modal/RentalMobileModalBox";
import { useNavigate, useParams } from "react-router";
import { useMotorcycle } from "../../api/motorcycleApi";
import formatDate from "../../utils/formatDate";
import { useReservationsMotorcycleDates } from "../../api/reservationApi";

export default function MotorcycleRent() {
    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const { motorcycleId } = useParams();
    const { motorcycle, isLoading } = useMotorcycle(motorcycleId);
    const { dates } = useReservationsMotorcycleDates(motorcycleId);

    const disabledDates = dates.map(date => ({
        "start": new Date(date.startDate),
        "end": new Date(date.endDate)
    }));
    

    const [sumAddOptions, setSumAddOptions] = useState(0);

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

    function submitRentMotorcycle(e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const reservationData = Object.fromEntries(formData);

        const startDateFormatted = formatDate(startDate);
        const endDateFormatted = formatDate(endDate);
        reservationData.startDate = startDateFormatted;
        reservationData.endDate = endDateFormatted;

        navigate(`/checkout/${motorcycleId}`, { state: reservationData});
    }
    
    return !isLoading ?
            <>
            <form onSubmit={submitRentMotorcycle} id="form-reservation">
                <div className="page-2-boxs">

                    <DetailsBox 
                        motorcycle={motorcycle} 
                        setAddOptions={setSumAddOptions}
                    />

                    <RentalBox
                        motorcycle={motorcycle}
                        startDate={startDate}
                        endDate={endDate}
                        sumAddOptions={sumAddOptions}
                        disabledDates={disabledDates}
                        setStartDate={setStartDate}
                        setEndDate={setEndDate}
                    />

                </div>

                <div className="clearfix" />

                <div id="page-boxs-end" />

                <RentalMobileModal
                    motorcycle={motorcycle}
                    isOpen={isOpen}
                    startDate={startDate}
                    endDate={endDate}
                    sumAddOptions={sumAddOptions}
                    disabledDates={disabledDates}
                    setIsOpen={setIsOpen}
                    setStartDate={setStartDate}
                    setEndDate={setEndDate}
                />
                
            </form>

                <MostRented />

            </>
            :
            <div>Loading...</div>
            ;
}