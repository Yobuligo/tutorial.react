/**
 * Here a better variant of the useLocalStorage hook.
 * It provides an update function which can be used like the set function of the useState hook.
 * This means you can either directly set a value or you can provide an arrow function which gets the current value as parameter.
 * Often this is required, e.g. when having a toggle and you just want to negate the last value.
 * Of course you can persist the value somewhere and negate that value, but in same cases, the value was already changed at another point.
 *
 * In addition we check if the new value is undefined. Undefined is no valid local storage value. For us this means to delete the local storage entry.
 */

import { useState } from "react";
import { deleteLocalStorage } from "../11 utils/deleteLocalStorage";
import { readLocalStorage } from "../11 utils/readLocalStorage";
import { writeLocalStorage } from "../11 utils/writeLocalStorage";

export const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [value: T, setValue: (newValue: T | ((previous: T) => T)) => void] => {
  const [value, setValue] = useState<T>(readLocalStorage(key) ?? initialValue);

  const updateLocalStorage = (key: string, value: any) => {
    if (!value) {
      deleteLocalStorage(key);
    } else {
      writeLocalStorage(key, value);
    }
  };

  const updateValue = (newValue: T | ((previous: T) => T)) => {
    setValue((previous) => {
      if (typeof newValue === "function") {
        previous = (newValue as (previous: T) => T)(previous);
        updateLocalStorage(key, previous);
        return previous;
      } else {
        updateLocalStorage(key, newValue);
        return newValue;
      }
    });
  };

  return [value, updateValue];
};
