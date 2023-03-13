import React from "react";
import { Link } from "react-router-dom";
import LayoutAuthentication from "../layout/LayoutAuthentication";

const SignUpPage = () => {
  return (
    <LayoutAuthentication heading="SignUp">
      <p className="text-center lg:text-sm font-medium text-xs">
        Already have an account?{" "}
        <Link to="/sign-in" className="text-primary">
          Sign in
        </Link>
      </p>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
