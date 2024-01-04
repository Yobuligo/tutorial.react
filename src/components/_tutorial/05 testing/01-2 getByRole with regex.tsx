/**
 * It is possible to find elements by its label text and regex.
 * This requires the component to user a label and an input which are connected by htmlFor and the id prop.
 */

import { render, screen } from "@testing-library/react";

const Test: React.FC = () => {
  return (
    <>
      <form>
        <label htmlFor="firstname">Firstname</label>
        <input id="firstname" type="text" />
      </form>
      <button>Submit</button>
    </>
  );
};

test("User value was entered", () => {
  render(<Test />);

  // Finds the input with label "Firstname". The "i" means that the search is not case sensitive
  const inputFirstname = screen.getByRole("textbox", { name: /firstname/i });

  // Finds the button with caption "Submit".
  const buttonSubmit = screen.getByRole("button", { name: /submit/i });
});
