import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import FormGroup from "../components/common/FormGroup";
import { IconEyeToggle } from "../components/icons";
import { Input } from "../components/input";
import { Label } from "../components/label";
import useToggleValue from "../hooks/useToggleValue";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import {} from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("This filed is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("This filed is required"),
  password: yup
    .string()
    .required("This filed is required")
    .min(8, "Password must be 8 character "),
});

const SignInPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  const handleSignIn = (values) => {
    console.log("handleSignUp ~ values:", values);
  };
  const { value: acceptTerm, handleToggleValue: handleToggleTerm } =
    useToggleValue();
  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue();
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
      <form onSubmit={handleSubmit(handleSignIn)}>
        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            control={control}
            name="email"
            type="email"
            placeholder="example@gmail.com"
            error={errors.email?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password *</Label>
          <Input
            control={control}
            name="password"
            placeholder="Create a password"
            type={`${showPassword ? "text" : "password"}`}
            error={errors.password?.message}
          >
            <IconEyeToggle
              open={showPassword}
              onClick={handleTogglePassword}
            ></IconEyeToggle>
          </Input>
        </FormGroup>
      </form>
    </LayoutAuthentication>
  );
};

export default SignInPage;
