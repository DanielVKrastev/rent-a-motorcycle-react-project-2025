

export default function Header({
  openAdminNav,
  closeOpenHandlerAdminMenu
}) {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="flex items-center ">
        <button onClick={closeOpenHandlerAdminMenu} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-100 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75  light:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
          {openAdminNav? "Show" : "Close"} navigation
          </span>
        </button>
      </div>
      <div className="flex items-center">
        <button className="flex items-center text-gray-500 hover:text-gray-700">

          Admin
        </button>
      </div>
    </div>
  );
}
