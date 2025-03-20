import { useDeleteMotorcycle } from "../../../../api/motorcycleApi";

export default function DeleteMotorcycleModal({
    motorcycle,
    setIsOpen,
    handleDeleteLocal,
}) {
    const { deleteMotorcycle } = useDeleteMotorcycle();
    async function deleteMotorcycleHandler(){
        try{

            await deleteMotorcycle(motorcycle._id);
            handleDeleteLocal(motorcycle._id);
            console.log('delete');
            }catch(err){
            console.log(err.message);
        }
    }

    return (
        <>
            <div onClick={() => setIsOpen(false)} className="bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"></div>
            <div
                className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full justify-center items-center flex"
                id="popup-modal"
                tabIndex="-1">
                <div className="relative p-4 w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow-sm">
                        <button
                            className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                            data-modal-hide="popup-modal"
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
                        <div className="p-4 md:p-5 text-center">
                            <svg
                                aria-hidden="true"
                                className="mx-auto mb-4 text-gray-400 w-12 h-12"
                                fill="none"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                />
                            </svg>
                            <h3 className="mb-5 text-lg font-normal text-gray-500">
                                Are you sure you want to delete {motorcycle.brand} {motorcycle.model}?
                            </h3>
                            <button
                                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                                data-modal-hide="popup-modal"
                                type="button"
                                onClick={() => { deleteMotorcycleHandler(); setIsOpen(false)}}>
                                Yes, I'm sure
                            </button>
                            <button
                                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                                data-modal-hide="popup-modal"
                                type="button"
                                onClick={() => setIsOpen(false)}>
                                No, cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}