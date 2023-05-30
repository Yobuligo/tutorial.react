/**
 * UseCallback is another hook.
 * It is used for performance reasons.
 * As mentioned in the previous chapter "performance react memo" it is possible to reduce the evaluation effort for rerendering a component by using React.memo.
 * Anyway that only works for scalar values but not for function or objects. In case of functions and objects each time the component function is called new instances are created. And this means for the React.memo that the component changed.
 * To also memories the state of functions and objects the hook "useCallback" can be used. So the functions and objects are cached and whenever a component is called the reference of a function or object is reused instead of creating a new instance.
 * UseCallback just returns a stable reference of a function, instead of creating a new with each call.
 *
 * It should also be used, when
 *
 * Usage:
 * 1. if a component or hook depends of that function. The function is rerendered each time its own component is rerendered. In that time the depending components and hooks a rerendered. So instead use useCallback to avoid the rerendering.
 *
 * So React.memo can also be used for components with objects and functions.
 *
 * UseCallback works similar to useEffect. The function has to be provided, but also the dependencies which are leading to a change of a function
 *
 * Best Practice:
 * - When using custom hooks that contain functions, that are returned outside it seems to be a good practice to wrap these functions by useCallback. So the function reference are stable for the user.
 */

import React, { useCallback, useEffect, useState } from "react";

type MyFunction = (times: number) => number;

/**
 * This component displays items, which are returned from getItems.
 * Whenever getItems changed (here checked by the useEffect) the items are updated by calling setItems.
 *
 */
const Child: React.FC<{ getItems: MyFunction }> = (props) => {
  const [items, setItems] = useState<number>(0);

  useEffect(() => {
    setItems(props.getItems(12));
  }, [props, props.getItems]);

  return <>{items}</>;
};

/**
 * This component provides a function getItems which is used by the component Child.
 * If getItems wouldn't be wrapped by a useCallback, it would be recreated with each render call. Finally this would trigger the useEffect function in the component Child which leads to an unnecessary update.
 */
const UseCallbackComponent: React.FC = () => {
  const getItems = useCallback((times: number): number => {
    let result = 0;
    for (let i = 0; i < times; i++) {
      result += i;
    }
    return result;
  }, []);

  return <Child getItems={getItems} />;
};

export default React.memo(UseCallbackComponent);
