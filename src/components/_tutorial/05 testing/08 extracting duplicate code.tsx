/**
 * If we have to initialize the same component in several test cases, which maybe even requires some value,
 * we should extract the code in a separate function.
 *
 * Actually it would be possible to use beforeEach. But this is not recommended from the RTL (React Testing Library).
 * So instead provide separate functions to extract the code
 */

import { render } from "@testing-library/react";

const Test: React.FC<{ persons: { firstname: string }[] }> = (props) => {
  return <></>;
};

const renderComponent = () => {
  const persons = [{ firstname: "Stacey" }, { firstname: "Bertha" }];
  render(<Test persons={persons} />);
  return { persons };
};

test("first test", () => {
  const { persons } = renderComponent();
});

test("second test", () => {
  const { persons } = renderComponent();
});
