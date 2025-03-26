import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";

export default function SuccessReservation() {
    const location = useLocation();
    const { reservation } = location.state || {};
    
    const navigate = useNavigate();

    useEffect(() => {
        if(!reservation){
            return navigate("/");
        }
        const timer = setTimeout(() => {
          navigate("/");
        }, 8000);
    
        return () => clearTimeout(timer);
      }, [reservation, navigate]);
    

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r ">
          <div className="w-full max-w-xl bg-white p-8 rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105">
            {/* Flowbite Alert */}
            <div className="p-4 mb-6 text-sm text-green-800 bg-green-200 rounded-lg dark:bg-green-300 dark:text-green-900 shadow-lg">
              <span className="font-semibold text-xl">Your order was successful!</span>
            </div>
    
            <p className="mt-4 text-center text-lg text-gray-800">
              Thank you for choosing our services. You will be redirected to the homepage in a few seconds...
            </p>
    
            {/* Resevation details */}
            <div className="mt-6 space-y-4">
              <div className="p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition-all">
                <div className="text-lg font-semibold text-gray-700">Name:</div>
                <p className="text-gray-600">{reservation?.username}</p>
              </div>
    
              <div className="p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition-all">
                <div className="text-lg font-semibold text-gray-700">Email:</div>
                <p className="text-gray-600">{reservation?.email}</p>
              </div>
    
              <div className="p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition-all">
                <div className="text-lg font-semibold text-gray-700">Telephone:</div>
                <p className="text-gray-600">{reservation?.telephone}</p>
              </div>
    
              <div className="p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition-all">
                <div className="text-lg font-semibold text-gray-700">Total price:</div>
                <p className="text-gray-600">{reservation?.totalPrice} lv.</p>
              </div>
    
              <div className="p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition-all">
                <div className="text-lg font-semibold text-gray-700">You paid:</div>
                <p className="text-gray-600">{reservation?.paid} lv.</p>
              </div>
            </div>
    
            <div className="mt-8 text-center">
              <button
                className="px-6 py-3 text-white rounded-full shadow-lgtransition-all duration-200  bg-red-400 hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
                onClick={() => navigate("/")}
              >
                Go to the homepage
              </button>
            </div>
          </div>
        </div>
      );
}