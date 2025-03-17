import { useEffect, useState } from "react";

import './Checkout.css';
import DriverDetails from "./driver-details/DriverDetails";
import CheckoutBox from "./checkout-box/CheckoutBox";
import CheckoutMobileModal from "./checkout-box/checkout-mobile-modal/CheckoutMobileModal";

export default function Checkout() {
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