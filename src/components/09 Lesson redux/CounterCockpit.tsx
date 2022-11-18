import { useDispatch } from "react-redux";
import { Card } from "../core/Card/Card";
import Counter from "./Counter";
import { ReduxAction } from "./store";

const CounterCockpit: React.FC = () => {
  // use function useDispatch for dispatching actions
  const dispatch = useDispatch();

  const onIncrementHandler = () => {
    dispatch({ type: ReduxAction.INCREMENT });
  };
  const onDecrementHandler = () => {
    dispatch({ type: ReduxAction.DECREMENT });
  };

  // provide the store for this and all sub components via a Provider
  return (
    <>
      <Card>
        {" "}
        <Counter />
      </Card>
      <Card>
        <button onClick={onIncrementHandler}>Increment</button>
        <button onClick={onDecrementHandler}>Decrement</button>
      </Card>
    </>
  );
};

export default CounterCockpit;
