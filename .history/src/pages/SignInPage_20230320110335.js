import { Button, ButtonGoggle } from "../components/button";
import { IconEyeToggle } from "../components/icons";
import { Input } from "../components/input";
import { Label } from "../components/label";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormGroup from "../components/common/FormGroup";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import React from "react";
import useToggleValue from "../hooks/useToggleValue";
import { useDispatch } from "react-redux";
import { authLogin } from "../store/auth/auth-slice";

const schema = yup.object({
  email: yup.string().email("").required("This filed is required"),
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
  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue();
  const dispatch = useDispatch();
  const handleSignIn = (values) => {
    dispatch(authLogin(values));
  };
  return (
    <LayoutAuthentication heading="Welcome Back!">
      <p className="mb-6 text-xs font-normal text-center text-text3 lg:text-sm lg:mb-8">
        Dont have an account?{" "}
        <Link to="/register" className="font-medium underline text-primary">
          Sign up
        </Link>
      </p>
      <ButtonGoggle text="Sign in with google"></ButtonGoggle>
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
            placeholder="Enter Password"
            type={`${showPassword ? "text" : "password"}`}
            error={errors.password?.message}
          >
            <IconEyeToggle
              open={showPassword}
              onClick={handleTogglePassword}
            ></IconEyeToggle>
          </Input>
        </FormGroup>
        <FormGroup>
          <div className="text-right">
            <span className="inline-block text-sm font-medium cursor-pointer text-primary">
              Forgot password
            </span>
          </div>
        </FormGroup>
        <Button type="submit" className="w-full" kind="primary">
          Sign in
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignInPage;
