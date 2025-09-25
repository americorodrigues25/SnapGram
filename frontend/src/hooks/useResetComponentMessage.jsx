// redux
import { useDispatch } from "react-redux";
import { resetMessage } from "../slices/photoSlice";

export const useResetComponentMessage = () => {
  const dispatch = useDispatch();

  return () => {
    setTimeout(() => {
      dispatch(resetMessage());
    }, 2000);
  };
};
