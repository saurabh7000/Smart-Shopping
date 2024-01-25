import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import swal from "sweetalert";

const ProtectRoute = ({ children }) => {

  const location = useLocation()
  const { isAuthenticated } = useSelector((state) => state.login);
  if (!isAuthenticated) {
    swal("Warning", "Please Login to Access this resource", "warning");
    return <Navigate to="/login" state={{ from: location}}  />

  }
  return children;
};

export default ProtectRoute;
