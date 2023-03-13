import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import FormGroup from "../components/common/FormGroup";
import Input from "../components/input/Input";
import { Label } from "../components/label";
import LayoutAuthentication from "../layout/LayoutAuthentication";

const SignUpPage = () => {
  const { handleSubmit, control } = useForm({});
  const handleSignUp = (values) => {};
  return (
    <LayoutAuthentication heading="SignUp">
      <p className="text-center text-text3 lg:text-sm  text-xs font-normal lg:mb-8 mb-6">
        Already have an account?{" "}
        <Link to="/sign-in" className="text-primary font-medium underline">
          Sign in
        </Link>
      </p>
      <button className="flex items-center justify-center py-4 gap-x-3 w-full border border-strock rounded-xl text-text2 text-base font-semibold mb-5">
        <img srcSet="./icon-google.png 2x" alt="icon-google" />
        <span>Sign up with google</span>
      </button>
      <p className="text-center text-sx lg:text-sm font-normal mb-4 lg:mb-8 text-text2">
        Or sign up with email
      </p>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <FormGroup>
          <Label>Full Name *</Label>
          <Input control={control} name="name" placeholder="Jhon Doe"></Input>
        </FormGroup>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
