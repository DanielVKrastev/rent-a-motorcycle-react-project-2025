import { useEffect, useState } from "react";

import { useRequests } from "../../../../api/customerRequestApi";

import MessageToast from "../../../messageToast/MessageToast";
import LoadingSpinner from "../../../loading-spinner/LoadingSpinner";
import Pagination from "../../../partials/pagination/Pagination";
import CustomerRequestResponse from "../customer-request-response/CustomerRequestResponse";
import CustomerRequestDelete from "../customer-request-delete/CustomerRequestDelete";

export default function CustomerRequestsTable() {

    const [isOpenEdit, setIsOpenEdit] = useState(false);
    const [editRequest, setEditRequest] = useState(null);

    const [isOpenDelete, setIsOpenDelete] = useState(false);
    const [deleteRequest, setDeleteRequest] = useState(null);

    const [showRequests, setShowRequests] = useState([]);

    const [showMessageToast, setMessageShowToast] = useState(false);

    const { customerRequests, isLoading } = useRequests();

    useEffect(() => {
        if (!isLoading && customerRequests.length > 0) {
            setShowRequests(customerRequests);
        }
    }, [customerRequests, isLoading])

    // Update locale edit request
    useEffect(() => {
        if (editRequest && !isOpenEdit) {
            setMessageShowToast({type: 'success', content: 'Customer request updated successfully!'});
            setShowRequests(state => state.map(request => request._id === editRequest._id ? editRequest : request));
        }
    }, [editRequest, isOpenEdit]);

    useEffect(() => {
        if (isOpenEdit) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        if (isOpenDelete) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpenEdit, isOpenDelete]);

    const handleDelete = (id) => {
        setMessageShowToast({type: 'success', content: 'Customer request has been deleted!'});
        setShowRequests(showRequests.filter(request => request._id !== id));
    };

    const [currentPage, setCurrentPage] = useState(1);
    const motorcyclePerPage = 5;

    const totalPages = Math.ceil(showRequests.length / motorcyclePerPage);
    const startIndex = (currentPage - 1) * motorcyclePerPage;
    const currentMotorcycles = showRequests.slice(startIndex, startIndex + motorcyclePerPage);

    const handlePagination = (page) => {
        setCurrentPage(page);
    };

      if (isLoading) {
          return <LoadingSpinner/>;
      }

    return (
        <>

         {showMessageToast && <MessageToast message={showMessageToast} onClose={setMessageShowToast}/>}

            <div className="w-full overflow-x-auto">
                <h2 className="text-3xl font-semibold mb-6">Motorcycles data</h2>

                <div className="relative w-full overflow-x-auto block">
                    <table className="min-w-[1400px] w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-300 dark:text-gray-800">
                            <tr>
                                <th className="px-6 py-3 text-left" scope="col">S.N</th>
                                <th className="px-6 py-3 text-left" scope="col">Email</th>
                                <th className="px-6 py-3 text-left" scope="col">Theme</th>
                                <th className="px-6 py-3 text-left" scope="col">Message</th>
                                <th className="px-6 py-3 text-left" scope="col">Date</th>
                                <th className="px-6 py-3 text-left" scope="col">Response</th>
                                <th className="px-6 py-3 text-left" scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {currentMotorcycles.map((request, index) => (
                                <tr key={request._id} className={`bg-white border-b ${!request.response? 'dark:bg-red-100' : 'dark:bg-gray-100'}  dark:border-gray-400 border-gray-200 dark:text-black`}>
                                    <td className="px-6 py-4 font-bold text-gray-100 whitespace-nowrap dark:text-black" scope="row">{startIndex + index + 1}</td>
                                    <td className="px-6 py-4 font-bold text-gray-100 whitespace-nowrap dark:text-black" scope="row">{request.email}</td>
                                    <td className="px-6 py-4" scope="row">{request.theme}</td>
                                    <td className="px-6 py-4" scope="row">{request.message}</td>
                                    <td className="px-6 py-4" scope="row">{new Date(request.date).toLocaleDateString("en-GB", { timeZone: "UTC" })}</td>
                                    <td className="px-6 py-4" scope="row">{request.response}</td>
                                    <td className="px-6 py-4" scope="row">
                                        <button type="button" onClick={() => { setIsOpenEdit(true); setEditRequest(request)}} className="focus:outline-none text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-green-900">Reply</button>
                                        <button type="button" onClick={() => { setIsOpenDelete(true); setDeleteRequest(request)}} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>

                <Pagination 
                    currentPage={currentPage}
                    totalPages={totalPages}
                    handlePagination={handlePagination}
                />

            </div>

            {/* Return response */}
            {isOpenEdit && <CustomerRequestResponse
                setIsOpen={setIsOpenEdit}
                requestId={editRequest._id}
                setEditMotorcycle={setEditRequest}
                />}

            {/* Delete Request */}
            {isOpenDelete && <CustomerRequestDelete
                request={deleteRequest}
                setIsOpen={setIsOpenDelete} 
                handleDeleteLocal={handleDelete} 
            />}
        </>
    );
};
