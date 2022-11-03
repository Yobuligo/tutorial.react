// UseCallback is another hook.
// It is used for performance reasons.
// As mentioned in the previous chapter "performance react memo" it is possible to reduce the evaluation effort for rerendering a component by using React.memo.
// Anyway that only works for scalar values but not for function or objects. In case of functions and objects each time the component function is called new instances are created. And this means for the React.memo that the component changed.
// To also memories the state of functions and objects the hook "useCallback" can be used. So the functions and objects are cached and whenever a component is called the reference of a function or object is reused instead of creating a new instance.
// So React.memo can also be used for components with objects and functions.
//
// UseCallback works similar to useEffect. The function has to be provided, but also the dependencies which are leading to a change of a function

import React, { useCallback } from "react";

const UseCallbackComponent: React.FC = () => {
  const onClickHandler = useCallback(() => {
    console.log(`Button was clicked`);
  }, []);
  return (
    <>
      <button onClick={onClickHandler}>Click Me</button>
    </>
  );
};

export default React.memo(UseCallbackComponent);
