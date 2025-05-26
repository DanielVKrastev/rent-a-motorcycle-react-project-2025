import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";

import './Checkout.css';

import { useEditMotorcycle, useMotorcycle } from "../../api/motorcycleApi";
import { useEditUser } from "../../api/userApi";
import { useCreateReservation } from "../../api/reservationApi";

import DriverDetails from "./driver-details/DriverDetails";
import CheckoutBox from "./checkout-box/CheckoutBox";
import CheckoutMobileModal from "./checkout-box/checkout-mobile-modal/CheckoutMobileModal";
import useAuth from "../../hooks/useAuth";
import LoadingSpinner from "../loading-spinner/LoadingSpinner";
import MessageToast from "../messageToast/MessageToast";

export default function Checkout() {
    const navigate = useNavigate();
    const location = useLocation();

    const [isOpen, setIsOpen] = useState(false);
    const [showMessageToast, setMessageShowToast] = useState(false);
    const [isLoadingCheckout, setIsLoadingCheckout] = useState(false);

    const { motorcycleId } = useParams();
    const { motorcycle, isLoading } = useMotorcycle(motorcycleId);

    const { username, email, _id: userId } = useAuth();
    
    const { createReservation } = useCreateReservation();
    const { edit: editMotorcycle } = useEditMotorcycle();
    const { edit: editUser } = useEditUser();

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

    async function submitCreateReservation(e) {
        e.preventDefault();

        setIsLoadingCheckout(true);

        const formData = new FormData(e.currentTarget);
        const rentData = Object.fromEntries(formData);

        try {
            if (rentData.telephone.length < 8 || rentData.telephone.length > 20) {
                setIsLoadingCheckout(false);
                return setMessageShowToast({ type: 'error', content: 'The telephone number length must be at 8 - 20 symbols.' });
            }
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
            rentData.telephone = rentData.telephone?.replace(/\s+/g, '')

            const passengerEquipment = reservationData.passengerEquipment;
            const passengerHelmet = reservationData.passengerHelmet;
            const emptyTank = reservationData.emptyTank;

            rentData.passengerEquipment = passengerEquipment ? 'yes' : 'no';
            rentData.passengerHelmet = passengerHelmet ? 'yes' : 'no';
            rentData.emptyTank = emptyTank ? 'yes' : 'no';

            rentData.status = 'Pending';

            try {
                const newReservation = await createReservation(rentData);

                const reservationCount = motorcycle.reservationCount + 1;

                try {
                    if (newReservation) {
                        await editMotorcycle(motorcycleId, { reservationCount });
                    }
                } catch (err) {
                    console.error(err.message);
                    throw err;
                }

                try {
                    if (rentData.rememberDetails) {
                        await editUser(userId, { birthday: birthday, licenseCategory: rentData.licenseCategory, telephone: rentData.telephone });
                        console.log('edit success');
                    }
                } catch (err) {
                    console.error(err.message);
                    throw err;
                }

                navigate("/success-reservation", { state: { reservation: newReservation } });
                setIsLoadingCheckout(false);
            } catch (err) {
                console.error(err.message);
                throw err;
            }
        } catch (err) {
            setMessageShowToast({ type: 'error', content: err.message });
            console.log(err.message);
            setIsLoadingCheckout(false);
        }

    }

    return (
        <>
            {showMessageToast && <MessageToast message={showMessageToast} onClose={setMessageShowToast} />}

            {isLoading && <LoadingSpinner />}
            {isLoadingCheckout && <LoadingSpinner />}

            <form onSubmit={submitCreateReservation}>
                <div className="reservation-2-boxs">
                    <DriverDetails 
                        userId={userId}    
                    />

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