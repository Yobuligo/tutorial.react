/**
 * The function useRef() is an alternative to useState(). It means to directly refer to an HTML element of the DOM.
 * There is no need to have an additional variable as useState which keeps a value. Instead the DOM is accessed directly.
 * It would even be possible to change the DOM. But you shouldn't do that.
 * But partially it is easier to refer directly to the HTML element instead of introducing a useState
 * I would suggest it should only be used for reading reasons
 * the useRef has to be initialized by null
 *
 *  In addition useRef can be used to save values, which should not trigger an update.
 */

import { useRef } from "react";

export const UseRefComponent: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  // access the entered value of the input directly via its reference
  const onButtonClickedHandler = () => {
    if (inputRef && inputRef.current) {
      console.log(inputRef.current.value);
    }
  };

  // If I would change toggle the component won't be rerendered
  let toggle = useRef(true);

  const onToggle = () => {
    toggle.current = !toggle.current;
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={onButtonClickedHandler}>Click Me</button>
      <button onClick={onToggle}>Toggle</button>
    </>
  );
};
