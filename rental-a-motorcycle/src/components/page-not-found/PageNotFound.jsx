import { Link } from "react-router";

export default function PageNotFound() {
    return (
        <section className="bg-white">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 md:h-[calc(80vh-50px)]">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl md:text-red-400">404</h1>
                    <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">
                        Something's missing.
                    </p>
                    <p className="mb-4 text-lg font-light text-gray-500">
                        Sorry, we can't find that page. You'll find lots to explore on the home page.
                    </p>
                    <Link to="/" className="relative inline-flex items-center justify-center p-4 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-100 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                        Back to Homepage
                    </Link>
                </div>
            </div>
        </section>

    );
}