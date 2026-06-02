import { Navigate, Outlet } from "react-router";
import { useSlices } from "../hooks/useSlices";
import Loader from "../components/Loader";

const RouteHandler = () => {
  const { data } = useSlices("authControl");

  if (data.isLoading) {
    return <Loader />;
  }

  return data.logged_in ? <Outlet /> : <Navigate to="/login" replace />;
};

export default RouteHandler;
