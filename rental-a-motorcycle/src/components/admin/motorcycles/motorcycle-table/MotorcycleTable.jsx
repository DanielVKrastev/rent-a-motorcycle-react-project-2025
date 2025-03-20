import { useEffect, useState } from "react";
import CreateMotorcycleModal from "../create-motorcycle/CreateMotorcycleModal";
import EditMotorcycleModal from "../edit-motorcycle/EditMotorcycleModal";
import DeleteMotorcycleModal from "../delete-motorcycle/DeleteMotorcycleModal";
import { useMotorcycles } from "../../../../api/motorcycleApi";

const MotorcycleTable = () => {
    const [isOpenCreate, setIsOpenCreate] = useState(false);
    const [newMotorcycle, setNewMotorcycle] = useState(null);

    const [isOpenEdit, setIsOpenEdit] = useState(false);
    const [editMotorcycle, setEditMotorcycle] = useState(null);

    const [isOpenDelete, setIsOpenDelete] = useState(false);
    const [deleteMotorcycle, setDeleteMotorcycle] = useState(null);

    const [showMotorcycles, setShowMotorcycles] = useState([]);

    const { motorcycles, isLoading } = useMotorcycles();

    useEffect(() => {
        if (!isLoading && motorcycles.length > 0) {
            setShowMotorcycles(motorcycles);
        }
    }, [motorcycles, isLoading])

    // Update locale motorcycle
    useEffect(() => {
        if (newMotorcycle) {
            setShowMotorcycles(state => [...state, newMotorcycle]);
        }
    }, [newMotorcycle]);

    // Update locale edit motorcycle
    
    useEffect(() => {
        if (editMotorcycle) {
            setShowMotorcycles(state => state.map(motorcycle => motorcycle._id === editMotorcycle._id ? editMotorcycle : motorcycle));
        }
    }, [editMotorcycle]);

    useEffect(() => {
        if (isOpenCreate) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

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
    }, [isOpenCreate, isOpenEdit, isOpenDelete]);

    const handleDelete = (id) => {
        setShowMotorcycles(showMotorcycles.filter(motorcycle => motorcycle._id !== id));
    };


    const [currentPage, setCurrentPage] = useState(1);
    const motorcyclePerPage = 5;

    const totalPages = Math.ceil(showMotorcycles.length / motorcyclePerPage);
    const startIndex = (currentPage - 1) * motorcyclePerPage;
    const currentMotorcycles = showMotorcycles.slice(startIndex, startIndex + motorcyclePerPage);

    const handlePagination = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
            <div className="w-full overflow-x-auto">
                <h2 className="text-3xl font-semibold mb-6">Motorcycles data</h2>
                <button
                    onClick={() => setIsOpenCreate(true)}
                    className="mb-4 flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                >
                    <div className="mr-2" /> Add Motorcycle
                </button>

                <div className="relative w-full overflow-x-auto block">
                    <table className="min-w-[1400px] w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-300 dark:text-gray-800">
                            <tr>
                                <th className="px-6 py-3 text-left" scope="col">S.N</th>
                                <th className="px-6 py-3 text-left" scope="col">Motorcycle</th>
                                <th className="px-6 py-3 text-left" scope="col">Type</th>
                                <th className="px-6 py-3 text-left" scope="col">Engine</th>
                                <th className="px-6 py-3 text-left" scope="col">Power</th>
                                <th className="px-6 py-3 text-left" scope="col">Weigth</th>
                                <th className="px-6 py-3 text-left" scope="col">Category</th>
                                <th className="px-6 py-3 text-left" scope="col">Year</th>
                                <th className="px-6 py-3 text-left" scope="col">Tank</th>
                                <th className="px-6 py-3 text-left" scope="col">Image</th>
                                <th className="px-6 py-3 text-left" scope="col">Reserv</th>
                                <th className="px-6 py-3 text-left" scope="col">Active</th>
                                <th className="px-6 py-3 text-left" scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {currentMotorcycles.map((motorcycle, index) => (
                                <tr key={motorcycle._id} className="bg-white border-b dark:bg-gray-100 dark:border-gray-400 border-gray-200 dark:text-black" >
                                    <td className="px-6 py-4 font-bold text-gray-100 whitespace-nowrap dark:text-black" scope="row">{startIndex + index + 1}</td>
                                    <td className="px-6 py-4 font-bold text-gray-100 whitespace-nowrap dark:text-black" scope="row">{motorcycle.brand} {motorcycle.model}</td>
                                    <td className="px-6 py-4" scope="row">{motorcycle.type}</td>
                                    <td className="px-6 py-4" scope="row">{motorcycle.engine}</td>
                                    <td className="px-6 py-4" scope="row">{motorcycle.power}</td>
                                    <td className="px-6 py-4" scope="row">{motorcycle.weight}</td>
                                    <td className="px-6 py-4" scope="row">{motorcycle.category}</td>
                                    <td className="px-6 py-4" scope="row">{motorcycle.year}</td>
                                    <td className="px-6 py-4" scope="row">{motorcycle.tank}</td>
                                    <td className="px-6 py-4" scope="row">{motorcycle.image}</td>
                                    <td className="px-6 py-4" scope="row">{motorcycle.reservationCount}</td>
                                    <td className="px-6 py-4" scope="row">{motorcycle.active}</td>
                                    <td className="px-6 py-4" scope="row">
                                        <button type="button" onClick={() => { setIsOpenEdit(true); setEditMotorcycle(motorcycle)}} className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Edit</button>
                                        <button type="button" onClick={() => { setIsOpenDelete(true); setDeleteMotorcycle(motorcycle)}} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
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

            {/* Create Motorcycle */}
            {isOpenCreate && <CreateMotorcycleModal
                setIsOpen={setIsOpenCreate}
                setNewMotorcycle={setNewMotorcycle}
            />}

            {/* Edit Motorcycle */}
            {isOpenEdit && <EditMotorcycleModal 
                setIsOpen={setIsOpenEdit}
                motorcycleId={editMotorcycle._id}
                setEditMotorcycle={setEditMotorcycle}
                />}

            {/* Delete Motorcycle */}
            {isOpenDelete && <DeleteMotorcycleModal
                motorcycle={deleteMotorcycle}
                setIsOpen={setIsOpenDelete} 
                handleDeleteLocal={handleDelete} 
            />}
        </>
    );
};

export default MotorcycleTable;
