import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { useUserRole } from "../api/authApi";


const PrivateAdminGuard = () => {
    const { accessToken } = useContext(UserContext);
    const isAuth = !!accessToken;

    const { userRole, isLoading } = useUserRole();

    if (isLoading) {
        return <div>Loading...</div>; //some spinner
    }

    return isAuth && userRole === 'Admin' ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateAdminGuard;