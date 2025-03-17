import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";


const PrivateAdminGuard = () => {
    const { user } = useUserContext();


    console.log(user._id);
    

    return (user.length !== 0) ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateAdminGuard;