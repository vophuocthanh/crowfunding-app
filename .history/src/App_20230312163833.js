import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <Routes>
      <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
    </Routes>
  );
}

export default App;
