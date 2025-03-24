import { Link } from "react-router";

import 'flowbite';
import { useEffect, useState } from "react";
import { UserContext, useUserContext } from "../../../contexts/UserContext";

export default function Navbar() {
    const [openMobileNav, setOpenMobileNav] = useState(true);

    const [isOpenProfile, setIsOpenProfile] = useState(false);
    useEffect(() => {
        setIsOpenProfile(false);
    }, [])

    const { accessToken, username, role, email } = useUserContext();

    function closeOpenHandlerMobileMenu() {
        setOpenMobileNav(state => !state);
    };

    return (
        <>
            <nav className="sticky top-0 bg-white dark:bg-gray-900 w-full z-50 border-b border-gray-200 dark:border-gray-600 transition-all duration-300">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link
                        to="/"
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        <img
                            src="/images/logo-white.png"
                            className="h-12"
                            alt="MotoKrastev Logo"
                        />
                    </Link>
                    <div className="flex md:order-2">
                        <button
                            type="button"
                            data-collapse-toggle="navbar-search"
                            aria-controls="navbar-search"
                            aria-expanded="false"
                            className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
                            onClick={closeOpenHandlerMobileMenu}
                        >
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                        <div className="relative hidden md:block">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                                <span className="sr-only">Search icon</span>
                            </div>
                            <input
                                type="text"
                                id="search-navbar"
                                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search..."
                            />
                        </div>

                        <button
                            data-collapse-toggle="navbar-search"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-search"
                            aria-expanded="false"
                            onClick={closeOpenHandlerMobileMenu}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </button>
                    </div>

                    <div
                        className={openMobileNav ?
                            "items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                            : "items-center justify-between w-full md:flex md:w-auto md:order-1"}
                        id="navbar-search"
                    >
                        <div className="relative mt-3 md:hidden">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </div>
                            <input
                                type="text"

                                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search..."
                            />
                        </div>
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-400">
                            <li>
                                <Link
                                    to="/"
                                    className="block py-2 px-3 text-white bg-red-400 rounded-sm md:bg-transparent md:text-red-400 md:p-0 md:dark:text-red-400"
                                    aria-current="page"
                                    onClick={closeOpenHandlerMobileMenu}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/rent-a-motorcycle"
                                    className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-400 md:p-0 dark:text-white md:dark:hover:text-red-400 dark:hover:bg-gray-400 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-400"
                                    onClick={closeOpenHandlerMobileMenu}
                                >
                                    Rent a Moto
                                </Link>
                            </li>
                            {!accessToken ?
                                <>
                                    <li>
                                        <Link
                                            to="/login"
                                            className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-400 md:p-0 dark:text-white md:dark:hover:text-red-400 dark:hover:bg-gray-400 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-400"
                                            onClick={closeOpenHandlerMobileMenu}
                                        >
                                            Login
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/register"
                                            className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-400 md:p-0 dark:text-white md:dark:hover:text-red-400 dark:hover:bg-gray-400 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-400"
                                            onClick={closeOpenHandlerMobileMenu}
                                        >
                                            Register
                                        </Link>
                                    </li>
                                </>
                                :
                                <>
                                    <li>
                                        <button
                                            onClick={() => setIsOpenProfile(!isOpenProfile)}
                                            className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:hover:text-red-400 md:p-0 md:w-auto dark:text-white md:dark:hover:text-red-400 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                                        >
                                            Profile
                                            <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                            </svg>
                                        </button>

                                        {isOpenProfile && (
                                            <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-44 divide-y divide-gray-500 rounded-lg shadow-sm dark:bg-gray-700">
                                                <div className="px-4 py-3">
                                                    <span className="block text-sm text-gray-900 dark:text-white">{username}</span>
                                                    <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">{email}</span>
                                                </div>
                                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                                    <li>
                                                        <Link to="/user-dashboard" onClick={() => setIsOpenProfile(false)} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/user-settings" onClick={() => setIsOpenProfile(false)} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</Link>
                                                    </li>
                                                </ul>
                                                <div className="py-1">
                                                    <Link to="/logout" onClick={() => setIsOpenProfile(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</Link>
                                                </div>
                                            </div>
                                        )}
                                    </li>
                                    {role === "Admin" && (
                                        <li>
                                            <Link
                                                to="/admin"
                                                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-400 md:p-0 dark:text-white md:dark:hover:text-red-400 dark:hover:bg-gray-400 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-400"
                                                onClick={closeOpenHandlerMobileMenu}
                                            >
                                                Admin Panel
                                            </Link>
                                        </li>
                                    )}
                                </>
                            }

                            <li>
                                <Link
                                    to="/about"
                                    className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-400 md:p-0 md:dark:hover:text-red-400 dark:text-white dark:hover:bg-gray-400 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-400"
                                    onClick={closeOpenHandlerMobileMenu}
                                >
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
};