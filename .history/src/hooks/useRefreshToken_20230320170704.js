import { getToken } from "../utils/auth";

// hook này dùng để trả ra cái accessToken thông qua cái hàm refreshToken.
export default function useRefreshToken() {
  function refresh() {
    const { refresh_token } = getToken();
  }
  return refresh;
}
