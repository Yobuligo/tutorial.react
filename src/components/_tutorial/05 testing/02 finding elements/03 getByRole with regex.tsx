/**
 * It is possible to find elements by its label text and regex.
 * This requires the component to user a label and an input which are connected by htmlFor and the id prop.
 * The regex can also be used in combination with other strings, like text or value.
 */

import { render, screen } from "@testing-library/react";

const Test: React.FC = () => {
  return (
    <>
      <form>
        <label htmlFor="firstname">Firstname</label>
        <input id="firstname" type="text" value={"Hello World"} />
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

  expect(inputFirstname).toBeInTheDocument();
  expect(buttonSubmit).toBeInTheDocument();

  // Finds an input by its label and regex
  screen.getByLabelText(/firstname/i);

  // Finds an input by value and regex
  screen.getByDisplayValue(/world/i);
});
