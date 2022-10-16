// To set a style e.g. a color, margin, padding etc. CSS can be used.
// But partially it is required to set a style depending on a condition.
// Therefor a short conditional syntax can be used as inline style.

import { useState } from "react";

export const ConditionalStyleInlineComponent: React.FC = () => {
  const [value, setValue] = useState("");
  const [isValidValue, setIsValidValue] = useState(true);

  return (
    // Here the headline is printed red if the entered value is not valid (in case it is blank), otherwise the headline is printed black
    <div>
      <h1 style={{ color: !isValidValue ? "red" : "black" }}>
        Printing h1 depending on the input field value
      </h1>
      <input
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          if (value.length === 0) {
            setIsValidValue(true);
          } else {
            setIsValidValue(false);
          }
        }}
      />
    </div>
  );
};
