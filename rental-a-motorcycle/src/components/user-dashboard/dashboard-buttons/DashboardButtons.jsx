import { useState } from "react";
import { useLocation, useNavigate } from "react-router";

export default function DashboardButtons() {
    const location = useLocation();
    const pathSegments = location.pathname.split("/");
    const lastSegment = pathSegments[pathSegments.length - 1];

    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState((lastSegment !== 'reservations' && lastSegment !== 'comments')? 'reservations' : lastSegment );

    return (
        <>
            {/* Toggle Buttons */}
            <div className="flex justify-center space-x-4 mb-6">
                <button
                    className={`px-4 py-2 rounded-lg font-semibold ${activeTab === "reservations" ? "bg-red-400 text-white hover:bg-red-600 transition" : "bg-gray-300"}`}
                    onClick={() => {setActiveTab("reservations"); navigate('/user-dashboard/reservations')}}
                >
                    Your Rented Motorcycles
                </button>
                <button
                    className={`px-4 py-2 rounded-lg font-semibold ${activeTab === "comments" ? "bg-red-400 text-white hover:bg-red-600 transition" : "bg-gray-300"}`}
                    onClick={() => {setActiveTab("comments"); navigate('/user-dashboard/comments')}}
                >
                    Your Comments
                </button>
            </div>
        </>
    );
}