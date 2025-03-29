import { useEffect, useState } from "react";

import { useEditMotorcycle, useMotorcycle } from "../../../../api/motorcycleApi";

import MessageToast from "../../../messageToast/MessageToast";
import LoadingSpinner from "../../../loading-spinner/LoadingSpinner";

export default function EditMotorcycleModal({
    motorcycleId,
    setIsOpen,
    setEditMotorcycle,
}) {
    const [showMessageToast, setMessageShowToast] = useState(false);
    const [isLoadingEdit, setIsLoadingEdit] = useState(false);

    const { motorcycle, isLoading } = useMotorcycle(motorcycleId);

    const [selectedValueType, setSelectedValueType] = useState(motorcycle?.type || '');
    const [selectedValueCategory, setSelectedValueCategory] = useState(motorcycle?.category || '');
    const [isActive, setIsActive] = useState(true);


    const { edit } = useEditMotorcycle();

    // For select value
    useEffect(() => {
        if (!isLoading && motorcycle) {
            setSelectedValueType(motorcycle.type);
            setSelectedValueCategory(motorcycle.category);
            setIsActive(motorcycle?.active === 'no' ? false : true);
        }
    }, [motorcycle, isLoading]);

    const handleChangeSelectType = (e) => {
        setSelectedValueType(e.target.value);
    };

    const handleChangeSelectCategory = (e) => {
        setSelectedValueCategory(e.target.value);
    };

    const handleCheckboxChange = (e) => {
        setIsActive(e.target.checked);
    };

    async function submitActionAddMotorcycle(e) {
        e.preventDefault();
        setIsLoadingEdit(true);
        const formData = new FormData(e.target);

        const active = isActive ? "yes" : "no";
        formData.append("active", active);

        try {
            const editMotorcycle = await edit(motorcycleId, formData);
            setIsLoadingEdit(false);
            setEditMotorcycle(editMotorcycle);
            setIsOpen(false);
        } catch (err) {
            setMessageShowToast({ type: 'error', content: err.message });
        }

    }

    return (
        <>
            <div onClick={() => { setIsOpen(false); setEditMotorcycle(null) }} className="bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-50">
                {showMessageToast && <MessageToast message={showMessageToast} onClose={setMessageShowToast} />}
                <div
                    className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full justify-center items-center flex"
                    id="large-modal"
                    tabIndex="-1"
                    role="dialog">
                    <div className="relative w-full max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
                        <div className="relative bg-white rounded-lg shadow-sm">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200">
                                <h3 className="text-xl font-medium text-gray-900 w-1/6">
                                    Edit Motorcycle
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
                                    onClick={() => { setIsOpen(false); setEditMotorcycle(null) }}>
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
                            <form onSubmit={submitActionAddMotorcycle}>
                                <div className="p-4 md:p-5 space-y-4">

                                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 max-w-2xl mx-auto p-5 mt-0">
                                        <div className="mb-3 text-gray-500 dark:text-gray-400">
                                            <div className="mb-5">
                                                <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900">
                                                    Brand
                                                </label>
                                                <input
                                                    type="text"
                                                    id="brand"
                                                    name="brand"
                                                    className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                    placeholder="Honda"
                                                    defaultValue={motorcycle.brand}
                                                    required
                                                />
                                            </div>

                                            <div className="mb-5">
                                                <label htmlFor="model" className="block mb-2 text-sm font-medium text-gray-900">
                                                    Model
                                                </label>
                                                <input
                                                    type="text"
                                                    id="model"
                                                    name="model"
                                                    className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                    placeholder="CB 1000"
                                                    defaultValue={motorcycle.model}
                                                    required
                                                />
                                            </div>

                                            <div className="mb-5">
                                                <label
                                                    htmlFor="type"
                                                    className="block mb-2 text-sm font-medium text-gray-900"
                                                >
                                                    Select Type
                                                </label>
                                                <select
                                                    id="type"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                    name="type"
                                                    value={selectedValueType}
                                                    onChange={handleChangeSelectType}
                                                >
                                                    <option value="Sport">Sport</option>
                                                    <option value="Touring">Touring</option>
                                                    <option value="Chopper">Chopper</option>
                                                </select>
                                            </div>

                                            <div className="mb-5">
                                                <label htmlFor="engine" className="block mb-2 text-sm font-medium text-gray-900">
                                                    Engine (cc)
                                                </label>
                                                <input
                                                    type="number"
                                                    id="engine"
                                                    name="engine"
                                                    className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                    placeholder="1000"
                                                    min="1"
                                                    defaultValue={motorcycle.engine}
                                                    required
                                                />
                                            </div>

                                            <div className="mb-5">
                                                <label htmlFor="power" className="block mb-2 text-sm font-medium text-gray-900">
                                                    Power (h.p)
                                                </label>
                                                <input
                                                    type="number"
                                                    id="power"
                                                    name="power"
                                                    className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                    placeholder="125"
                                                    min="1"
                                                    defaultValue={motorcycle.power}
                                                    required
                                                />
                                            </div>

                                            <div className="mb-5">
                                                <label htmlFor="max_speed" className="block mb-2 text-sm font-medium text-gray-900">
                                                    Max speed (km/h)
                                                </label>
                                                <input
                                                    type="number"
                                                    id="max_speed"
                                                    name="maxSpeed"
                                                    className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                    placeholder="285"
                                                    min="1"
                                                    defaultValue={motorcycle.maxSpeed}
                                                    required
                                                />
                                            </div>

                                            <div className="mb-5">
                                                <label htmlFor="reservationCount" className="block mb-2 text-sm font-medium text-gray-900">
                                                    Count reservation
                                                </label>
                                                <input
                                                    type="number"
                                                    id="reservationCount"
                                                    name="reservationCount"
                                                    className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                    placeholder="285"
                                                    min="1"
                                                    defaultValue={motorcycle.reservationCount}
                                                    required
                                                />
                                            </div>


                                        </div>

                                        <div className="mb-3 text-gray-500 dark:text-gray-400">

                                            <div className="mb-5">
                                                <label htmlFor="weight" className="block mb-2 text-sm font-medium text-gray-900">
                                                    Weight (k.g)
                                                </label>
                                                <input
                                                    type="number"
                                                    id="weight"
                                                    name="weight"
                                                    className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                    placeholder="205"
                                                    min="1"
                                                    defaultValue={motorcycle.weight}
                                                    required
                                                />
                                            </div>

                                            <div className="mb-5">
                                                <label
                                                    htmlFor="category"
                                                    className="block mb-2 text-sm font-medium text-gray-900"
                                                >
                                                    Select your category
                                                </label>
                                                <select
                                                    id="category"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                    name="category"
                                                    value={selectedValueCategory}
                                                    onChange={handleChangeSelectCategory}
                                                >
                                                    <option value="A">A</option>
                                                    <option value="A1">A1</option>
                                                    <option value="A2">A2</option>
                                                </select>
                                            </div>

                                            <div className="mb-5">
                                                <label htmlFor="year" className="block mb-2 text-sm font-medium text-gray-900">
                                                    Year
                                                </label>
                                                <input
                                                    type="number"
                                                    id="year"
                                                    name="year"
                                                    className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                    placeholder="2024"
                                                    min="1900"
                                                    defaultValue={motorcycle.year}
                                                    required
                                                />
                                            </div>

                                            <div className="mb-5">
                                                <label htmlFor="tank" className="block mb-2 text-sm font-medium text-gray-900">
                                                    Tank (L)
                                                </label>
                                                <input
                                                    type="number"
                                                    id="tank"
                                                    name="tank"
                                                    className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                    placeholder="18"
                                                    min="1"
                                                    defaultValue={motorcycle.tank}
                                                    required
                                                />
                                            </div>

                                            <div className="mb-5">
                                                <label
                                                    className="block mb-2 text-sm font-medium text-gray-900"
                                                    htmlFor="moto_image"
                                                >
                                                    Upload Moto Image
                                                </label>
                                                <input
                                                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
                                                    aria-describedby="moto_image_help"
                                                    id="moto_image"
                                                    name="image"
                                                    type="file"
                                                />
                                            </div>

                                            <div className="mb-5">
                                                <label htmlFor="pricePerDay" className="block mb-2 text-sm font-medium text-gray-900">
                                                    Price (per day)
                                                </label>
                                                <input
                                                    type="number"
                                                    id="pricePerDay"
                                                    name="pricePerDay"
                                                    className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                    placeholder="50"
                                                    min="0"
                                                    defaultValue={motorcycle.pricePerDay}
                                                    required
                                                />
                                            </div>

                                            
                                            <div className="mt-14">
                                                <label className="inline-flex items-center mb-5 cursor-pointer">
                                                    <input type="checkbox" className="sr-only peer" checked={isActive} onChange={handleCheckboxChange} />
                                                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600" />
                                                    <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                        Active in site
                                                    </span>
                                                </label>
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
                                        Edit new motorcycle
                                    </button>

                                    <button
                                        className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                                        data-modal-hide="large-modal"
                                        type="button"
                                        onClick={() => { setIsOpen(false); setEditMotorcycle(null) }}>
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