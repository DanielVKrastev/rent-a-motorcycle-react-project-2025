import { useEffect, useState } from "react";

import './Checkout.css';
import DriverDetails from "./driver-details/DriverDetails";
import CheckoutBox from "./checkout-box/CheckoutBox";
import CheckoutMobileModal from "./checkout-box/checkout-mobile-modal/CheckoutMobileModal";
import { useLocation } from "react-router";

export default function Checkout() {
    const location = useLocation();

    const [isOpen, setIsOpen] = useState(false);

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

    const resevationData = location.state;
    console.log(resevationData);

    return (
        <>
            <div className="reservation-2-boxs">
                <form method="POST">
                    <DriverDetails />

                    <CheckoutBox setIsOpen={setIsOpen} />

                    <div className="clearfix" />
                </form>
            </div>

            <CheckoutMobileModal 
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />

        </>
    );
}