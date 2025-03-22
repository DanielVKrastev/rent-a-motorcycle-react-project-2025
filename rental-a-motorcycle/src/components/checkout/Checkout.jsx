import { useEffect, useState } from "react";

import './Checkout.css';
import DriverDetails from "./driver-details/DriverDetails";
import CheckoutBox from "./checkout-box/CheckoutBox";
import CheckoutMobileModal from "./checkout-box/checkout-mobile-modal/CheckoutMobileModal";
import { useLocation, useParams } from "react-router";
import { useMotorcycle } from "../../api/motorcycleApi";

export default function Checkout() {
    const location = useLocation();

    const [isOpen, setIsOpen] = useState(false);

    const { motorcycleId } = useParams();
    const { motorcycle } = useMotorcycle(motorcycleId);
    
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

    const reservationData = location.state;

    function submitCreateReservation(e){
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const rentData = Object.fromEntries(formData);
        console.log(rentData);
        
    }

    return (
        <>
            <form onSubmit={submitCreateReservation}>
                <div className="reservation-2-boxs">
                        <DriverDetails />

                        <CheckoutBox 
                            motorcycle={motorcycle}
                            reservationData={reservationData}
                            setIsOpen={setIsOpen} 
                        />

                        <div className="clearfix" />
                    
                </div>

                <CheckoutMobileModal
                    motorcycle={motorcycle}
                    reservationData={reservationData}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                />
            </form>
        </>
    );
}