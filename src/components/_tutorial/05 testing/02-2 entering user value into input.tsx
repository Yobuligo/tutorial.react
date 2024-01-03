/**
 * To simulate to enter a value to an input we need the 2 commands click and keyboard.
 * 1. we have to enter the input field
 * 2. we have to enter the letters to the input
 */

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const Test: React.FC = () => {
  return (
    <>
      <form>
        <label htmlFor="firstname">Firstname</label>
        <input id="firstname" type="text" />
      </form>
    </>
  );
};

test("User value was entered", () => {
  render(<Test />);
  // get the input
  const inputFirstname = screen.getByRole("textbox", { name: /firstname/i });

  // First enter the input by calling method click
  userEvent.click(inputFirstname);

  // Enter the following letters to the input
  userEvent.keyboard("Stacey");
});
