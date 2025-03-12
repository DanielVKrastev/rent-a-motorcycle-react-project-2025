import { useEffect, useState } from "react";
import CreateMotorcycleModal from "../create-motorcycle/CreateMotorcycleModal";
import EditMotorcycleModal from "../edit-motorcycle/EditMotorcycleModal";
import DeleteMotorcycleModal from "../delete-motorcycle/DeleteMotorcycleModal";

const MotorcycleTable = () => {
    const [isOpenCreate, setIsOpenCreate] = useState(false);
    const [isOpenEdit, setIsOpenEdit] = useState(false);
    const [isOpenDelete, setIsOpenDelete] = useState(false);

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


    const [users, setUsers] = useState([
        { id: 1, name: "John Doe", email: "johndoe@gmail.com", role: "Admin" },
        { id: 2, name: "Jane Smith", email: "janesmith@yahoo.com", role: "User" },
        { id: 3, name: "Bob Johnson", email: "bobjohnson@outlook.com", role: "User" },
        { id: 4, name: "Alice Williams", email: "alice@gmail.com", role: "Admin" },
        { id: 5, name: "Charlie Brown", email: "charlie@yahoo.com", role: "User" },
        { id: 6, name: "David Davis", email: "daviddavis@outlook.com", role: "Admin" },
        { id: 7, name: "Eva White", email: "evawhite@gmail.com", role: "User" },
        { id: 8, name: "Frank Harris", email: "frankharris@yahoo.com", role: "User" },
        { id: 9, name: "Grace Lewis", email: "gracelewis@outlook.com", role: "Admin" },
        { id: 10, name: "Hank Young", email: "hankyoung@gmail.com", role: "User" },
    ]);

    const handleDelete = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };


    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 5;

    const totalPages = Math.ceil(users.length / usersPerPage);
    const startIndex = (currentPage - 1) * usersPerPage;
    const currentUsers = users.slice(startIndex, startIndex + usersPerPage);

    const handlePagination = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
            <div className="">
                <button
                    onClick={() => setIsOpenCreate(true)}
                    className="mb-4 flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                >
                    <div className="mr-2" /> Add Motorcycle
                </button>

                <div className="relative w-f overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
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

                            {currentUsers.map((user) => (
                                <tr key={user.id} className="bg-white border-b dark:bg-gray-100 dark:border-gray-400 border-gray-200 dark:text-black" >
                                    <td className="px-6 py-4 font-bold text-gray-100 whitespace-nowrap dark:text-black" scope="row">{user.name}</td>
                                    <td className="px-6 py-4" scope="row">{user.email}</td>
                                    <td className="px-6 py-4" scope="row">{user.role}</td>
                                    <td className="px-6 py-4" scope="row"></td>
                                    <td className="px-6 py-4" scope="row"></td>
                                    <td className="px-6 py-4" scope="row"></td>
                                    <td className="px-6 py-4" scope="row"></td>
                                    <td className="px-6 py-4" scope="row"></td>
                                    <td className="px-6 py-4" scope="row"></td>
                                    <td className="px-6 py-4" scope="row"></td>
                                    <td className="px-6 py-4" scope="row"></td>
                                    <td className="px-6 py-4" scope="row"></td>
                                    <td className="px-6 py-4" scope="row">
                                        <button type="button" onClick={() => { setIsOpenEdit(true); }} className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Edit</button>
                                        <button type="button" onClick={() => setIsOpenDelete(true)} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Red</button>
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
            {isOpenCreate && <CreateMotorcycleModal setIsOpen={setIsOpenCreate} />}

            {/* Edit Motorcycle */}
            {isOpenEdit && <EditMotorcycleModal setIsOpen={setIsOpenEdit} />}

            {/* Delete Motorcycle */}
            {isOpenDelete && <DeleteMotorcycleModal setIsOpen={setIsOpenDelete} handleDelete={handleDelete} />}
        </>
    );
};

export default MotorcycleTable;
