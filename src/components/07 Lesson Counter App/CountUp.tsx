import { Card } from "../core/Card/Card";
import useCounter from "./useCounter";

const CountUp: React.FC = () => {
  const counter = useCounter((previous) => {
    return previous + 1;
  });
  return <Card>{counter}</Card>;
};

export default CountUp;
