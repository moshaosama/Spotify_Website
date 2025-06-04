import { useDispatch } from "react-redux";
import { fetchGoogleAuth } from "../Actions/GoogleAuth";
import type { AppDispatch } from "../../../Store/store";

const useGoogleAuth = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = () => {
    dispatch(fetchGoogleAuth());
  };

  return { handleClick };
};

export default useGoogleAuth;
