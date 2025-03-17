import { useEffect, useState } from "react";

import './MotorcycleRent.css';

import MostRented from "../most-rented/MostRented";

import DetailsBox from "./details-box/DetailsBox";
import RentalBox from "./rental-box/RentalBox";
import RentalMobileModal from "./rental-box/rental-mobile-modal/RentalMobileModalBox";

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

                <DetailsBox />

                <RentalBox
                    startDate={startDate}
                    endDate={endDate}
                    setIsOpen={setIsOpen}
                    setStartDate={setStartDate}
                    setEndDate={setEndDate}
                />

            </div>

            <div className="clearfix" />

            <div id="page-boxs-end" />

            <RentalMobileModal
                isOpen={isOpen}
                startDate={startDate}
                endDate={endDate}
                setIsOpen={setIsOpen}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
            />

            <MostRented />

        </>
    );
}