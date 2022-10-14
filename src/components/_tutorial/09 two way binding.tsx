// 2 Way binding Concept
// 2 Way binding in useState means to not only to update the state when calling the set* method,
// but it also means that when the state value changed the bind component / prop updates.
// E.g. when a value is entered in an input the useState should be updated.
// And also when the useState changed outside the input the input value should be updated. This is called two way binding.

import { useState } from "react";

export const TwoWayBindingComponent = () => {
  const [value, setValue] = useState("Initial Value");

  const valueChangedHandler = (event: any) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <input type="number" value={value} onChange={valueChangedHandler} />
    </div>
  );
};
