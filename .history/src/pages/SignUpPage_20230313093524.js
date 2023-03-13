import React from "react";
import { Link } from "react-router-dom";
import LayoutAuthentication from "../layout/LayoutAuthentication";

const SignUpPage = () => {
  return (
    <LayoutAuthentication heading="SignUp">
      <p className="text-center text-text3 lg:text-sm  text-xs font-normal lg:mb-8 mb-6">
        Already have an account?{" "}
        <Link to="/sign-in" className="text-primary font-medium underline">
          Sign in
        </Link>
      </p>
      <button className="flex items-center justify-center py-3 gap-x-2 w-full border border-strock rounded-xl text-text2 text-base font-semibold">
        <img srcSet="./icon-google.png 2x" alt="icon-google" />
        <span className="">Sign up with google</span>
      </button>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
