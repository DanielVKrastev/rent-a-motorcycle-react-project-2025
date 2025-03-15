import { Link } from "react-router";

export default function Header() {
    return (
        <>
            <section className="bg-center bg-no-repeat bg-cover bg-[url('/images/bg-road.jpg')] bg-gray-500 bg-blend-multiply">
                <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                        Ride the Freedom. Own the Road.
                    </h1>
                    <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                        From the city to the mountains – your next adventure starts here. Rent a motorbike and feel the thrill!
                    </p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                        <Link
                            to="/rent-a-motorcycle"
                            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-red-400 hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
                        >
                            Get started
                            <svg
                                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </Link>
                        <Link
                            to="/about"
                            className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
                        >
                            Learn more
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}