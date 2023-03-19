const { default: axios } = require("../../api/axios");

export const requestsAuthRegister = (data) => {
  console.log("file: auth-requests.js:4 ~ requestsAuthRegister ~ data:", data);
  return axios.post("auth/register", {
    data,
  });
};
