const { default: axios } = require("../../api/axios");

export const requestsAuthRegister = (data) => {
  console.log("requestsAuthRegister ~ data:", data);
  return axios.post(
    "auth/register",
    {
      ...data,
    },
    {}
  );
};
