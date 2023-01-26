// Sometimes it is necessary to inject a value inside a custom hook dynamically and during runtime.
// As a hook is created and has no methods to inject a value it is required to expose a function when creating the cook.
// This function can be used to change the content inside an already created hook.

import { useEffect, useState } from "react";

// The following shows a possibility to provide a value to a custom hook dynamically via function which is exposed.
const useCustomHook = () => {
  const [, setValue] = useState("");

  // this function is used to update the useState "value"
  // When the function is called in gets an alternative value injected.
  const callbackFunction = (newValue: string) => {
    setValue(newValue);
  };

  // to have the possibility to call the callbackFunction from outside it is exposed as returning parameter.
  return callbackFunction;
};

// Here is an example how to listen to the clicked keys on the keyboard.
// A custom hook is created which takes as many characters as possible as soon the time between one to another key pressed is not longer as 300 ms
// Finally it creates a combined chain.
// The pressed keys are injected via a callback function which is exposed.
const useCombinator = (
  chainCompletedHandler: (chainedValue: string) => void
) => {
  const [chainedValue, setChainedValue] = useState("");

  // The following useEffect is required to reset the chain in case no key was pressed within 300ms
  useEffect(() => {
    // If 300 ms are over the chainedValue is reset. Also the provided handler is informed about the so far entered chain
    setTimeout(() => {
      if (chainedValue !== "") {
        chainCompletedHandler(chainedValue);
        setChainedValue("");
      }
    }, 300);
  }, [chainCompletedHandler, chainedValue]);

  // the keyInjector function is declared. Which takes a parameter key. Whenever it is called it combines the current chainedValue with the provided key
  const keyInjector = (key: string) => {
    setChainedValue((currentChainedValue) => {
      return currentChainedValue + key;
    });
  };

  // the keyInjector is provided, so that it is possible to provide dynamically a new content (a key) to this custom hook. In addition the current chainedValue is returned.
  return { keyInjector, chainedValue };
};

const CustomHookWithDynamicInjectionComponent: React.FC = () => {
  // create an "instance" of the useCombinator. Whenever a chain is completed, the chain is printed to the console
  const { keyInjector, chainedValue } = useCombinator((chainedValue) => {
    console.log(chainedValue);
  });

  // The following code is required to register on a keyPressed event. Whenever a key is pressed within the application it is noticed and caught.
  useEffect(() => {
    // This event handler is called whenever a key is pressed. The event handler itself calls the keyInjector function of the useCombinator hook to update it.
    const onKeyPressed = (keyBoardEvent: KeyboardEvent) => {
      keyInjector(keyBoardEvent.key);
    };
    document.addEventListener("keydown", onKeyPressed, true);

    // To not have more than one event handler onKeyPressed, the onKeyPressed event handler must be unregistered when the component is destructed and probably recreated.
    // This is possible via callback function which is provided as return parameter of a useEffect. Whenever the useEffect gets destructed this method is called.
    return () => {
      document.removeEventListener("keydown", onKeyPressed, true);
    };
  }, [keyInjector]);

  // In addition the current chained value is printed as text
  return <>{chainedValue}</>;
};

export default CustomHookWithDynamicInjectionComponent;
