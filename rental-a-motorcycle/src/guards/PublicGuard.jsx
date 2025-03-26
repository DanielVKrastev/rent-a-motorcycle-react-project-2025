import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";

const PublicGuard = () => {
    const { accessToken } = useUserContext();

    return (
        <>
            {accessToken ? <Navigate to="/" replace /> : <Outlet />}
        </>
    )
};

export default PublicGuard;