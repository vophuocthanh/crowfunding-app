import { toast } from "react-toastify";
import { call } from "redux-saga/effects";
import { saveToken } from "../../utils/auth";
import {
  requestAuthLogin,
  requestsAuthFetchMe,
  requestsAuthRegister,
} from "./auth-requests";
import { authUpdateUser } from "./auth-slice";

export default function* handleAuthRegister(action) {
  const { payload } = action;
  try {
    const response = yield call(requestsAuthRegister, payload);
    if (response.status === 201) {
      toast.success("Created new register successfully!");
    }
  } catch (error) {
    console.log(error);
  }
}
function* handleAuthLogin({ payload }) {
  try {
    const response = yield call(requestAuthLogin, payload);
    // accessToken, refreshToken
    if (response.data.accessToken && response.data.refreshToken) {
      saveToken(response.data.accessToken, response.data.refreshToken);
      yield call(handleAuthFetchMe, { payload: response.data.accessToken });
    }
  } catch (error) {
    const response = error.response.data;
    if (response.statusCode === 403) {
      toast.error(response.error.message);
      return;
    }
  }
}
function* handleAuthFetchMe({ payload }) {
  try {
    const response = yield call(requestsAuthFetchMe, payload);
    if (response.status === 200) {
      authUpdateUser({
        user: response.data,
        accessToken: payload,
      });
    }
    // response.data -> userInfo
  } catch (error) {}
}
export { handleAuthLogin, handleAuthFetchMe };
