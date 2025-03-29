import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";

export default function DashboardButtons() {
    const location = useLocation();
    useEffect(() => {
        const pathSegments = location.pathname.split("/");
        const lastSegment = pathSegments[pathSegments.length - 1];
        
        if(pathSegments[pathSegments.length - 2] == 'reservation-details'){
            return setActiveTab('reservations');
        }

        setActiveTab(lastSegment);
        
    }, [location])

    const [activeTab, setActiveTab] = useState('');


    return (
        <>
            {/* Toggle Buttons */}

            <div className="flex justify-center mb-6 flex-col md:flex-row">
                <Link to="/user-dashboard/settings" aria-current="page" 
                    className={`${activeTab === "settings" ? 'text-red-700' : 'text-gray-900'} px-4 py-2 text-sm font-medium bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-red-700 focus:text-red-700 light:bg-gray-800 light:border-gray-700 light:text-white light:hover:text-white light:hover:bg-gray-700 light:focus:ring-red-500 light:focus:text-white`}
                    onClick={() => setActiveTab('settings')}
                    >
                    Settings
                </Link>
                <Link to="/user-dashboard/reservations" 
                    className={`${activeTab === "reservations" ? 'text-red-700' : 'text-gray-900'} px-4 py-2 text-sm font-medium bg-white border-t border-r border-b border-l border-gray-200 hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-2 focus:ring-red-700 focus:text-red-700 light:bg-gray-800 light:border-gray-700 light:text-white light:hover:text-white light:hover:bg-gray-700 light:focus:ring-red-500 light:focus:text-white`}
                    onClick={() => setActiveTab('reservations')}
                    >
                    Rented Motorcycles
                </Link>
                <Link to="/user-dashboard/comments" 
                    className={`${activeTab === "comments" ? 'text-red-700' : 'text-gray-900'} px-4 py-2 text-sm font-medium bg-white border-t border-b border-r border-l border-gray-200 hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-2 focus:ring-red-700 focus:text-red-700 light:bg-gray-800 light:border-gray-700 light:text-white light:hover:text-white light:hover:bg-gray-700 light:focus:ring-red-500 light:focus:text-white`}
                    onClick={() => setActiveTab('comments')}
                    >
                    Comments
                </Link>
                <Link to="/user-dashboard/support-request" 
                    className={`${activeTab === "support-request" ? 'text-red-700' : 'text-gray-900'} px-4 py-2 text-sm font-medium bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-2 focus:ring-red-700 focus:text-red-700 light:bg-gray-800 light:border-gray-700 light:text-white light:hover:text-white light:hover:bg-gray-700 light:focus:ring-red-500 light:focus:text-white`}
                    onClick={() => setActiveTab('support-request')}
                    >
                    Support Request
                </Link>
            </div>
        </>
    );
}