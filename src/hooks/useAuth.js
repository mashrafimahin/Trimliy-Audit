// dependencies
import { useSlices } from "./useSlices";

export const useAuth = () => {
  // state
  const { data } = useSlices("authControl");

  return data;
};
