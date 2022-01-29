import { useLocation, Navigate } from "react-router-dom";

function NotLoggedIn({ children }) {
    let location = useLocation();
    const user = localStorage.getItem('token');
    if (!user) return children;
    return <Navigate to="/home" state={{ from: location }} replace />;

}


export default NotLoggedIn;
