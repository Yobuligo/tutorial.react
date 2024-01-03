/**
 * It seems that mock functions in jest a the same as in each mocking framework.
 * It catches the imported arguments and it returns how often it was called.
 *
 * A mock function can be created as follows:
 * const mock = jest.fn();
 *
 * With the assertions toHaveBeenCalled and toHaveBeenCalledWith it is possible to check
 * 1. if the callback was called
 * 2. and if the callback was called with the expected parameters
 */

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

interface IFirstname {
  firstname: string;
}

interface ITestProps {
  onClick: (person: IFirstname) => void;
}

const Test: React.FC<ITestProps> = (props) => {
  const onClick = () => {
    props.onClick({ firstname: "Stacey" });
  };
  return <button onClick={onClick}>ClickMe</button>;
};

test("callback function is called", () => {
  // Create mock function
  const mock = jest.fn();

  // Hand over mock callback function to component
  render(<Test onClick={mock} />);
  const button = screen.getByRole("button");
  userEvent.click(button);

  // check if mock function was called
  expect(mock).toHaveBeenCalled();

  // check if mock function gets the correct object
  expect(mock).toHaveBeenCalledWith({ firstname: "Stacey" });
});
