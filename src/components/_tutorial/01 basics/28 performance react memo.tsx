// Each time a component state changed it has to be evaluated if a rerendering is required.
// If you have complex applications with many components the evaluation becomes expensive.
// Therefore it is possible to e.g. exclude a component from reevaluation or restrict the reevaluation.
// To do so a component can be exported via React.memo. This means that a component is only reevaluation if a provided property changed. If the property not changed there is no need to reevaluate it.
// Closures remember the values of variables from previous renders - this can help prevent async bugs
//
// Instead of reevaluating it, the depended properties are cached by React. In case a reevaluation is triggered, it is checked if the depended props changed. So keep in mind: this approach needs more memory!
//
// It is implemented as follows:

import React from "react";

const ReactMemoComponent: React.FC<{ enable: boolean }> = (props) => {
  return (
    <>
      <button disabled={!props.enable}>Click me</button>
    </>
  );
};

// here the component is not only exported but provided to be remembered to only get reevaluated if external properties change.
export default React.memo(ReactMemoComponent);
