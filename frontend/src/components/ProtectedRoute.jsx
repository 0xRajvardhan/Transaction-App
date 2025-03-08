import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token"); // Change this based on your auth method

  return token ? <Outlet /> : <Navigate to="/signin" replace />;
};

export default ProtectedRoute;
