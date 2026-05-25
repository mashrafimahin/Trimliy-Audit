// dependencies
import { useSelector, useDispatch } from "react-redux";

// data
export function useSlices(path) {
  const data = useSelector((state) => state[path]);
  const dispatch = useDispatch();
  return { data, dispatch };
}
