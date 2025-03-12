import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>

    
    
    <div className="h-full w-64 bg-gray-800 text-white p-4">
      <h2 className="text-2xl font-semibold mb-8 text-center">Admin Panel</h2>
      <ul className="space-y-2 font-medium">
  <li>
    <Link
      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
      to="/admin">
      <svg
        aria-hidden="true"
        className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
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
      aria-controls="dropdown-example"
      className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
      data-collapse-toggle="dropdown-example"
      type="button">
      <svg
        aria-hidden="true"
        className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
        fill="currentColor"
        viewBox="0 0 18 21"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
      </svg>
      <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
        CRUD
      </span>
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
    </button>
    <ul className=" py-2 space-y-2" id="dropdown-example">
      <li>
        <Link
          className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          to="/admin/users">
          Users
        </Link>
      </li>
      <li>
        <Link
          className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          to="/admin/motorcycle">
          Motorcycles
        </Link>
      </li>
    </ul>
  </li>

  <li>
    <Link
      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
      to="/admin/reservation">
      <svg
        aria-hidden="true"
        className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
        fill="currentColor"
        viewBox="0 0 20 18"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
      </svg>
      <span className="flex-1 ms-3 whitespace-nowrap">Reservation</span>
    </Link>
  </li>



</ul>

    </div>
    </>
  );
}
