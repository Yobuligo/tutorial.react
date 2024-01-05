/**
 * If we have to check the same behavior several times, we can create own custom matchers.
 *
 * Imagine, we have a form with 2 buttons and we have that scenario very often and also the tests.
 * To not have duplicate code, we can implement an own custom matcher.
 */

import { ByRoleMatcher, render, screen, within } from "@testing-library/react";

const Test: React.FC = () => {
  return (
    <>
      <button>Go Back</button>
      <form aria-label="form">
        <button>Submit</button>
        <button>Cancel</button>
      </form>
    </>
  );
};

// This is our custom matcher. It must return an instance of CustomMatcherResult, which has the two props pass and message.
const toContainRole = (
  container: HTMLElement,
  role: ByRoleMatcher,
  quantity: number
): jest.CustomMatcherResult => {
  const elements = within(container).queryAllByRole(role);

  if (elements.length === quantity) {
    return {
      pass: true,
      message: () => "",
    };
  }

  return {
    pass: false,
    message: () =>
      `Expect to find ${quantity} ${role} elements, but found ${elements.length}`,
  };
};

// The custom matcher has to be provided to the expect function by using method extend.
expect.extend({ toContainRole });

test("only find buttons within the form", () => {
  render(<Test />);
  const form = screen.getByRole("form");
  expect(form).toContainRole("button", 2);
});
