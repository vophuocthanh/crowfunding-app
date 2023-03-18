import React, { lazy, Suspense } from "react";
import Modal from "react-modal";
import { Routes, Route } from "react-router-dom";
const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));
const DashBoardPage = lazy(() => import("./pages/DashBoardPage"));
const CampaignPage = lazy(() => import("./pages/CampaignPage"));
const StartCampaignPage = lazy(() => import("./pages/StartCampaignPage"));
const LayoutDashboard = lazy(() => import("./layout/LayoutDashboard"));
const CampaignView = lazy(() => import("./modules/campaign/CampaignView"));
const PaymentPage = lazy(() => import("./pages/PaymentPage"));
const WithdrawPage = lazy(() => import("./pages/WithdrawPage"));
const LayoutPayment = lazy(() => import("./layout/LayoutPayment"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));
const ShippingPage = lazy(() => import("./pages/ShippingPage"));

const customStyles = {
  content: {},
};
Modal.setAppElement("#root");
Modal.defaultStyles = {};
function App() {
  return (
    <Suspense>
      <Routes>
        <Route element={<LayoutDashboard></LayoutDashboard>}>
          <Route path="/" element={<DashBoardPage></DashBoardPage>}></Route>
          <Route
            path="/withdraw"
            element={<WithdrawPage></WithdrawPage>}
          ></Route>
          <Route path="/payment" element={<PaymentPage></PaymentPage>}></Route>
          <Route
            path="/campaign"
            element={<CampaignPage></CampaignPage>}
          ></Route>
          <Route
            path="/start-campaign"
            element={<StartCampaignPage></StartCampaignPage>}
          ></Route>
          <Route
            path="/campaign/:slug"
            element={<CampaignView></CampaignView>}
          ></Route>
          <Route element={<LayoutPayment></LayoutPayment>}></Route>
          <Route
            path="/checkout"
            element={<CheckoutPage></CheckoutPage>}
          ></Route>
          <Route
            path="/shipping-address"
            element={<ShippingPage></ShippingPage>}
          ></Route>
        </Route>
        <Route path="/register" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/log-in" element={<SignInPage></SignInPage>}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
