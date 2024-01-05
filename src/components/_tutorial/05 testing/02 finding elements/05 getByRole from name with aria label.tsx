/**
 * Sometimes we have e.g. several buttons and the content has no text but only an icon.
 * Now it is hard to directly find one of the button.
 *
 * One possibility is to set a separate label or the name by property aria-label
 */

import { render, screen } from "@testing-library/react";

/**
 * Renders the component and set a separate label to buttons by using property "aria-label"
 */
const Test: React.FC = () => {
  return (
    <>
      <button aria-label="sign in">
        <svg />
      </button>
      <button aria-label="sign out">
        <svg />
      </button>
    </>
  );
};

test("prints code at the console", () => {
  render(<Test />);
  // Now the buttons can be retrieved via given aria-label, which is handed over to the property name of the getByRole function
  const signInButton = screen.getByRole("button", { name: /sign in/i });
  const signOutButton = screen.getByRole("button", { name: /sign out/i });
  expect(signInButton).toBeInTheDocument();
  expect(signOutButton).toBeInTheDocument();
});
