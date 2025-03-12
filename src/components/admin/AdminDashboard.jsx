
import Header from "./dashboard/Header";
import Sidebar from "./dashboard/Sidebar";
import { Outlet } from "react-router";


export default function AdminDashboard() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6">
            <Outlet />
        </main>
      </div>
    </div>
  );
}