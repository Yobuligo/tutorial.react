import { useState } from "react";

/**
 * The setter of a useState can also be called as a function and sometimes it should be. Especially when referring to the current value of the useState.
 * The function gets the current value which might differs from the local variable of the useState.
 * To provide consistency refer to that value
 * See the example below.
 */

const UseStateSetAsFunction: React.FC = () => {
  const [count, setCount] = useState(0);

  const onIncreaseHandle = () => {
    // by calling setCount twice and trying to add 1 to count the result wont be 2 (when starting at 0).
    // Instead it will be one. Because the first setCount(count + 1) will not change count. It still stays 0, as the useState variables are only updated after the rerendering.
    setCount(count + 1);
    setCount(count + 1);

    // so instead use the possibility to set the value by function -> now the result would be 2
    setCount((value) => value + 1);
    setCount((value) => value + 1);
  };
  return (
    <>
      {count}
      <button onClick={onIncreaseHandle}>Increase</button>
    </>
  );
};

export default UseStateSetAsFunction;
