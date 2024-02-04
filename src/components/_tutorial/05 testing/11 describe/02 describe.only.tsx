/**
 * The function describe.only can be used to only test a specific group of tests
 */

describe("the following is not executed ...", () => {
  test("first");
  test("second");
});

describe.only("... as only these tests are executed", () => {
  test("third");
  test("fourth");
});
