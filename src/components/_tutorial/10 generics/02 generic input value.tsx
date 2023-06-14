/**
 * Actually an input is always of type string.
 * But it would be very nice to get the correct type of an input.
 * That can be realized by using typeof and an initialValue to get the type of an input
 */

import { useState } from "react";

namespace GenericInputValue {
  interface IInputButtonProps<T> {
    initialValue: T;
    onClick(value: T): void;
  }

  /**
   * This component is responsible for providing an input with a button.
   * Whenever the button is clicked the value of the input is injected to method "onClick" of IInputButtonProps.
   * And here I want to have a type safe value.
   *
   * This can be achieved by using an initialValue. And the basic type of a value I can get via typeof function. This basic type can be used to set the correct input type.
   * So the input cares by itself if you can enter e.g. only numbers when choosing an input of type number.
   * And more as basic values are anyway not possible for input fields. Which means handling of objects etc. wont be possible.
   */
  function InputButton<T>(props: IInputButtonProps<T>) {
    const [value, setValue] = useState(props.initialValue);
    const onClick = () => props.onClick(value);
    return (
      <>
        <input
          type={typeof props.initialValue}
          value={value as string}
          onChange={(event) => setValue(event.target.value as T)}
        />
        <button onClick={onClick}>+</button>
      </>
    );
  }

  const App: React.FC = () => {
    return (
      <>
        <InputButton
          initialValue={""}
          onClick={(value) => {
            // value is of type string, as the initial value is string
          }}
        />

        <InputButton
          initialValue={0}
          onClick={(value) => {
            // value is of type number, as the initial value is number
          }}
        />
      </>
    );
  };
}
