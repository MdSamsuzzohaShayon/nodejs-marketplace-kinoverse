import { useLocation, Navigate } from "react-router-dom";

function RequireAuth({ children }) {
  let location = useLocation();

  const token = localStorage.getItem('token');
  if (!token) {
    // CONTINUE WITH LOGIN PAGE 
    return <Navigate to="/login" state={{ from: location }} replace />;
  } else {
    // REDIRECT TO ANOTHER PAGE 
    const role = JSON.parse(localStorage.getItem('user')).role;
    if (role) {
      switch (role) {
        case "STUFF":
          // Redirect them to the /login page, but save the current location they were
          // trying to go to when they were redirected. This allows us to send them
          // along to that page after they login, which is a nicer user experience
          // than dropping them off on the home page.
          return children;
        case "GENERAL":
          return <Navigate to="/login" state={{ from: location }} replace />;
        case "SUPER":
          return children;
        default:
          return <Navigate to="/login" state={{ from: location }} replace />;
      }
    } else {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  }
}


export default RequireAuth;