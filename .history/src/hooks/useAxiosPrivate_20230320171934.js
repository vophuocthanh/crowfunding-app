import useRefreshToken from "./useRefreshToken";

export default function useAxiosPrivate() {
  const refresh = useRefreshToken();
}
