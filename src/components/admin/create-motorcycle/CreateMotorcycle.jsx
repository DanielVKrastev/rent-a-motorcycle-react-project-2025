export default function CreateMotorcycle() {
    return (
        <>
        <h1 class="mb-3 text-center text-4xl mt-10 italic">Add Motorcycle for Rent</h1>
            <form className="min-h-[70vh]">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 max-w-2xl mx-auto p-5 mt-10">
                <div className="mb-3 text-gray-500 dark:text-gray-400">
                    <div className="mb-5">
                        <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900">
                            Brand
                        </label>
                        <input
                            type="text"
                            id="brand"
                            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Honda"
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
                            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="CB 1000"
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
                            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="1000"
                            min="1"
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
                            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="125"
                            min="1"
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
                            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="285"
                            min="1"
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
                            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="205"
                            min="1"
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
                            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="2024"
                            min="1900"
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
                            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="18"
                            min="1"
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
                            type="file"
                        />
                    </div>

                    <div className="mt-14">
                        <label className="inline-flex items-center mb-5 cursor-pointer">
                            <input type="checkbox" value="active" className="sr-only peer" checked/>
                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600" />
                            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Active in site
                            </span>
                        </label>
                    </div>
                    
                </div>

            </div>

            <div className="mb-3 mx-auto max-w-lg flex flex-col">
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-auto max-w-lg"
                >
                    Add Motorcycle
                </button>
            </div>

            </form>

        </>
    );
}