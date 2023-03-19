import { call } from "redux-saga/effects";
import { requestsAuthRegister } from "./auth-requests";

export default function* handleAuthRegister(action) {
  const { payload, type } = action;
  // console.log(action);
  try {
    const response = yield call(requestsAuthRegister, payload);
  } catch (error) {}
}
