// UseContext is another Hook which can be used.
// Sometimes it is necessary to provide a property for certain components or over a huge hierarchy (parent -> parent -> parent -> child).
// Instead of providing these properties to each component a useContext can be used.
// The useContext is treated like a component which means it can be embedded via JSX.
// The useContext consists of a provider that provides a context and consumer which access the context
//
// The following steps describe how a useContext is implemented
//  1. Implement the context
//  2. Provide the useContext to your components. As a context can be provided via JSX, all components which are wrapped by the context can access the context. These components are consumers. They can access but must not access the context.
//  3. Consume the useContext within a component

import React, { useContext } from "react";

const onEventHandler = () => {
  console.log(`Any event was called`);
};

// 1. Implementation of the context via method createContext. The default properties of the context and the structure are provided. Properties might be variables or functions.
export const AnyContext = React.createContext({
  attr: true,
  attr2: 123,
  attr3: "something",
  onEventHandler,
});

// 2. To provide the context it is embedded within the JSX by ".Provider". All components between the open and closed context tags (between <AnyContext.Provider></AnyContext.Provider>) can access the context properties.
export const UseContextComponentParent: React.FC = () => {
  return (
    <AnyContext.Provider
      value={{
        attr: true,
        attr2: 123,
        attr3: "something",
        onEventHandler: () => {},
      }}
    >
      <UseContextComponentChild />
    </AnyContext.Provider>
  );
};

// 3. to consume the context, the hook function useContext has to called and the context has to be injected to the function. Finally the context properties can be used.
export const UseContextComponentChild: React.FC = () => {
  const ctx = useContext(AnyContext);
  return (
    <>
      <input value={ctx.attr.toString()} />
      <input value={ctx.attr2} />
      <input value={ctx.attr3} />
      <button onClick={ctx.onEventHandler}>Click me</button>
    </>
  );
};
