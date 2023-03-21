import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TestWithEvent } from "./02 Test with events";

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
});
