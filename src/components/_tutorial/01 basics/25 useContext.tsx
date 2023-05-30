// UseContext is another Hook which can be used.
// Sometimes it is necessary to provide a property for certain components or over a huge hierarchy (parent -> parent -> parent -> child).
// Instead of providing these properties to each component a useContext can be used.
// The useContext is treated like a component which means it can be embedded via JSX.
// The useContext consists of a provider that provides a context and consumer which access the context
//
// When to use Context
//  - if the context keeps stable and there is no need to adjust the code so often (e.g. when providing an AuthContext or LoginContext, is the use logged in or logged out)
//  - it shouldn't be used to replace the normal props communication (e.g. for short prop chains)
//
// The following steps describe how a useContext is implemented
//  1. Implement the context
//  2. Provide the useContext to your components. As a context can be provided via JSX, all components which are wrapped by the context can access the context. These components are consumers. They can access but must not access the context.
//  3. Consume the useContext within a component

import React, { useContext, useState } from "react";

const onEventHandler = () => {
  console.log(`Any event was called`);
};

// 1. Implementation of the context via method createContext. The default properties of the context and the structure are provided. Properties might be variables or functions.
export const AppContext = React.createContext<{
  attr: boolean;
  attr2: number;
  attr3: string;
  onEventHandler: () => void;
  onInputChangeHandler: (value: string) => void;
}>({
  attr: true,
  attr2: 123,
  attr3: "something",
  onEventHandler,
  onInputChangeHandler: (value) => {},
});

// 2. To provide the context it is embedded within the JSX by ".Provider". All components between the open and closed context tags (between <AnyContext.Provider></AnyContext.Provider>) can access the context properties.
//    In addition here is place to handle states, like here the input value which is connected to a useState. The inputValue is updated by setInputValue and can be used within other components.
export const UseContextComponentParent: React.FC = () => {
  const [, setInputValue] = useState("");

  const onInputChangeHandler = (value: string): void => {
    setInputValue(value);
  };

  return (
    <AppContext.Provider
      value={{
        attr: true,
        attr2: 123,
        attr3: "something",
        onEventHandler: () => {},
        onInputChangeHandler: onInputChangeHandler,
      }}
    >
      <UseContextComponentChild />
    </AppContext.Provider>
  );
};

// 3. to consume the context, the hook function useContext has to called and the context has to be injected to the function. Finally the context properties can be used.
//    As the states are handled at a central point in the App (or here UserContextComponentParent) the change handler onInputChangeHandler is called and delegates the update
//    of a state which would trigger an update of all components which refer to that state.
export const UseContextComponentChild: React.FC = () => {
  const context = useContext(AppContext);
  const onInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    context.onInputChangeHandler(event.target.value);
  };
  return (
    <>
      <input value={context.attr.toString()} />
      <input value={context.attr2} />
      <input value={context.attr3} onChange={onInputChangeHandler} />
      <button onClick={context.onEventHandler}>Click me</button>
    </>
  );
};
