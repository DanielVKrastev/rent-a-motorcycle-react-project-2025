
import { useState } from "react";
import Header from "./dashboard/Header";
import Sidebar from "./dashboard/Sidebar";
import { Outlet } from "react-router";

export default function AdminDashboard() {
  
const [openAdminNav, setOpenAdminNav] = useState(false);
  
function closeOpenHandlerAdminMenu() {
    setOpenAdminNav(state => !state);
};
  return (
    <>
      <div className="flex md:h-[calc(80vh-50px)]">
        <div className="z-31">
          <Sidebar openAdminNav={openAdminNav} closeOpenHandlerAdminMenu={closeOpenHandlerAdminMenu}/>
        </div>
        <div className="p-4 sm:ml-10 flex-1 overflow-x-auto">
          <Header openAdminNav={openAdminNav} closeOpenHandlerAdminMenu={closeOpenHandlerAdminMenu}/>
          <main className="p-4 overflow-x-auto">

            <Outlet />
          </main>
        </div>
      </div>

    </>
  );
}