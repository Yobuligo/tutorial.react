// Each time a component state changed it has to be calculated if a rerendering is required.
// If you have complex applications with many components the calculation becomes expensive.
// Therefore it is possible to e.g. exclude a component from recalculation or restrict the recalculation.
// To do so a component can be exported via React.memo. This means that a component is only recalculation if a provided property changed. If the property not changed there is no need to recalculate it.
//
// Instead of recalculating it, the depended properties are cached by React. In case a recalculation is triggered, it is checked if the depended props changed. So keep in mind: this approach needs more memory!
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

// here the component is not only exported but provided to be remembered to only get recalculated if external properties change.
export default React.memo(ReactMemoComponent);
