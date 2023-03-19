const { default: axios } = require("../../api/axios");

export const requestsAuthRegisters = (data) => {
  return axios.post("auth/register", {});
};
