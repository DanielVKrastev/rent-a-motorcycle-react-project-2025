import { Link } from "react-router";
import useActiveNavButton from "../../../hooks/useActiveNavButton";

export default function DashboardButtons() {

    const [activeTab ] = useActiveNavButton();


    return (
        <>
            {/* Toggle Buttons */}

            <div className="flex justify-center mb-6 flex-col md:flex-row">
                <Link to="/user-dashboard/settings" aria-current="page" 
                    className={`${activeTab === "settings" ? 'text-red-700' : 'text-gray-900'} px-4 py-2 text-sm font-medium bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-red-700 focus:text-red-700 light:bg-gray-800 light:border-gray-700 light:text-white light:hover:text-white light:hover:bg-gray-700 light:focus:ring-red-500 light:focus:text-white`}
                    >
                    Settings
                </Link>
                <Link to="/user-dashboard/reservations" 
                    className={`${activeTab === "reservations" ? 'text-red-700' : 'text-gray-900'} px-4 py-2 text-sm font-medium bg-white border-t border-r border-b border-l border-gray-200 hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-2 focus:ring-red-700 focus:text-red-700 light:bg-gray-800 light:border-gray-700 light:text-white light:hover:text-white light:hover:bg-gray-700 light:focus:ring-red-500 light:focus:text-white`}
                    >
                    Rented Motorcycles
                </Link>
                <Link to="/user-dashboard/comments" 
                    className={`${activeTab === "comments" ? 'text-red-700' : 'text-gray-900'} px-4 py-2 text-sm font-medium bg-white border-t border-b border-r border-l border-gray-200 hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-2 focus:ring-red-700 focus:text-red-700 light:bg-gray-800 light:border-gray-700 light:text-white light:hover:text-white light:hover:bg-gray-700 light:focus:ring-red-500 light:focus:text-white`}
                    >
                    Comments
                </Link>
                <Link to="/user-dashboard/support-request" 
                    className={`${activeTab === "support-request" ? 'text-red-700' : 'text-gray-900'} px-4 py-2 text-sm font-medium bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-2 focus:ring-red-700 focus:text-red-700 light:bg-gray-800 light:border-gray-700 light:text-white light:hover:text-white light:hover:bg-gray-700 light:focus:ring-red-500 light:focus:text-white`}
                    >
                    Support Request
                </Link>
            </div>
        </>
    );
}