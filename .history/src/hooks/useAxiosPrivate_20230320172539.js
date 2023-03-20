import { useEffect } from "react";
import { useSelector } from "react-redux";
import { axiosPrivate } from "../api/axios";
import useRefreshToken from "./useRefreshToken";

export default function useAxiosPrivate() {
  const refresh = useRefreshToken();
  const [auth] = useSelector((state) => state);
  useEffect(() => {
    const requestInterceptor = axiosPrivate.interceptors.request.use(
      (config) => {},
      (error) => Promise.reject(error)
    );
  }, []);
}
