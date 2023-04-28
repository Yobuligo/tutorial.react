import { useState } from "react";

export const useToggle = (defaultValue: boolean) => {
  const [value, setValue] = useState(defaultValue);
  const toggle = (newValue?: boolean) => {
    newValue ? setValue(newValue) : setValue((previous) => !previous);
  };
  return [value, toggle];
};
