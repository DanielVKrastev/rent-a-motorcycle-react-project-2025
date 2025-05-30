import { useEffect, useState } from "react";
import { useEditUser, useUser } from "../../../../api/userApi";
import MessageToast from "../../../messageToast/MessageToast";
import LoadingSpinner from "../../../loading-spinner/LoadingSpinner";

export default function EditUserModal({
    userId,
    setEditUser,
    setIsOpen,
}) {
    const [showMessageToast, setMessageShowToast] = useState(false);
    const [isLoadingEdit, setIsLoadingEdit] = useState(false);

    const { user, isLoading } = useUser(userId);

     const { edit } = useEditUser();
     const [selectedValue, setSelectedValue] = useState(user?.role || ''); 

     // For select value
     useEffect(() => {
        if (!isLoading && user) {
          setSelectedValue(user.role);
        }
      }, [user, isLoading]);

     const handleChangeSelect = (e) => {
        setSelectedValue(e.target.value);
      };
    
     const editActionHandle = async (formData) => {
        const { email, username, role } = Object.fromEntries(formData);
        setIsLoadingEdit(true);
        try {
          const editUser = await edit(userId, { email, username, role });
          setIsLoadingEdit(false);
          setEditUser(editUser);

          setIsOpen(false);
        } catch (err) {
          setMessageShowToast({type: 'error', content: err.message});
        }
      }
    
    return (
        <>
            <div onClick={() => {setIsOpen(false); setEditUser(null) }} className="bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-50">
                 {showMessageToast && <MessageToast message={showMessageToast} onClose={setMessageShowToast}/>}
                <div
                    className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full justify-center items-center flex"
                    id="large-modal"
                    tabIndex="-1"
                    role="dialog">
                    <div className="relative w-full max-w-4xl max-h-full" onClick={(e) => {e.stopPropagation()}}>
                        <div className="relative bg-white rounded-lg shadow-sm">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200">
                            <h3 className="text-xl font-medium text-gray-900 w-1/6">
                                    Edit User
                                </h3>
                                {isLoading && <div className="flex items-center justify-center w-full">
                                    <LoadingSpinner />
                                </div>
                                }
                                {isLoadingEdit && <div className="flex items-center justify-center w-full">
                                    <LoadingSpinner />
                                </div>
                                }
                                <button
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                                    data-modal-hide="large-modal"
                                    type="button"
                                    onClick={() => {setIsOpen(false); setEditUser(null) }}>
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
                            <form action={editActionHandle}>
                                <div className="p-4 md:p-5 space-y-4">

                                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-1 max-w-2xl mx-auto p-5 mt-0">
                                        <div className="text-gray-500 dark:text-gray-400">
                                            <div className="mb-5">
                                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                    placeholder="example@example.com"
                                                    defaultValue={user.email}
                                                    required
                                                />
                                            </div>

                                            <div className="mb-5">
                                                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">
                                                    Username
                                                </label>
                                                <input
                                                    type="text"
                                                    id="username"
                                                    name="username"
                                                    className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                    placeholder="Ivan"
                                                    defaultValue={user.username}
                                                    required
                                                />
                                            </div>

                                            <div className="mb-5">
                                                <label
                                                    htmlFor="role"
                                                    className="block mb-2 text-sm font-medium text-gray-900"
                                                >
                                                    Select Role
                                                </label>
                                                <select
                                                    id="role"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                    name="role"
                                                    value={selectedValue}
                                                    onChange={handleChangeSelect}
                                                >
                                                    <option value="User">User</option>
                                                    <option value="Admin">Admin</option>
                                                </select>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                                <div className="flex items-center p-4 md:p-5 space-x-3 rtl:space-x-reverse border-t border-gray-200 rounded-b">
                                    <button
                                        type="submit"
                                        className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        data-modal-hide="large-modal"
                                    >
                                        <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                                        Edit user
                                    </button>
                                    <button
                                        className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                                        data-modal-hide="large-modal"
                                        type="button"
                                        onClick={() => {setIsOpen(false); setEditUser(null)}}>
                                        Decline
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}