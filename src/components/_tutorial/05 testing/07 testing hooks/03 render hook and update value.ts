/**
 * To update e.g. a useState of a hook, we can use the act function.
 */

import { renderHook } from "@testing-library/react";
import { useState } from "react";
import { act } from "react-dom/test-utils";

interface IValue<T> {
  readonly value: T;
  setValue(newValue: T): void;
}

const useValue = <T>(initialValue: T): IValue<T> => {
  const [value, setValue] = useState(initialValue);
  return { value, setValue };
};

test("render hook and update the value in act", () => {
  const { result } = renderHook(() => useValue(12));
  act(() => {
    result.current.setValue(1234);
  });
  expect(result.current.value).toBe(1234);
});
