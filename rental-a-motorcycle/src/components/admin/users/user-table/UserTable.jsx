import { useEffect, useState } from "react";
import CreateUserModal from "../create-user/CreateUserModal";
import EditUserModal from "../edit-user/EditUserModal";
import DeleteUserModal from "../delete-user/DeleteUserModal";
import { useUsers } from "../../../../api/userApi";

const UserTable = () => {
    const [isOpenCreate, setIsOpenCreate] = useState(false);
    const [newUser, setNewUser] = useState(null);

    const [isOpenEdit, setIsOpenEdit] = useState(false);
    const [isOpenDelete, setIsOpenDelete] = useState(false);
    const [showUsers, setShowUsers] = useState([]);

    const { users, isLoading } = useUsers();

    useEffect(() => {
        if (!isLoading  && users.length > 0) {
            setShowUsers(users);
        }
    }, [users, isLoading])

    useEffect(() => {
        if(newUser){
            setShowUsers(state => [...state, newUser]);
        }
    }, [newUser]);


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
        setShowUsers(users.filter(user => user.id !== id));
    };

    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 5;

    const totalPages = Math.ceil(users.length / usersPerPage);
    const startIndex = (currentPage - 1) * usersPerPage;
    const currentUsers = showUsers.slice(startIndex, startIndex + usersPerPage);

    const handlePagination = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
            <div className="">
                <h2 className="text-3xl font-semibold mb-6">Users data</h2>
                <button
                    onClick={() => setIsOpenCreate(true)}
                    className="mb-4 flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                >
                    <div className="mr-2" /> Add User
                </button>

                <div className="relative w-f overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-300 dark:text-gray-800">
                            <tr>
                                <th className="px-6 py-3 text-left" scope="col">S.N</th>
                                <th className="px-6 py-3 text-left" scope="col">Name</th>
                                <th className="px-6 py-3 text-left" scope="col">Email</th>
                                <th className="px-6 py-3 text-left" scope="col">Role</th>
                                <th className="px-6 py-3 text-left" scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody key={'asd'}>

                            {currentUsers.map((user, index) => (
                                <tr key={user._id} className="bg-white border-b dark:bg-gray-100 dark:border-gray-400 border-gray-200 dark:text-black" >
                                    <td className="px-6 py-4 font-bold text-gray-100 whitespace-nowrap dark:text-black" scope="row">{startIndex + index + 1}</td>
                                    <td className="px-6 py-4 font-bold text-gray-100 whitespace-nowrap dark:text-black" scope="row">{user.username}</td>
                                    <td className="px-6 py-4" scope="row">{user.email}</td>
                                    <td className="px-6 py-4" scope="row">{user.role}</td>
                                    <td className="px-6 py-4" scope="row">
                                        <button type="button" onClick={() => { setIsOpenEdit(true); }} className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Edit</button>
                                        <button type="button" onClick={() => setIsOpenDelete(true)} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
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
            {isOpenCreate && <CreateUserModal setIsOpen={setIsOpenCreate} setNewUser={setNewUser} />}

            {/* Edit Motorcycle */}
            {isOpenEdit && <EditUserModal setIsOpen={setIsOpenEdit} />}

            {/* Delete Motorcycle */}
            {isOpenDelete && <DeleteUserModal setIsOpen={setIsOpenDelete} handleDelete={handleDelete} />}
        </>
    );
};

export default UserTable;
