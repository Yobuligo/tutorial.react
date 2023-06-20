/**
 * The following custom hook can be used to handle data which are stored in the local storage
 */

import { useCallback, useState } from "react";
import { readLocalStorage } from "../11 utils/readLocalStorage";
import { writeLocalStorage } from "../11 utils/writeLocalStorage";

export const useLocalStorage = <T>(
  key: string,
  fallbackValue: T
): [value: T, updateValue: (newValue: T) => void] => {
  const [value, setValue] = useState<T>(
    readLocalStorage(key) ?? writeLocalStorage(key, fallbackValue)
  );

  const updateValue = useCallback(
    (data: T) => {
      setValue(data);
      writeLocalStorage(key, data);
    },
    [key]
  );
  return [value, updateValue];
};
