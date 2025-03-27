import { useEffect, useState } from "react";
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
      <div className="relative h-full py-25 top-10 w-64 " hidden={openAdminNav}>
        <h2 className="text-2xl font-semibold mb-8 text-center">Admin Panel</h2>
        <ul className="space-y-2 font-medium">
          <li>
            <Link
              onClick={() => { if (windowWidth < 780) closeOpenHandlerAdminMenu() }}
              className="flex items-center p-2 text-gray-900 rounded-lg light:text hover:bg-gray-300 light:hover:bg-gray-700 group"
              to="/admin">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 transition duration-75 light:text-gray-400 group-hover:text-gray-900 light:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 22 21"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
              </svg>
              <span className="ms-3">Dashboard</span>
            </Link>
          </li>
          <li>
            <button
              onClick={() => openCrudHandleMenu()}
              aria-controls="dropdown-example"
              className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-300 light:text-white light:hover:bg-gray-700"
              data-collapse-toggle="dropdown-example"
              type="button">
              <svg
                aria-hidden="true"
                className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 light:text-gray-400 light:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 4.48 2 7v10c0 2.52 4.48 5 10 5s10-2.48 10-5V7c0-2.52-4.48-5-10-5zm0 2c4.97 0 8 1.94 8 3s-3.03 3-8 3-8-1.94-8-3 3.03-3 8-3zm0 16c-4.97 0-8-1.94-8-3v-2c1.93 1.25 5.07 2 8 2s6.07-.75 8-2v2c0 1.06-3.03 3-8 3zm0-6c-4.97 0-8-1.94-8-3v-2c1.93 1.25 5.07 2 8 2s6.07-.75 8-2v2c0 1.06-3.03 3-8 3z"/>
              </svg>
              <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                CRUD
              </span>
              
              {openCrudMenu ?

                <svg
                  aria-hidden="true"
                  className="w-3 h-3"
                  fill="none"
                  viewBox="0 0 10 6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5L5 1L9 5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
                :
                <svg
                  aria-hidden="true"
                  className="w-3 h-3"
                  fill="none"
                  viewBox="0 0 10 6"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="m1 1 4 4 4-4"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              }

            </button>
            <ul className=" py-2 space-y-2" id="dropdown-example" hidden={!openCrudMenu}>
              <li>
                <Link
                  onClick={() => { if (windowWidth < 780) closeOpenHandlerAdminMenu() }}
                  className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-300 light:text-white light:hover:bg-gray-700"
                  to="/admin/users">
                  Users
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => { if (windowWidth < 780) closeOpenHandlerAdminMenu() }}
                  className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-300 light:text-white light:hover:bg-gray-700"
                  to="/admin/motorcycles">
                  Motorcycles
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link
              onClick={() => { if (windowWidth < 780) closeOpenHandlerAdminMenu() }}
              className="flex items-center p-2 text-gray-900 rounded-lg light:text-white hover:bg-gray-300 light:hover:bg-gray-700 group"
              to="/admin/reservations">
              <svg
                aria-hidden="true"
                className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 light:text-gray-400 group-hover:text-gray-900 light:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 18"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
              </svg>
              <span className="flex-1 ms-3 whitespace-nowrap">Reservation</span>
            </Link>
          </li>

          <li>
            <Link
              onClick={() => { if (windowWidth < 780) closeOpenHandlerAdminMenu() }}
              className="flex items-center p-2 text-gray-900 rounded-lg light:text-white hover:bg-gray-300 light:hover:bg-gray-700 group"
              to="/admin/comments">
              <svg
                aria-hidden="true"
                className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 light:text-gray-400 group-hover:text-gray-900 light:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 18"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
              </svg>
              <span className="flex-1 ms-3 whitespace-nowrap">Comments</span>
            </Link>
          </li>

        </ul>
      </div>
  );
}
