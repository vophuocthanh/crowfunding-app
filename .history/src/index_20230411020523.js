import React, { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.scss";
import { Provider } from "react-redux";
import { store } from "./store/configureStore";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { permissions } from "./constants/permissions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequiredAuthPage from "./pages/RequiredAuthPage";
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
// const RequiredAuthPage = lazy(() => import("./pages/RequiredAuthPage"));
const UnauthorizePage = lazy(() => import("./pages/UnauthorizePage"));

const container = document.getElementById("root");
const router = createBrowserRouter([
  {
    element: <LayoutDashboard></LayoutDashboard>,
    children: [
      {
        path: "/",
        element: <DashBoardPage></DashBoardPage>,
      },
      {
        path: "/campaign",
        element: <CampaignPage></CampaignPage>,
      },
      {
        path: "/payment",
        element: <PaymentPage></PaymentPage>,
      },
      {
        path: "/withdraw",
        element: <WithdrawPage></WithdrawPage>,
      },
      {
        path: "/unauthorize",
        element: <UnauthorizePage></UnauthorizePage>,
      },
    ],
  },
  {
    path: "/register",
    element: <SignUpPage></SignUpPage>,
  },
  {
    path: "/login",
    element: <SignInPage></SignInPage>,
  },
  {
    element: (
      <RequiredAuthPage
        allowPermissions={[permissions.campaign.CREATE_CAMPAIGN]}
      ></RequiredAuthPage>
    ),
    children: [
      {
        path: "/start-campaign",
        element: <StartCampaignPage></StartCampaignPage>,
      },
      {
        path: "/campaign/:slug",
        element: <CampaignView></CampaignView>,
      },
      {
        element: <LayoutPayment></LayoutPayment>,
      },
    ],
  },
]);
createRoot(container).render(
  <Provider store={store}>
    <Suspense>
      <RouterProvider router={router}>
        <App />
        <ToastContainer bodyClassName="font-primary text-sm"></ToastContainer>
      </RouterProvider>
    </Suspense>
  </Provider>
);

// root.render(
//   <Provider store={store}>
//     <BrowserRouter>
//       <App />
//       <ToastContainer bodyClassName="font-primary text-sm"></ToastContainer>
//     </BrowserRouter>
//   </Provider>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
