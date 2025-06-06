import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";

import { useRegister } from "../../api/authApi";

import { UserContext } from "../../contexts/UserContext";
import ErrorAlert from "../errorAlert/ErrorAlert";

export default function Register() {
    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState(false);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');

    const { userLoginHandler } = useContext(UserContext);
    const { register } = useRegister();

    async function submitActionRegister(formData) {
        const { email, username, password, rePassword, terms } = Object.fromEntries(formData);

        if(!terms) return ;
        
        setEmail(email);
        setUsername(username);

        try {
            const authData = await register(email, username, password, rePassword);
            userLoginHandler(authData);

            navigate('/');
        } catch (err) {
            setErrorMessage(err.message);
        }

    }
    return (
        <>
            <section
                className="bg-gray-500 bg-blend-multiply dark:bg-gray-500 bg-cover bg-[url('/images/bg-road.jpg')] bg-center bg-no-repeat md:h-[calc(100vh-50px)] flex items-center justify-center"
            >
                <div className="flex flex-col items-center justify-center px-1 py-8 mx-auto lg:py-0 mb-20 ">
                    <Link to="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white z-0">
                        <img
                            className="w-45 h-20 mr-2"
                            src="/images/logo-white.png"
                            alt="logo"
                        />

                    </Link>
                    <div className="w-[95vw] bg-white bg-opacity-90 backdrop-blur-md rounded-lg shadow sm:max-w-md xl:p-0 mt-2 mb-16">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                Sign in to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" action={submitActionRegister}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                                        Your email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder="name@company.com"
                                        defaultValue={email}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        name="username"
                                        id="username"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder="John Doe"
                                        defaultValue={username}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="rePassword"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Confirm password
                                    </label>
                                    <input
                                        type="password"
                                        name="rePassword"
                                        id="rePassword"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        required
                                    />
                                </div>
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="terms"
                                            name="terms"
                                            aria-describedby="terms"
                                            type="checkbox"
                                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                                            required
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label
                                            htmlFor="terms"
                                            className="font-light text-gray-500"
                                        >
                                            I accept the{" "}
                                            <Link
                                                className="font-medium text-primary-600 hover:underline text-blue-500"
                                                to="/about"
                                            >
                                                Terms and Conditions
                                            </Link>
                                        </label>
                                    </div>
                                </div>

                                {errorMessage && <ErrorAlert error={errorMessage} />}

                                <button
                                    type="submit"
                                    className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                >
                                    Create an account
                                </button>
                                <p className="text-sm font-light text-gray-500">
                                    Already have an account?{" "}
                                    <Link to="/login" className="font-medium text-blue-600 hover:underline">
                                        Sign in
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>



        </>
    );
}