import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";


const PrivateGuard = () => {
    const { user } = useUserContext();

    return user == {} ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateGuard;