/**
 * If we have a component that navigates to another component via react router dom,
 * we want to test that the "navigate" function is called.
 * Here comes, how we can do that
 */

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useNavigate } from "react-router-dom";

/**
 * First create a mock function that should be returned with useNavigate.
 * And this must be defined explicitly outside and not while creating the mock
 */
const mockNavigate = jest.fn();

/**
 * Now create the mock by copying all properties of the react-router-dom to the mock and override useNavigate by the mockFunction
 */
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

/**
 * Component that uses useNavigate
 */
const Test: React.FC = () => {
  const navigate = useNavigate();
  return <button onClick={() => navigate("/myUrl")}>Click Me</button>;
};

/**
 * Write test that checks if navigate works by using the mock
 */
test("clicking button navigates to /myUrl", () => {
  render(<Test />);
  const button = screen.getByRole("button");
  userEvent.click(button);

  // whenever the button was clicked, we expect that we navigate to a new URL
  expect(mockNavigate).toHaveBeenCalled();
  expect(mockNavigate).toHaveBeenCalledWith("/myUrl");
});
