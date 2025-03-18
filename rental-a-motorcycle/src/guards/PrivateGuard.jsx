import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";


const PrivateGuard = () => {
    const { accessToken } = useContext(UserContext);
    const isAuth = !!accessToken;

    return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateGuard;