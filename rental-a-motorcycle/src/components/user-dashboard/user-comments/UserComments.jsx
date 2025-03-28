import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import LoadingSpinner from "../../loading-spinner/LoadingSpinner";
import { useUserComments } from "../../../api/commentApi";
import { MotorcycleImage, MotorcycleModelBrand } from "../motorcycle-info/MotorcycleInfo";
import DashboardButtons from "../dashboard-buttons/DashboardButtons";
import DeleteCommentModal from "./delete-comment/DeleteCommentModal";
import MessageToast from "../../messageToast/MessageToast";
import EditCommentModal from "./edit-comment/EditCommentModal";

export default function UserComments() {
    const { _id: userId } = useAuth();
    const { comments, isLoading } = useUserComments(userId);
    
    const [showComments, setShowComments] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [showMessageToast, setMessageShowToast] = useState(false);

    const [isOpenDelete, setIsOpenDelete] = useState(false);
    const [deleteComment, setDeleteComment] = useState(null);

    const [isOpenEdit, setIsOpenEdit] = useState(false);
    const [editComment, setEditComment] = useState(null);

    useEffect(() => {
        if (!isLoading  && comments.length > 0) {
            setShowComments(comments);
        }
    }, [comments, isLoading])

    
    // Update locale edit comment
    useEffect(() => {
        if(editComment && !isOpenEdit){
            setMessageShowToast({type: 'success', content: 'User updated successfully'});
            setShowComments(state => state.map(comment => comment._id === editComment._id ? editComment : comment));
        }
    }, [editComment, isOpenEdit]);

    const handleDelete = (id) => {
        setMessageShowToast({type: 'success', content: 'Your comment has been deleted!'});
        setShowComments(comments.filter(comment => comment._id !== id));
    };

    const reservationPerPage = 3;

    const totalPages = Math.ceil(showComments.length / reservationPerPage);
    const startIndex = (currentPage - 1) * reservationPerPage;
    const currentReservations = showComments.slice(startIndex, startIndex + reservationPerPage);

    const handlePagination = (page) => {
        setCurrentPage(page);
    };

    if (isLoading) {
        return (
            <>
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto bg-white bg-opacity-90 backdrop-blur-md rounded-lg shadow-lg p-8">

                        <DashboardButtons />


                        <h1 className="text-2xl font-bold text-center text-gray-900 mb-6">
                            Your Comments
                        </h1>

                        <LoadingSpinner />
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            {showMessageToast && <MessageToast message={showMessageToast} onClose={setMessageShowToast}/>}

                    <h1 className="text-2xl font-bold text-center text-gray-900 mb-6">
                        Your Comments - <span className="text-red-600">{comments.length}</span>
                    </h1>
                    {currentReservations.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {currentReservations.map((comment) => (
                                <div key={comment._id} className="bg-gray-100 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">

                                    <MotorcycleImage motorcycleId={comment.motorcycleId} />

                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold text-gray-800 text-center">
                                            <MotorcycleModelBrand motorcycleId={comment.motorcycleId} />
                                        </h3>

                                        <p className="text-gray-600 text-sm text-center">{new Date(comment.date).toLocaleDateString("en-GB")}</p>
                                        <div className="mt-2 flex justify-center">
                                            <img src={`/images/ratings/rating-${comment.rating}.png`} alt={`rating-${comment.rating}`} className="h-6" />
                                        </div>
                                        <p className="mt-2 text-gray-800">{comment.commentText.length > 100 ?
                                            `${(comment.commentText).slice(0, 100)}...`
                                            : comment.commentText}
                                        </p>

                                        <div className="mt-4 text-center">
                                            <button onClick={() => { setIsOpenEdit(true); setEditComment(comment) }} className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">
                                                Edit
                                            </button>
                                            <button  onClick={() => { setIsOpenDelete(true); setDeleteComment(comment)}} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-gray-700 mt-6">You haven't written any comments yet.</p>
                    )}
                    {/* Pagination */}
                    {totalPages >= 1 && (
                        <div className="mt-8 flex justify-center space-x-4">
                            <button
                                onClick={() => handlePagination(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="px-4 py-2 bg-gray-400 text-white rounded-lg disabled:opacity-50"
                            >
                                Previous
                            </button>
                            <span className="px-4 py-2 text-lg">{currentPage}</span>
                            <button
                                onClick={() => handlePagination(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="px-4 py-2 bg-gray-400 text-white rounded-lg disabled:opacity-50"
                            >
                                Next
                            </button>
                        </div>
                    )}

        {/* Edit Motorcycle */}
        {isOpenEdit && <EditCommentModal
                            setIsOpen={setIsOpenEdit} 
                            comment={editComment} 
                            setEditComment={setEditComment}
        />}

        {/* Delete Comment */}
        {isOpenDelete && <DeleteCommentModal 
                            comment={deleteComment}
                            setIsOpen={setIsOpenDelete} 
                            handleDeleteLocal={handleDelete} 
                        />
        }
        </>



    );
}