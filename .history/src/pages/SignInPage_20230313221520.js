import React from "react";
import { Link } from "react-router-dom";
import LayoutAuthentication from "../layout/LayoutAuthentication";

const SignInPage = () => {
  return (
    <LayoutAuthentication heading="Welcome Back!">
      <p className="text-center text-text3 lg:text-sm  text-xs font-normal lg:mb-8 mb-6">
        Dont have an account?{" "}
        <Link to="/sign-in" className="text-primary font-medium underline">
          Sign up
        </Link>
      </p>
      <button className="flex items-center justify-center py-4 gap-x-3 w-full border border-strock rounded-xl text-text2 text-base font-semibold mb-5 dark:text-white dark:border-darkStroke">
        <img srcSet="./icon-google.png 2x" alt="icon-google" />
        <span>Sign up with google</span>
      </button>
    </LayoutAuthentication>
  );
};

export default SignInPage;
