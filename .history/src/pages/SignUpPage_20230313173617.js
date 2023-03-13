import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button } from "../components/button";
import { Checkbox } from "../components/checkbox";
import FormGroup from "../components/common/FormGroup";
import Input from "../components/input/Input";
import { Label } from "../components/label";
import LayoutAuthentication from "../layout/LayoutAuthentication";

const SignUpPage = () => {
  const {
    handleSubmit,
    control,
    // formState: { isValid, isSubmitting },
  } = useForm({});
  const handleSignUp = (values) => {
    console.log("handleSignUp ~ values:", values);
  };
  const [acceptTerm, setAcceptTerm] = useState(false);
  const handleToggleTerm = () => {
    setAcceptTerm(!acceptTerm());
  };
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
          <Label htmlFor="name">Full Name *</Label>
          <Input control={control} name="name" placeholder="Jhon Doe"></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            control={control}
            name="email"
            type="email"
            placeholder="example@gmail.com"
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password *</Label>
          <Input
            control={control}
            name="password"
            placeholder="Create a password"
            type="password"
          ></Input>
        </FormGroup>
        <div className="flex items-start gap-x-5 mb-5">
          <Checkbox
            name="term"
            checked={acceptTerm}
            onClick={handleToggleTerm}
          ></Checkbox>
          <p className="text-sm text-text2 flex-1">
            I agree to the{" "}
            <span className="text-secondary underline">Terms of Use</span> and
            have read and understand the{" "}
            <span className="text-secondary underline">Privacy policy.</span>
          </p>
        </div>
        <Button type="submit" className="bg-primary w-full">
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
