import { useEffect, useState } from "react";

import './Checkout.css';
import DriverDetails from "./driver-details/DriverDetails";
import CheckoutBox from "./checkout-box/CheckoutBox";
import CheckoutMobileModal from "./checkout-box/checkout-mobile-modal/CheckoutMobileModal";
import { useLocation, useParams } from "react-router";
import { useMotorcycle } from "../../api/motorcycleApi";
import useAuth from "../../hooks/useAuth";

export default function Checkout() {
    const location = useLocation();

    const [isOpen, setIsOpen] = useState(false);

    const { motorcycleId } = useParams();
    const { motorcycle } = useMotorcycle(motorcycleId);

    const { username, email, _id: userId } = useAuth();
    
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

        rentData.username = username;
        rentData.email = email;
        rentData.userId = userId;
 
        const dateOrder = new Date().toJSON();
        const startDate = new Date(rentData.startDate).toJSON();
        const endDate = new Date(rentData.endDate).toJSON();
        const birthday = new Date(rentData.birthday).toJSON();

        rentData.dateOrder = dateOrder;
        rentData.startDate = startDate;
        rentData.endDate = endDate;
        rentData.birthday = birthday;

        const passengerEquipment = reservationData.passengerEquipment;
        const passengerHelmet = reservationData.passengerHelmet;
        const emptyTank = reservationData.emptyTank;

        rentData.passengerEquipment = passengerEquipment? 'yes' : 'no';
        rentData.passengerHelmet = passengerHelmet? 'yes' : 'no';
        rentData.emptyTank = emptyTank? 'yes' : 'no';

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