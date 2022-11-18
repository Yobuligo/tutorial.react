import { useSelector } from "react-redux";
import { IReduxState } from "./store";

const Counter: React.FC = () => {
  // gets the state from the redux store
  const counter = useSelector<IReduxState>((state) => {
    return state.counter;
  });
  return <>{counter}</>;
};

export default Counter;
