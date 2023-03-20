import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const RequiredAuthPage = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  console.log("StartCampaignPage ~ user:", user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user || !user.email) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  if (!user || !user.email) return null;
  return <>{children}</>;
};

export default RequiredAuthPage;
