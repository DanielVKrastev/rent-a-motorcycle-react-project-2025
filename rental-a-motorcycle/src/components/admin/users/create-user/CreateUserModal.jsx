import { useState } from "react";
import { useRegister } from "../../../../api/authApi";
import MessageToast from "../../../messageToast/MessageToast";

export default function CreateUserModal({
    setNewUser,
    setIsOpen,
}) {
    const [showMessageToast, setMessageShowToast] = useState(false);
    
    const { register } = useRegister();
    async function submitActionAddUser(formData){
        const {email, username, password, rePassword} = Object.fromEntries(formData);
        
        try{
            const newUser = await register(email, username, password, rePassword);
            setNewUser(newUser);
            setIsOpen(false);
        }catch(err){
            setMessageShowToast({type: 'error', content: err.message});
        }

    }
    
    return (
        <>
            <div onClick={() => setIsOpen(false)} className="bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-50">
            {showMessageToast && <MessageToast message={showMessageToast} onClose={setMessageShowToast}/>}
                <div
                    className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full justify-center items-center flex"
                    id="large-modal"
                    tabIndex="-1"
                    role="dialog">
                    <div className="relative w-full max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
                        <div className="relative bg-white rounded-lg shadow-sm">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200">
                                <h3 className="text-xl font-medium text-gray-900">
                                    Add User
                                </h3>
                                <button
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                                    data-modal-hide="large-modal"
                                    type="button"
                                    onClick={() => setIsOpen(false)}>
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
                            <form action={submitActionAddUser}>
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
                                                    required
                                                />
                                            </div>

                                            <div className="mb-5">
                                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                                                    Password
                                                </label>
                                                <input
                                                    type="password"
                                                    id="password"
                                                    name="password"
                                                    className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                    placeholder="*********"
                                                    required
                                                />
                                            </div>

                                            <div className="mb-5">
                                                <label htmlFor="rePassword" className="block mb-2 text-sm font-medium text-gray-900">
                                                    Confirm password
                                                </label>
                                                <input
                                                    type="password"
                                                    id="rePassword"
                                                    name="rePassword"
                                                    className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                    placeholder="*********"
                                                    required
                                                />
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
                                        Add new user
                                    </button>

                                    <button
                                        className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                                        data-modal-hide="large-modal"
                                        type="button"
                                        onClick={() => setIsOpen(false)}>
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