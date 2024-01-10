/**
 * Here is a shorter example on how to render a hook and work with the result.
 */

import { renderHook } from "@testing-library/react";
import { useState } from "react";

interface IValue<T> {
  readonly value: T;
  setValue(newValue: T): void;
}

const useValue = <T>(initialValue: T): IValue<T> => {
  const [value, setValue] = useState(initialValue);
  return { value, setValue };
};

test("render hook and work with the returned value", () => {
  const { result } = renderHook(() => useValue(12));
  expect(result.current.value).toBe(12);
});
