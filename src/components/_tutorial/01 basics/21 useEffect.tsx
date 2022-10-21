// What does useEffect means and what is it for?
// An effect is something that occurs by circumstances. E.g. when entering a value in the input value or when calling a REST service.
// It has an effect on the application on a component.
// So it provides an easier way to update a component when the circumstances change. E.g. when a value is entered within an input field the input field changed and maybe a corresponding button will be enabled or disabled.
//
// A useEffect runs always when a component is called. So it is called for the first time. In addition it is called whenever a given dependency changed.
// Dependencies must not be:
//  1. the useState setter functions or other functions like setTimer.
//  2. the global variables
//
// Why use useEffect instead of useState?
// 1. when useEffect is called you can be sure that depended variables really change and that these variables have to correct, current value
// 2. when a useState depends on 2 different conditions e.g. username and password is correct and in that case a button should be enabled
//    then (when not using the useEffect) the condition has to be implemented for both changeHandler. Whenever the username changed or the password you have to check username and password then the button is enabled or disabled.
//    In case that a third attribute had to be checked to get if a button is enabled or disabled, then the condition in the change handler of the username and password had to be extended. and so on.
//    By using a useEffect you only add the third dependency and extend the condition once. 

import { ChangeEvent, useEffect, useState } from "react";

export const UseEffectComponent: React.FC = () => {
  const [value, setValue] = useState<string>();
  // this useEffect runs only once at the beginning, when a component is created
  // It has no dependencies. As the useEffect code is only executed for the first time of a component and when a dependency changed, it runs only once
  useEffect(() => {
    // setValue triggers a rerun of this component (but as mentioned before only once at the beginning)
    setValue("Test");
  }, []);
  return <></>;
};

// the following example shows a useState which depends on changes of another useState. Only if the depended useState changes a refresh is executed
// only if the username is valid which means it is longer than 6 characters, a button is enabled
export const UseEffectDependsComponent: React.FC = () => {
  const [username, setUsername] = useState("");
  const [isUsernameValid, setIsUsernameValid] = useState(false);

  const onInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  // whenever the username changed, the useEffect is called
  // in addition the useEffect checks some conditions and sets if the username is valid
  // if it is valid or gets invalid the rerendering of the component is triggered and the depended button is disabled or enabled
  useEffect(() => {
    if (username.length > 6) {
      setIsUsernameValid(true);
    } else {
      setIsUsernameValid(false);
    }
  }, [username]);

  return (
    <>
      <input onChange={onInputChangeHandler} />
      <button disabled={!isUsernameValid}>User Valid Button</button>
    </>
  );
};
