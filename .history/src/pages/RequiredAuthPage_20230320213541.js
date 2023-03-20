import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router";

const RequiredAuthPage = ({ allowPermissions }) => {
  const { user } = useSelector((state) => state.auth);
  const userPermissions = user?.permissions || [];
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (!user || !user.email) {
  //     navigate("/login");
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [user]);
  // if (!user || !user.email) return null;
  return userPermissions.find((p) => allowPermissions?.includes(p)) ? (
    <Outlet></Outlet>
  ) : user ? (
    <Navigate to="/" replace />
  ) : (
    <Navigate to="" />
  );
};

export default RequiredAuthPage;
