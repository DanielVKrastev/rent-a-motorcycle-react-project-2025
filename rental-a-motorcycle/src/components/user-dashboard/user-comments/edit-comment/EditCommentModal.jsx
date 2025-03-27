import { useState } from "react";
import MessageToast from "../../../messageToast/MessageToast";
import LoadingSpinner from "../../../loading-spinner/LoadingSpinner";
import { useEditComment } from "../../../../api/commentApi";

export default function EditCommentModal({
    comment,
    setEditComment,
    setIsOpen,
}) {
    const [showMessageToast, setMessageShowToast] = useState(false);
    const [isLoadingEdit, setIsLoadingEdit] = useState(false);

    const { edit } = useEditComment();

    const [rating, setRating] = useState(comment.rating);

    const handleStarRating = (value) => {
        setRating(value);
    };

    const editSubmitHandle = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const rating = formData.get('rating');
        const commentText = formData.get('commentText');
        
        setIsLoadingEdit(true);
        try {
            const editComment = await edit(comment._id, { rating, commentText });
            setIsLoadingEdit(false);
            setEditComment(editComment);

            setIsOpen(false);
        } catch (err) {
            setMessageShowToast({ type: 'error', content: err.message });
        }
    }

    return (
        <>
            <div onClick={() => { setIsOpen(false); setEditComment(null) }} className="bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-50">
                {showMessageToast && <MessageToast message={showMessageToast} onClose={setMessageShowToast} />}
                <div
                    className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full justify-center items-center flex"
                    id="large-modal"
                    tabIndex="-1"
                    role="dialog">
                    <div className="relative w-full max-w-xl max-h-full" onClick={(e) => { e.stopPropagation() }}>
                        <div className="relative bg-white rounded-lg shadow-sm">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200">
                                <h3 className="text-xl font-medium text-gray-900 w-1/6">
                                    Edit User
                                </h3>
                                {isLoadingEdit && <div className="flex items-center justify-center w-full">
                                    <LoadingSpinner />
                                </div>
                                }
                                <button
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                                    data-modal-hide="large-modal"
                                    type="button"
                                    onClick={() => { setIsOpen(false); setEditComment(null) }}>
                                    <svg
                                        aria-hidden="true"
                                        className="w-3 h-3"
                                        fill="none"
                                        viewBox="0 0 14 14"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                        />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <form onSubmit={editSubmitHandle} className="p-10 items-center justify-center">
                                <div className="review-form flex flex-col items-center justify-center">
                                    <div>
                                        <label htmlFor="rating">Rating:</label>
                                        <div className="rating flex text-2xl justify-center">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <span
                                                    key={star}
                                                    onClick={() => handleStarRating(star)}
                                                    className={`cursor-pointer px-1 star ${star <= rating ? "text-yellow-500" : "text-gray-300"}`}
                                                >
                                                    ★
                                                </span>
                                            ))}
                                        </div>
                                        <input type="hidden" name="rating" value={rating} required />
                                    </div>
                                    <br />
                                    <label htmlFor="comment">Review:</label>
                                    <textarea
                                        id="comment"
                                        name="commentText"
                                        rows={5}
                                        cols={200}
                                        required
                                        className="w-full max-w-2xl p-2 border rounded"
                                        defaultValue={comment.commentText}
                                    />
                                    <br />
                                </div>

                                {/* Buttons */}
                                <div className="flex gap-4 mt-4">
                                    <button
                                        type="submit"
                                        className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        data-modal-hide="large-modal"
                                    >
                                        <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path>
                                        </svg>
                                        Edit comment
                                    </button>

                                    <button
                                        className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                                        data-modal-hide="large-modal"
                                        type="button"
                                        onClick={() => { setIsOpen(false); setEditComment(null) }}
                                    >
                                        Decline
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div >

            </div >
        </>
    );
}