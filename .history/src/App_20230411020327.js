import React, { useEffect } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { authRefreshToken, authUpdateUser } from "./store/auth/auth-slice";
import { getToken, logOut } from "./utils/auth";

Modal.setAppElement("#root");
Modal.defaultStyles = {};
function App() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user && user.id) {
      const { access_token } = getToken();
      dispatch(
        authUpdateUser({
          user: user,
          accessToken: access_token,
        })
      );
    } else {
      const { refresh_token } = getToken();
      if (refresh_token) {
        dispatch(authRefreshToken(refresh_token));
      } else {
        dispatch(authUpdateUser({}));
        logOut();
      }
    }
  }, [dispatch, user]);
  return (
    <>
      {/* <Suspense>
        <Routes>
          <Route element={<LayoutDashboard></LayoutDashboard>}>
            <Route path="/" element={<DashBoardPage></DashBoardPage>}></Route>
            <Route
              path="/unauthorize"
              element={<UnauthorizePage></UnauthorizePage>}
            ></Route>
            <Route
              path="/withdraw"
              element={<WithdrawPage></WithdrawPage>}
            ></Route>
            <Route
              path="/payment"
              element={<PaymentPage></PaymentPage>}
            ></Route>
            <Route
              path="/campaign"
              element={<CampaignPage></CampaignPage>}
            ></Route>
            <Route
              element={
                <RequiredAuthPage
                  allowPermissions={[permissions.campaign.CREATE_CAMPAIGN]}
                ></RequiredAuthPage>
              }
            >
              <Route
                path="/start-campaign"
                element={<StartCampaignPage></StartCampaignPage>}
              ></Route>
            </Route>
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
          <Route path="/login" element={<SignInPage></SignInPage>}></Route>
        </Routes>
      </Suspense> */}
    </>
  );
}

export default App;
