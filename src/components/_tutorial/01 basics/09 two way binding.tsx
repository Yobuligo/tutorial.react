// 2 Way binding Concept
// 2 Way binding in useState means to not only to update the state when calling the set* method,
// but it also means that when the state value changed the bind component / prop updates.
// E.g. when a value is entered in an input the useState should be updated.
// And also when the useState changed outside the input the input value should be updated.
//
// Example:
// lets assume there is a useState that represents an input value e.g. "firstname"
// whenever the input value changed the useState should be updated to get the current entered value
// There is also another button. Whenever that button is clicked the input value should be cleared.
// It seems it would be enough to call setFirstname(""). But in that case the useState would be updated, but the input still keeps the entered value.
// Instead the useState variable had to bind to the input value

import { useState } from "react";

export const TwoWayBindingComponent = () => {
  const [firstname, setFirstname] = useState("Initial Value");

  // required to update the variable firstname, to always have the entered value of the input in that variable.
  const valueChangedHandler = (event: any) => {
    setFirstname(event.target.value);
  };

  const onClearInputHandler = () => {
    // clear the useState, but that would not work if the inputs property 'value' would not be bind to the variable 'firstname'. In that case the entered value would stay in the input.
    setFirstname("");
  };

  return (
    // to bind the variable 'firstname' to the input is required to update it whenever the 'firstname' is cleared by 'setFirstname'
    <div>
      <input type="number" value={firstname} onChange={valueChangedHandler} />
      <button onClick={onClearInputHandler}>Clear input</button>
    </div>
  );
};
