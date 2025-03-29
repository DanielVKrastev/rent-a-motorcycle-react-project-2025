import { useEffect, useState } from "react";

import { useRequests } from "../../../api/customerRequestApi";

import useAuth from "../../../hooks/useAuth";
import LoadingSpinner from "../../loading-spinner/LoadingSpinner";
import DashboardButtons from "../dashboard-buttons/DashboardButtons";
import MessageToast from "../../messageToast/MessageToast";
import Pagination from "../../partials/pagination/Pagination";

export default function UserSupportQueries() {
    const { _id: userId } = useAuth();
    const { customerRequests, isLoading } = useRequests(userId);
    
    const [showQueries, setShowQueries] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [showMessageToast, setMessageShowToast] = useState(false);

    const [isOpenEdit, setIsOpenEdit] = useState(false);
    const [editQuery, setEditQuery] = useState(null);

    useEffect(() => {
        if (!isLoading && customerRequests.length > 0) {
            setShowQueries(customerRequests);
        }
    }, [customerRequests, isLoading]);

    useEffect(() => {
        if (editQuery && !isOpenEdit) {
            setMessageShowToast({ type: 'success', content: 'Query updated successfully' });
            setShowQueries(state => state.map(query => query._id === editQuery._id ? editQuery : query));
        }
    }, [editQuery, isOpenEdit]);

    const queriesPerPage = 3;
    const totalPages = Math.ceil(showQueries.length / queriesPerPage);
    const startIndex = (currentPage - 1) * queriesPerPage;
    const currentQueries = showQueries.slice(startIndex, startIndex + queriesPerPage);

    const handlePagination = (page) => {
        setCurrentPage(page);
    };

    if (isLoading) {
        return (
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto bg-white bg-opacity-90 backdrop-blur-md rounded-lg shadow-lg p-8">
                    <DashboardButtons />
                    <h1 className="text-2xl font-bold text-center text-gray-900 mb-6">Your Support Queries</h1>
                    <LoadingSpinner />
                </div>
            </div>
        );
    }

    return (
        <>
            {showMessageToast && <MessageToast message={showMessageToast} onClose={setMessageShowToast} />}
            <h1 className="text-2xl font-bold text-center text-gray-900 mb-6">
                Your Support Queries - <span className="text-red-600">{customerRequests.length}</span>
            </h1>
            {currentQueries.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentQueries.map((query) => (
                        <div key={query._id} className="bg-gray-100 rounded-lg shadow-md p-4">
                            <h3 className="text-lg font-semibold text-gray-800 text-center">
                                {query.theme}
                            </h3>
                            <p className="text-gray-600 text-sm text-center">{new Date(query.date).toLocaleDateString("en-GB")}</p>
                            <p className="mt-2 text-gray-800">
                                {query.message.length > 100 ? `${query.message.slice(0, 100)}...` : query.message}
                            </p>
                            {query.response && (
                                <div className="mt-4 p-3 bg-blue-100 rounded-lg">
                                    <h4 className="font-semibold text-blue-800">Support Response:</h4>
                                    <p className="text-blue-700">{query.response}</p>
                                </div>
                            )}
                            <div className="mt-4 text-center">
                                <button onClick={() => { setIsOpenEdit(true); setEditQuery(query) }} className="text-white bg-yellow-400 hover:bg-yellow-500 px-5 py-2.5 rounded-lg">
                                    Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-700 mt-6">You haven't submitted any support queries yet.</p>
            )}
            
            {totalPages >= 1 && (
                <Pagination currentPage={currentPage} totalPages={totalPages} handlePagination={handlePagination} />
            )}

            {isOpenEdit && <EditQueryModal setIsOpen={setIsOpenEdit} query={editQuery} setEditQuery={setEditQuery} />}
        </>
    );
}
