import axios from "../api/axios";
import { getToken } from "../utils/auth";

// hook này dùng để trả ra cái accessToken thông qua cái hàm refreshToken.
export default function useRefreshToken() {
  async function refresh() {
    const { refresh_token } = getToken();
    const response = await axios.post("/token", {
      "Content-Type": "Application/json",
      refreshToken: refresh_token,
    });
  }
  return refresh;
}
