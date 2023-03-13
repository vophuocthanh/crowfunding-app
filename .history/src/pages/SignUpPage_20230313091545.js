import React from "react";
import { Link } from "react-router-dom";
import LayoutAuthentication from "../layout/LayoutAuthentication";

const SignUpPage = () => {
  return (
    <LayoutAuthentication heading="SignUp">
      <p>
        Already have an account? <Link to="/sign-in">Sign in</Link>
      </p>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
