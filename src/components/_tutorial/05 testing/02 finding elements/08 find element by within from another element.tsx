/**
 * The method within doesn't only work with data-testid, but also with other elements.
 * So it is possible to find an element and to search for other elements within that form with the method within.
 *
 * Consider that we specify the aria-label in the form as search term.
 */

import { render, screen, within } from "@testing-library/react";

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

test("only find buttons within the form", () => {
  render(<Test />);
  const form = screen.getByRole("form");
  const buttons = within(form).getAllByRole("button");
  expect(buttons).toHaveLength(2);
});
