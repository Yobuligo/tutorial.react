/**
 * If we want to test a component without the used hook, we can use the jest.mock function (see mocking of components).
 *
 * Attention: It is required to use the default export keywords (maybe find another solution later)
 */

import { render, screen } from "@testing-library/react";
import { useState } from "react";

interface IValue<T> {
  readonly value: T;
  setValue(newValue: T): void;
}

/**
 * The hook we want to mock
 */
function useTest<T>(initialValue: T): IValue<T> {
  const [value, setValue] = useState(initialValue);
  return { value, setValue };
}

/**
 * The component we want to test. But we want to exclude the "useTest" hook from testing by mocking it.
 */
const Test: React.FC = () => {
  const age = useTest(0);
  return <>{age}</>;
};

/**
 * Therefore we have to create a mock function for the hook by calling jest.mock. This requires 2 parameters:
 * 1. the path of the hook. But here it must be the path of the hook from point of the test case (so do it, by importing the hook once and copy the path). Still attention, the hook must be a "default import"
 * 2. Provide an alternative implementation of the hook. That must be a function that returns the content of the hook.
 */
jest.mock("./useTest", () => {
  return (): IValue<any> => {
    return { value: 28, setValue: () => {} };
  };
});

/**
 * Write the test. The mock is directly active
 */
test("component Test must return age of 28", () => {
  render(<Test />);
  const element = screen.getByText(28);
  expect(element).toBeInTheDocument();
});
