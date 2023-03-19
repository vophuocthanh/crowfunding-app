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

export const requestsAuthFetchMe = (token) => {
  if (!token) return;
  return axios.get("/me", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const requestsAuthRefreshToken = (token) => {
  if (!token) return;
  return axios.post("/token", {
    "Content-Type": "Application/json",
    refreshToken: token,
  });
};
