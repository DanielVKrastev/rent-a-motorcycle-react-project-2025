import { useEffect, useState } from "react";

import './MotorcycleRent.css';

import MostRented from "../most-rented/MostRented";

import DetailsBox from "./details-box/DetailsBox";
import RentalBox from "./rental-box/RentalBox";
import RentalMobileModal from "./rental-box/rental-mobile-modal/RentalMobileModalBox";
import { useParams } from "react-router";
import { useMotorcycle } from "../../api/motorcycleApi";

export default function MotorcycleRent() {
    const [isOpen, setIsOpen] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const { motorcycleId } = useParams();
    const { motorcycle, isLoading } = useMotorcycle(motorcycleId);

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
        const data = Object.fromEntries(formData);
        console.log(data);
        
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