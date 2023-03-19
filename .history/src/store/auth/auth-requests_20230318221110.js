const { default: axios } = require("../../api/axios");

export const requestsAuthRegisters = (data) => {
  console.log(requestsAuthRegisters ~ data:", data)
  return axios.post("auth/register", {
    data,
  });
};
