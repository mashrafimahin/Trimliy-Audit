// dependencies
import { useAuth } from "../hooks/useAuth";
import { Outlet, Navigate } from "react-router";

// main
const RouteHandler = () => {
  const auth = useAuth();

  return auth.logged_in ? <Outlet /> : <Navigate to="/login" />;
};

export default RouteHandler;
