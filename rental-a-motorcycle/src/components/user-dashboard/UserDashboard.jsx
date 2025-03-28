import { Outlet } from "react-router";
import DashboardButtons from "./dashboard-buttons/DashboardButtons";

export default function UserDashboard() {
    return (
<section className="bg-gray-500 bg-blend-multiply dark:bg-gray-500 bg-cover bg-[url('/images/bg-road.jpg')] bg-center bg-no-repeat bg-fixed min-h-screen flex flex-col items-center justify-between py-12">
    <div className="container mx-auto px-4 flex-grow">
        <div className="max-w-6xl mx-auto bg-white bg-opacity-90 backdrop-blur-md rounded-lg shadow-lg p-8">
            <DashboardButtons />
            <Outlet />
        </div>
    </div>
</section>
    )
}