import { useSelector } from "react-redux";
import useRefreshToken from "./useRefreshToken";

export default function useAxiosPrivate() {
  const refresh = useRefreshToken();
  const [auth] = useSelector((state) => state);
}
