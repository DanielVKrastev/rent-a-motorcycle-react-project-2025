import { useEffect, useState } from "react";
import MessageToast from "../../../messageToast/MessageToast";
import LoadingSpinner from "../../../loading-spinner/LoadingSpinner";
import DeleteCommentModal from "../../../user-dashboard/user-comments/delete-comment/DeleteCommentModal";
import { useComments } from "../../../../api/commentApi";
import MotorcycleInfo from "./MotorcycleInfo";

const CommentsTable = () => {
    const [isOpenDelete, setIsOpenDelete] = useState(false);
    const [deleteComment, setDeleteComment] = useState(null);

    const [showComments, setShowComments] = useState([]);

    const [showMessageToast, setMessageShowToast] = useState(false);

    const { comments, isLoading } = useComments();

    useEffect(() => {
        if (!isLoading && comments.length > 0) {
            setShowComments(comments);
        }
    }, [comments, isLoading])

    useEffect(() => {

        if (isOpenDelete) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpenDelete]);


    const handleDelete = (id) => {
        setMessageShowToast({ type: 'success', content: 'Comment has been deleted!' });
        setShowComments(comments.filter(comments => comments._id !== id));
    };

    const [currentPage, setCurrentPage] = useState(1);
    const commentsPerPage = 5;

    const totalPages = Math.ceil(comments.length / commentsPerPage);
    const startIndex = (currentPage - 1) * commentsPerPage;
    const currentComments = showComments.slice(startIndex, startIndex + commentsPerPage);

    const handlePagination = (page) => {
        setCurrentPage(page);
    };

    if (isLoading) {
        return <LoadingSpinner />;
    }

    return (
        <>
            {showMessageToast && <MessageToast message={showMessageToast} onClose={setMessageShowToast} />}

            <div className="">
                <h2 className="text-3xl font-semibold mb-6">Comments </h2>

                <div className="relative w-f overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-300 dark:text-gray-800">
                            <tr>
                                <th className="px-6 py-3 text-left" scope="col">S.N</th>
                                <th className="px-6 py-3 text-left" scope="col">Email</th>
                                <th className="px-6 py-3 text-left" scope="col">Rating</th>
                                <th className="px-6 py-3 text-left" scope="col">Motorcycle</th>
                                <th className="px-6 py-3 text-left" scope="col">Text</th>
                                <th className="px-6 py-3 text-left" scope="col">Date</th>
                                <th className="px-6 py-3 text-left" scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody key={'asd'}>

                            {currentComments.map((comment, index) => (
                                <tr key={comment._id} className="bg-white border-b dark:bg-gray-100 dark:border-gray-400 border-gray-200 dark:text-black" >
                                    <td className="px-6 py-4 font-bold text-gray-100 whitespace-nowrap dark:text-black" scope="row">{startIndex + index + 1}</td>
                                    <td className="px-6 py-4 font-bold text-gray-100 whitespace-nowrap dark:text-black" scope="row">{comment.email}</td>
                                    <td className="px-6 py-4" scope="row">{comment.rating}</td>
                                    <td className="px-6 py-4" scope="row"><MotorcycleInfo motorcycleId={comment.motorcycleId} /></td>
                                    <td className="px-6 py-4" scope="row">{comment.commentText}</td>
                                    <td className="px-6 py-4" scope="row">{new Date(comment.date).toLocaleDateString("en-GB", { timeZone: "UTC" })}</td>
                                    <td className="px-6 py-4" scope="row">
                                        <button type="button" onClick={() => { setIsOpenDelete(true); setDeleteComment(comment) }} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="mt-4 flex justify-center">
                    <button
                        onClick={() => handlePagination(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 mx-1 bg-blue-500 text-white rounded-md disabled:bg-gray-400"
                    >
                        Previous
                    </button>
                    <span className="px-4 py-2 mx-1 text-lg">{currentPage}</span>
                    <button
                        onClick={() => handlePagination(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 mx-1 bg-blue-500 text-white rounded-md disabled:bg-gray-400"
                    >
                        Next
                    </button>
                </div>
            </div>

            {/* Delete Comment */}
            {isOpenDelete && <DeleteCommentModal
                comment={deleteComment}
                setIsOpen={setIsOpenDelete}
                handleDeleteLocal={handleDelete}
            />
            }
        </>
    );
};

export default CommentsTable;
