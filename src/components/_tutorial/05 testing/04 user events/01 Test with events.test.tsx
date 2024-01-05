/**
 * The following test example shows how to trigger an event
 * Here a text is printed and whenever the button was clicked, the text is changed.
 */

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";

export const TestWithEvent: React.FC = () => {
  const [text, setText] = useState("Default");
  return (
    <>
      {text}
      <button onClick={() => setText("Changed text")}>Click Me</button>
    </>
  );
};

describe("TestWithEvent", () => {
  test("prints a default text if the button wasn't clicked", () => {
    render(<TestWithEvent />);
    const expected = screen.getByText("Default");
    expect(expected).toBeInTheDocument();
  });

  test("prints a separate text, if the button was clicked", () => {
    render(<TestWithEvent />);
    // Get the button by its role *button* and trigger an event
    const button = screen.getByRole("button");
    userEvent.click(button);

    // check the text
    const expected = screen.getByText("Changed text");
    expect(expected).toBeInTheDocument();
  });

  test("prints not default, if the button was clicked", () => {
    render(<TestWithEvent />);
    const button = screen.getByRole("button");
    userEvent.click(button);
    const expected = screen.queryByText("Default");
    expect(expected).toBeNull();
  });
});
