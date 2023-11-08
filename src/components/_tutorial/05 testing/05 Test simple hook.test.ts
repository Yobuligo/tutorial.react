/**
 * Testing a hook is possible by function renderHook of jest.
 * To update a hook e.g. when calling a function, we can call function act
 *
 * The function renderHook returns an object, which has e.g. a result property, which can be accessed via destructuring
 * 
 * To rerender a hook the function act can be used. Here we are calling the setter (setValue) at the result, which was returned from renderHook
 */

import { act, renderHook } from "@testing-library/react";
import { useValue } from "./05 Test simple hook";

describe("useValue", () => {
  it("returns object with value", () => {
    const { result } = renderHook(() => useValue("my value"));
    expect(result.current.value).toBe("my value");
  });

  it("returns setter for updating the value", () => {
    const { result } = renderHook(() => useValue("my value"));
    act(() => {
      result.current.setValue("updated value");
    });
    expect(result.current.value).toBe("updated value");
  });
});
