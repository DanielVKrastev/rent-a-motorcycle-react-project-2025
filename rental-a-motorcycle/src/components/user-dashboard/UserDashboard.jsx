import { Outlet } from "react-router";

export default function UserDashboard() {
    return (
    <section className="bg-gray-500 bg-blend-multiply dark:bg-gray-500 bg-cover bg-[url('/images/bg-road.jpg')] bg-center bg-no-repeat bg-fixed min-h-screen flex items-center justify-center py-12">
        <Outlet />
    </section>
    )
}