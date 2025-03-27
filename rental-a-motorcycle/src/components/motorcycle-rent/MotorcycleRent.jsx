import { useContext, useEffect, useState } from "react";

import './MotorcycleRent.css';

import MostRented from "../most-rented/MostRented";

import DetailsBox from "./details-box/DetailsBox";
import RentalBox from "./rental-box/RentalBox";
import RentalMobileModal from "./rental-box/rental-mobile-modal/RentalMobileModalBox";
import { useNavigate, useParams } from "react-router";
import { useMotorcycle } from "../../api/motorcycleApi";
import formatDate from "../../utils/formatDate";
import { useReservationsMotorcycleDates } from "../../api/reservationApi";
import LoadingSpinner from "../loading-spinner/LoadingSpinner";
import { UserContext } from "../../contexts/UserContext";
import { useComments, useCreateComment } from "../../api/commentApi";
import MessageToast from "../messageToast/MessageToast";

export default function MotorcycleRent() {
    const navigate = useNavigate();
    const { accessToken } = useContext(UserContext);

    const [showMessageToast, setMessageShowToast] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const { motorcycleId } = useParams();
    const { motorcycle, isLoading } = useMotorcycle(motorcycleId);
    const { dates } = useReservationsMotorcycleDates(motorcycleId);

    const { createComment } = useCreateComment();
    const { comments, isLoading: isLoadingComments } = useComments(motorcycleId);
    const [showComments, setShowComments] = useState([]);
    
    useEffect(() => {
        if (!isLoadingComments  && comments.length > 0) {
            setShowComments(comments);
        }
    }, [comments, isLoadingComments])

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

        navigate(`/checkout/${motorcycleId}`, { state: reservationData });
    }

    async function submitComment(e){
        e.preventDefault();
        if(!accessToken){
            return navigate('/login');
        }

        const formData = new FormData(e.currentTarget);
        const rating = formData.get('rating');
        const commentText = formData.get('commentText');

        try{
            const newComment = await createComment({rating, commentText, motorcycleId});
            setShowComments(state => [ newComment, ...state ]);
            setMessageShowToast({ type: 'success', content: 'Comment added successfully!' });
        }catch(err){
            setMessageShowToast({ type: 'error', content: err.message });
        }
    }

    return (
        <>
            {isLoading && <LoadingSpinner />}

            {showMessageToast && <MessageToast message={showMessageToast} onClose={setMessageShowToast} />}

            <form onSubmit={submitComment} id="form-comment"></form>
            
            <form onSubmit={submitRentMotorcycle} id="form-reservation">
                <div className="page-2-boxs">


                    <DetailsBox
                        motorcycle={motorcycle}
                        comments={showComments}
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
    );
}