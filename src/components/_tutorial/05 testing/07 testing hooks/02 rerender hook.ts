/**
 * There are hooks which behave differently depending on the number of amounts they are called.
 * To test both behaviors the function rerender can be used.
 */

import { renderHook } from "@testing-library/react";
import { useState } from "react";

/**
 * This hook is called calls {@link block} only once at the first time.
 * So it behaves differently at the first call and at each further call.
 */
const useInitialize = (block: () => void) => {
  const [needsInit, setNeedsInit] = useState(true);

  if (needsInit) {
    setNeedsInit(false);
    block();
  }
};

/**
 * A test might be look as follows by using render hook
 */
test("calls block at the first time", () => {
  let count = 0;

  // whenever useInitialize is called, variable count is increased by 1.
  renderHook(() => useInitialize(() => count++));
  expect(count).toBe(1);
});

/**
 * Here comes the second test, which needs to rerender the hook.
 * Therefore function "renderHook" returns a function "rerender".
 */
test("doesn't call block at the second time", () => {
  let count = 0;
  const { rerender } = renderHook(() => useInitialize(() => count++));
  rerender();
  expect(count).toBe(1);
});
