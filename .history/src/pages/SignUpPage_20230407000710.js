import { Button, ButtonGoggle } from "../components/button";
import { Checkbox } from "../components/checkbox";
import { IconEyeToggle } from "../components/icons";
import { Label } from "../components/label";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormGroup from "../components/common/FormGroup";
import Input from "../components/input/Input";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import React from "react";
import useToggleValue from "../hooks/useToggleValue";
import { useDispatch } from "react-redux";
import { authRegister } from "../store/auth/auth-slice";

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

const SignUpPage = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  const dispatch = useDispatch();
  const handleSignUp = async (values) => {
    try {
      dispatch(authRegister({ ...values, permissions: [] }));
      reset({});
    } catch (error) {
      console.log(error);
    }
  };
  const { value: acceptTerm, handleToggleValue: handleToggleTerm } =
    useToggleValue();
  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue();
  return (
    <LayoutAuthentication heading="SignUp">
      <p className="mb-6 text-xs font-normal text-center text-text3 lg:text-sm lg:mb-8">
        Already have an account?{" "}
        <Link to="/login" className="font-medium underline text-primary">
          Login
        </Link>
      </p>
      <ButtonGoggle text="Sign up with google"></ButtonGoggle>
      <p className="mb-4 text-xs font-normal text-center lg:text-sm lg:mb-8 text-text2 dark:text-white">
        Or sign up with email
      </p>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <FormGroup>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            control={control}
            name="name"
            placeholder="Jhon Doe"
            error={errors.name?.message}
          ></Input>
        </FormGroup>
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
        <div className="flex items-start mb-5 gap-x-5">
          <Checkbox name="term" checked={acceptTerm} onClick={handleToggleTerm}>
            <p className="flex-1 text-sm text-text2 dark:text-text3 lg:text-sm">
              I agree to the{" "}
              <span className="underline text-secondary">Terms of Use</span> and
              have read and understand the{" "}
              <span className="underline text-secondary">Privacy policy.</span>
            </p>
          </Checkbox>
        </div>
        <Button type="submit" className="w-full" kind="primary">
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
