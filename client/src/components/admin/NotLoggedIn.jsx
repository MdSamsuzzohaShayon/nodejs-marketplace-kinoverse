import { useLocation, Navigate } from "react-router-dom";

function NotLoggedIn({ children }) {
    let location = useLocation();
    const token = localStorage.getItem('token');
    if (!token) {
        // CONTINUE WITH LOGIN PAGE 
        return children;
    } else {
        // REDIRECT TO ANOTHER PAGE 
        const role = JSON.parse(localStorage.getItem('user')).role;
        if (role) {
            switch (role) {
                case "STUFF":
                    return <Navigate to="/admin" state={{ from: location }} replace />;
                case "GENERAL":
                    return <Navigate to="/home" state={{ from: location }} replace />;
                case "SUPER":
                    return <Navigate to="/admin" state={{ from: location }} replace />;
                default:
                    return <Navigate to="/home" state={{ from: location }} replace />;
            }
        } else {
            return <Navigate to="/home" state={{ from: location }} replace />;
        }
    }

}


export default NotLoggedIn;
