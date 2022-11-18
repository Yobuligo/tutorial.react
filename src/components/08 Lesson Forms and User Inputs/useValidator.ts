import { Reducer, useReducer } from "react";

enum ValidatorAction {
  VALUE_CHANGED,
  BLUR,
  RESET,
}

type IValidatorAction =
  | { type: ValidatorAction.BLUR }
  | { type: ValidatorAction.RESET }
  | { type: ValidatorAction.VALUE_CHANGED; value: string };

interface IState {
  value: string;
  valueTouched: boolean;
}

const validateReducer: Reducer<IState, IValidatorAction> = (
  state: IState,
  action: IValidatorAction
) => {
  const newState = { ...state };
  switch (action.type) {
    case ValidatorAction.BLUR: {
      newState.valueTouched = true;
      break;
    }
    case ValidatorAction.RESET: {
      newState.value = "";
      newState.valueTouched = false;
      break;
    }
    case ValidatorAction.VALUE_CHANGED: {
      newState.value = action.value;
      newState.valueTouched = true;
      break;
    }
  }
  return newState;
};

const useValidator = (validate: (value: string) => boolean) => {
  const [validateState, dispatchValidateState] = useReducer(validateReducer, {
    value: "",
    valueTouched: false,
  });
  // const [value, setValue] = useState("");
  // const [valueTouched, setValueTouched] = useState(false);

  const isValueValid = validate(validateState.value);

  const needsShowValueError = (): boolean => {
    if (validateState.valueTouched) {
      if (isValueValid) {
        return false;
      } else {
        return true;
      }
    }
    return false;
  };

  const onValueChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatchValidateState({
      type: ValidatorAction.VALUE_CHANGED,
      value: event.target.value,
    });
  };

  const onValueBlurHandler = () => {
    dispatchValidateState({ type: ValidatorAction.BLUR });
  };

  const reset = () => {
    dispatchValidateState({ type: ValidatorAction.RESET });
  };

  return {
    value: validateState.value,
    isValueValid,
    onValueBlurHandler,
    onValueChangeHandler,
    needsShowValueError,
    onSubmitted: reset,
  };
};

export default useValidator;
