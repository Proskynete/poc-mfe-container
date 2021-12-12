import { Navigate, useLocation } from "react-router";
import { useAuth } from "../hooks/auth.hook";

const Guard = ({ children }: { children: JSX.Element }) => {
  let location = useLocation();
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return location.pathname === "/auth" ? children : <Navigate to="/auth" />;
  }

  return location.pathname === "/auth" ? <Navigate to="/" /> : children;
};

export { Guard };
