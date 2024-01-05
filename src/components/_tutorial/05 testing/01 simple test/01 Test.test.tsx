import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { TestWelcome } from "./01 Test";

describe("TestWelcome", () => {
  test("prints welcome", () => {
    render(<TestWelcome />);
    const element = screen.getByText("Welcome");
    expect(element).toBeInTheDocument();
  });

  test("prints hello world", () => {
    render(<TestWelcome />);
    const element = screen.getByText("Hello World", { exact: false });
    expect(element).toBeInTheDocument();
  });
});
