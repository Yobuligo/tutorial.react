// UseState Concept
// When updating / refreshing a component the component, the function is called again (e.g. function MyComponent()). It returns the component JSX again.
// A useState is used to provide dynamic components which update whenever a property changed, that is displayed within that component.
// UseState is a function (useState()) which provides a pair of variable and function to update that variable. Whenever the update function is called it triggers a rerendering of a component where the variable of the useState is used.
// When calling a useState it can be initialized, must it is not mandatory.

import { useState } from "react";

export const MyFirstUseStateComponent = () => {
  const [useStateVariable, setUseStateFunction] = useState("");

  const buttonClickHandler = () => {
    setUseStateFunction("New UseState value");
  };

  return (
    <div>
      <h1>{useStateVariable}</h1>
      <button onClick={buttonClickHandler}>Click Me</button>
    </div>
  );
};
