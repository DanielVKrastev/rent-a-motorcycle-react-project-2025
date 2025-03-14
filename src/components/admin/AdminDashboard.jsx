
import Header from "./dashboard/Header";
import Sidebar from "./dashboard/Sidebar";
import { Outlet } from "react-router";


export default function AdminDashboard() {
  return (
<div className="h-screen">
  <div className="fixed w-64 h-full">
    <Sidebar />
  </div>
  
  <div className="ml-64 flex-1 flex flex-col">
    <Header />
    <main className="p-6 overflow-x-auto">
      <Outlet />
    </main>
  </div>
</div>

  );
}