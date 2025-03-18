import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";

const PublicGuard = () => {
    const { user } = useUserContext(); 

    return user ? <Navigate to="/" replace /> : <Outlet />;
};

export default PublicGuard;