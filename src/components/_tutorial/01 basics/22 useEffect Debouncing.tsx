// Bouncing means to hit, to collide (aufprallen)
// Debouncing to avoid a bouncing.
// Image an input field to enter a username. Whenever the content changed a REST call is send to check if the entered user is valid.
// It would be pretty expensive to send the call for each entered letter. Instead it make sense to send it only if e.g. a certain time (e.g. 500 ms) past.
// Therefore a timeout can be used. Whenever a value is entered to an input field the timer is set. Whenever a key is pressed within 500 ms (e.g. 300ms) the timer is cleared, reset.
// That means the timer starts from the beginning. But only if the timer ends the REST call is executed. That is debouncing and avoid unnecessary traffic and UI-refreshes

import { ChangeEvent, useEffect, useState } from "react";

// here a button should be updated depending on the value within an input field. Whenever the value is longer than 6 characters the button is enabled.
// but the update rendering only takes place if the user stops typing for longer than 500 ms
export const UseEffectDebouncingComponent: React.FC = () => {
  const [value, setValue] = useState("");
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      // this code only runs if the timer is up
      // in that case it checks if the length of a value is greater or smaller than 6. Depended from that value it is decided if the button is enabled or disabled
      if (value.length > 6) {
        setDisable(false);
      } else {
        setDisable(true);
      }
    }, 500);

    // the useEffect function (the higher order function) can return a function. That function is called whenever a component is destructed.
    // Here it means whenever a component is destructed the timer will be reset. This ensures that only as long as the component is NOT destructed and the 500 ms are passed the setDisable function is called.
    return () => {
      clearTimeout(timeout);
    };
  }, [value]);

  const onInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <>
      <input onChange={onInputChangeHandler} />
      <button disabled={disable}>Click Me</button>
    </>
  );
};
