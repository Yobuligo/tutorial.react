/**
 * Testing a hook is possible by function renderHook of jest.
 * To update a hook e.g. when calling a function, we can call function act
 *
 * 1. The function renderHook returns an object, which has e.g. a result property, which can be accessed via destructuring
 *
 * 2. In the example below we a setter (setValue) is returned, which effects a useState, so finally which should change the "value" property.
 * As "value" is not immediately changed, we can use function "act" to trigger a round trip
 *
 * 3. If the hook doesn't not provide any parameter, but anyway we want to trigger a rerendering, we can use function rerender, which is returned by renderHook
 */

import { act, renderHook } from "@testing-library/react";
import { useInitialize, useValue } from "./01 Test simple hook";

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

describe("useInitialize", () => {
  it("calls block for the first time", () => {
    let count = 0;
    renderHook(() => useInitialize(() => count++));
    expect(count).toBe(1);
  });

  /**
   * Here we simulate a round trip by calling "rerender". Variable count must still be 1, as useInitialize is only called once.
   */
  it("calls block only once", () => {
    let count = 0;
    const { rerender } = renderHook(() => useInitialize(() => count++));
    rerender();
    expect(count).toBe(1);
  });
});
