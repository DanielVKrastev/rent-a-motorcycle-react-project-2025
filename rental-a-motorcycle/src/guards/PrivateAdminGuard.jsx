import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { useUserRole } from "../api/authApi";
import LoadingSpinner from "../components/loading-spinner/LoadingSpinner";


const PrivateAdminGuard = () => {
    const { accessToken } = useContext(UserContext);
    const isAuth = !!accessToken;

    const { userRole, isLoading } = useUserRole();

    if (isLoading) {
        return (
                <div className="flex items-center justify-center md:h-[calc(80vh-50px)]">
                    <LoadingSpinner />
                </div>
                ); 
    }

    return isAuth && userRole === 'Admin' ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateAdminGuard;