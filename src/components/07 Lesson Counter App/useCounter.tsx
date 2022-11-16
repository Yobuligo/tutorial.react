import { useEffect, useState } from "react";

const useCounter = (operation: (previous: number) => number) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCounter((previous) => {
        return operation(previous);
      });
    }, 1000);
  }, [operation]);

  return counter;
};

export default useCounter;
