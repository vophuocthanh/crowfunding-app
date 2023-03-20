import axios from "../api/axios";
import { authUpdateUser } from "../store/auth/auth-slice";
import { getToken } from "../utils/auth";

// hook này dùng để trả ra cái accessToken thông qua cái hàm refreshToken.
export default function useRefreshToken() {
  async function refresh() {
    const { refresh_token } = getToken();
    const response = await axios.post("/token", {
      "Content-Type": "Application/json",
      refreshToken: refresh_token,
    });
    if (response.data) {
      authUpdateUser((prev) => ({
        ...prev,
        accessToken: response.data.accessToken,
      }));
    }
  }
  return refresh;
}
