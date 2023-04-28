import { useState } from "react";

export const useToggle = (
  defaultValue: boolean
): [value: boolean, toggle: (newValue?: boolean) => void] => {
  const [value, setValue] = useState(defaultValue);
  const toggle = (newValue?: boolean) => {
    newValue ? setValue(newValue) : setValue((previous) => !previous);
  };
  return [value, toggle];
};
