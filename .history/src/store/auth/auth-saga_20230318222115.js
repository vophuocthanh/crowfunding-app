import { takeLatest } from "redux-saga/effects";
import { authRegister } from "./auth-slice";
export default function* authSaga() {
  yield takeLatest(authRegister);
}
