import React from "react";
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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LayoutDashboard from "./layout/LayoutDashboard";
import DashBoardPage from "./pages/DashBoardPage";
import CampaignPage from "./pages/CampaignPage";
import PaymentPage from "./pages/PaymentPage";
import WithdrawPage from "./pages/WithdrawPage";
import UnauthorizePage from "./pages/UnauthorizePage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import RequiredAuthPage from "./pages/RequiredAuthPage";
import { permissions } from "./constants/permissions";
import StartCampaignPage from "./pages/StartCampaignPage";

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
    ],
  },
]);
createRoot(container).render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
      <ToastContainer bodyClassName="font-primary text-sm"></ToastContainer>
    </RouterProvider>
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
