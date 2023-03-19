const { default: axios } = require("../../api/axios");

export const requestsAuthRegisters = () => {
  return axios.post("auth/register");
};
