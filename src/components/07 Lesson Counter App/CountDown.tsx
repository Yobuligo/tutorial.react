import { Card } from "../core/Card/Card";
import useCounter from "./useCounter";

const CountDown: React.FC = () => {
  const counter = useCounter((previous) => {
    return previous - 1;
  });
  return <Card>{counter}</Card>;
};

export default CountDown;
