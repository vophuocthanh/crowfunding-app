const { default: axios } = require("../../api/axios");

export const requestsAuthRegister = (data) => {
  return axios.post("auth/register", {
    ...data,
  });
};
export const requestAuthLogin = (data) => {
  return axios.post("/auth/login", {
    ...data,
  });
};

export const requestsAuthFetchMe = (data) => {
  return axios.get("/me");
  ...data
};
