import { toast } from "react-toastify";
import { call } from "redux-saga/effects";
import { saveToken } from "../../utils/auth";
import { requestAuthLogin, requestsAuthRegister } from "./auth-requests";

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
    console.log("function*handleAuthLogin ~ response", response);
    // accessToken, refreshToken
    saveToken(response.data.accessToken, response.data.refreshToken);
    yield 1;
  } catch (error) {}
}
export { handleAuthLogin };
