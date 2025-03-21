import { Navigate } from "react-router";
import { useLogout } from "../../api/authApi";

export default function Logout() {
    const { isLoggedOut } = useLogout();

    return isLoggedOut
        ? <Navigate to="/" />
        : <h1>logout</h1>; // spinner is better
}