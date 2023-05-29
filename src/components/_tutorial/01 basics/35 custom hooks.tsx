/**
 * Custom Hooks are used to encapsulate code of hooks which is required for certain components
 * The function name of a custom hook must start with "use" so that React recognize the function as custom hook.
 * For each component which uses that custom hook, a new instance of the custom hook is created.
 * The location of custom hooks is normally a separate folder with name 'hooks'.
 * 
 * Custom Hooks might be:
 *  - useDataAccessObject
 *  - useLanguage
 *  - useLocalStorage
 *  - useTranslation
 * 
 * Best Practices:
 * With each call of a custom hook that returns a function, that function is recreated. Which means in case the user e.g. caches the function in an array, it is added multiple times, as it recreated.
 * To ensure it won't be recreated, the hook "useCallback" can be used.
 */

import { useEffect, useState } from "react";

const useCounter = (operation: (previous: number) => number) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCounter((previous) => {
        return operation(previous);
      });
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [operation]);

  return counter;
};

const CountUpComponent: React.FC = () => {
  const counter = useCounter((previous) => {
    return previous + 1;
  });
  return <>{counter}</>;
};

const CountDownComponent: React.FC = () => {
  const counter = useCounter((previous) => {
    return previous - 1;
  });
  return <>{counter}</>;
};

const CustomHooksComponent: React.FC = () => {
  return (
    <>
      <CountUpComponent />
      <CountDownComponent />
    </>
  );
};

export default CustomHooksComponent;
