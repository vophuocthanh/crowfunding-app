import { takeLaster } from "@reduxjs/toolkit";
export default function* authSaga() {
  yield takeLaster();
}
