import { toast } from "react-toastify";
import { call } from "redux-saga/effects";
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
function* handleAuthLogin(action) {
  try {
    const response = yield call(requestAuthLogin);
    yield 1;
  } catch (error) {}
}
export { handleAuthLogin };
