/**
 * A way to use useEffect is, when I want to refer to a change of a useState, which I triggered myself.
 */

import { useEffect, useState } from "react";

const UseEffectForUseStateChanges: React.FC = () => {
  const [count, setCount] = useState(0);

  // Here I want to print the changes of count. Each time count gets increased I print it at the console. But here count is not even updated
  const onIncreaseHandler = () => {
    setCount((previous) => previous + 1);
    console.log(count);
  };

  // Correct would be to use a useEffect instead. Whenever count changed I print it at the console.
  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <>
      {count}
      <button onClick={onIncreaseHandler}>Increase</button>
    </>
  );
};

export default UseEffectForUseStateChanges;
