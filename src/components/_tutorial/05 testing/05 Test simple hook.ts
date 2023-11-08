/**
 * Here is an example for a simple hook to test
 */

import { useState } from "react";

interface IValue<T> {
  readonly value: T;
  setValue: (newValue: T) => void;
}

/**
 * This component simply transfers a use state from tuple to an object.
 */
export const useValue = <T>(initialValue: T): IValue<T> => {
  const [value, setValue] = useState<T>(initialValue);
  return { value, setValue };
};
