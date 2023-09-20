import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoutes({ children }) {
  const location = useLocation();
  const token = localStorage.getItem("userInfo");

  if (!token) {
    return <Navigate t0={"/"} state={{ from: location }} replace />;
  }
  return children;
}
