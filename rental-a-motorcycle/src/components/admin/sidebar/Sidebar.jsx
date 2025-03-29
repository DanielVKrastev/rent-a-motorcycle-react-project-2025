import { useEffect, useState } from "react";
import { LayoutDashboard, Users, Bike, CalendarCheck, MessagesSquare, FileText } from "lucide-react"; 

import { Link } from "react-router-dom";

export default function Sidebar({
  openAdminNav,
  closeOpenHandlerAdminMenu
}) {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [openCrudMenu, setOpenCrudMenu] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const openCrudHandleMenu = () => {
    setOpenCrudMenu(state => !state);
  }

  return (
    <div className="relative h-full py-5 top-10 w-64" hidden={openAdminNav}>
      <h2 className="text-2xl font-semibold mb-8 text-center">Admin Panel</h2>
      <ul className="space-y-2 font-medium">
        <li>
          <Link
            onClick={() => { if (windowWidth < 780) closeOpenHandlerAdminMenu() }}
            className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-300"
            to="/admin">
            <LayoutDashboard className="w-5 h-5 text-gray-500 group-hover:text-gray-900" />
            <span className="ms-3">Dashboard</span>
          </Link>
        </li>

        {/* CRUD Menu */}
        <li>
          <button
            onClick={openCrudHandleMenu}
            className="flex items-center w-full p-2 text-gray-900 rounded-lg hover:bg-gray-300"
            type="button">
            <FileText className="w-5 h-5 text-gray-500" />
            <span className="flex-1 ms-3 text-left">CRUD</span>
            {openCrudMenu ? "▲" : "▼"}
          </button>
          <ul className="py-2 space-y-2" hidden={!openCrudMenu}>
            <li>
              <Link
                onClick={() => { if (windowWidth < 780) closeOpenHandlerAdminMenu() }}
                className="flex items-center w-full p-2 pl-11 rounded-lg hover:bg-gray-300"
                to="/admin/users">
                <Users className="w-4 h-4 text-gray-500" />
                <span className="ms-2">Users</span>
              </Link>
            </li>
            <li>
              <Link
                onClick={() => { if (windowWidth < 780) closeOpenHandlerAdminMenu() }}
                className="flex items-center w-full p-2 pl-11 rounded-lg hover:bg-gray-300"
                to="/admin/motorcycles">
                <Bike className="w-4 h-4 text-gray-500" />
                <span className="ms-2">Motorcycles</span>
              </Link>
            </li>
          </ul>
        </li>

        {/* Reservations */}
        <li>
          <Link
            onClick={() => { if (windowWidth < 780) closeOpenHandlerAdminMenu() }}
            className="flex items-center p-2 rounded-lg hover:bg-gray-300"
            to="/admin/reservations">
            <CalendarCheck className="w-5 h-5 text-gray-500" />
            <span className="ms-3">Reservations</span>
          </Link>
        </li>

        {/* Comments */}
        <li>
          <Link
            onClick={() => { if (windowWidth < 780) closeOpenHandlerAdminMenu() }}
            className="flex items-center p-2 rounded-lg hover:bg-gray-300"
            to="/admin/comments">
            <MessagesSquare className="w-5 h-5 text-gray-500" />
            <span className="ms-3">Comments</span>
          </Link>
        </li>

        {/* Customer Requests */}
        <li>
          <Link
            onClick={() => { if (windowWidth < 780) closeOpenHandlerAdminMenu() }}
            className="flex items-center p-2 rounded-lg hover:bg-gray-300"
            to="/admin/customer-requests">
            <FileText className="w-5 h-5 text-gray-500" />
            <span className="ms-3">Customer Requests</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
