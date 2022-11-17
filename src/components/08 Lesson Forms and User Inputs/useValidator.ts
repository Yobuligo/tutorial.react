import { useState } from "react";

const useValidator = (validate: (value: string) => boolean) => {
  const [value, setValue] = useState("");
  const [valueTouched, setValueTouched] = useState(false);

  const isValueValid = validate(value);

  const needsShowValueError = (): boolean => {
    if (valueTouched) {
      if (isValueValid) {
        return false;
      } else {
        return true;
      }
    }
    return false;
  };

  const onValueChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    setValueTouched(true);
  };

  const onValueBlurHandler = () => {
    setValueTouched(true);
  };

  const reset = () => {
    setValue("");
    setValueTouched(false);
  };

  return {
    value,
    isValueValid,
    onValueBlurHandler,
    onValueChangeHandler,
    needsShowValueError,
    onSubmitted: reset
  };
};

export default useValidator;
