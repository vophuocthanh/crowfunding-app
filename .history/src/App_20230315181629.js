import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));
const DashBoardPage = lazy(() => import("./pages/DashBoardPage"));
const CampaignPage = lazy(() => import("./pages/CampaignPage"));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<DashBoardPage></DashBoardPage>}></Route>
        <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
        <Route path="/campaign" element={<CampaignPage></CampaignPage>}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
