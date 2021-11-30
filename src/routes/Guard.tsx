import { Navigate, useLocation } from "react-router";

const Guard = ({ children }: { children: JSX.Element }) => {
  let location = useLocation();
  const isAuthenticated = false;

  if (!isAuthenticated) {
    return location.pathname === "/auth" ? children : <Navigate to="/auth" />;
  }

  return location.pathname === "/auth" ? <Navigate to="/" /> : children;
};

export { Guard };
