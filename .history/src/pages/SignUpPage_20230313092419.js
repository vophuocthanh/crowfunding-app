import React from "react";
import { Link } from "react-router-dom";
import LayoutAuthentication from "../layout/LayoutAuthentication";

const SignUpPage = () => {
  return (
    <LayoutAuthentication heading="SignUp">
      <p className="text-center text-text3 lg:text-sm  text-xs font-normal">
        Already have an account?{" "}
        <Link to="/sign-in" className="text-primary font-medium underline">
          Sign in
        </Link>
      </p>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
