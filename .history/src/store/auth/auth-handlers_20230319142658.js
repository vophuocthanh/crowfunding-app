import { toast } from "react-toastify";
import { call } from "redux-saga/effects";
import { requestsAuthRegister, requestsAuthLogin } from "./auth-requests";

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
    const response = yield call(requestsAuthLogin);
    yield 1;
  } catch (error) {}
}
export { handleAuthLogin };
