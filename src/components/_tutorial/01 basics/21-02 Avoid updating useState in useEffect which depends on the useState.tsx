import { useEffect, useState } from "react";

const UpdateUseStateInUseEffect: React.FC = () => {
  const [number, setNumber] = useState(0);

  // The following useEffect causes problems, as the number is set as dependency.
  // And the number is changed within the setInterval.
  // So the number is changed within setInterval, the useEffect is called and spawns.
  useEffect(() => {
    setInterval(() => {
      setNumber(number + 1);
    }, 1000);
  }, [number]);

  // To avoid setting the dependency as useEffect only use function setNumber.
  // This means the useEffect is called only once at the beginning of the application and whenever the setInterval is finished it calls the code, but the useEffect wont be recalled.
  useEffect(() => {
    setInterval(() => {
      setNumber((previous) => previous + 1);
    }, 1000);
  }, []);

  return <>{number}</>;
};
