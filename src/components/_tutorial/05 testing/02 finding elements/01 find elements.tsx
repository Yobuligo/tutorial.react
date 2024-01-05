/**
 * To test an element, it is necessary to find it.
 * There are certain ways. All are part of the RTL (React Testing Library)
 *
 * Jest brings 3 types of methods. Each starting with a specific prefix:
 *      get - Each get expect a specific element in the rendered component. If it is not present, an error is thrown.
 *      query - Query tries to find an element in the rendered component or returns undefined if not found instead of throwing an error
 *      find - Find can be used e.g. in combination with await if e.g. a fetch is running and we have to wait for an element to appear. Its similar to "await waitFor(()=>{})"
 *
 * Next to function type like get, query, find there is a kind of data in the suffix to get specific data. Here we have:
 *      ByRole - finding by its role, which the element is connected to
 *      ByLabelText - finding by text, which is part of the paired label
 *      ByPlaceholderText - finding an element by placeholder
 *      ByText - finding an element by text
 *      ByDisplayValue - finding an element based on the current value (e.g. if an input has a value)
 *      ByAltText - finding by "alt" attribute (like for images)
 *      ByTitle - finding by "title" attribute
 *      ByTestId - finding by "data-testid" attribute
 *
 * As mentioned before, finding an element by role is the preferred variant.
 *
 * Here comes an simple example
 */

import { render, screen } from "@testing-library/react";

const Test: React.FC = () => {
  return (
    <>
      <button>My caption</button>
    </>
  );
};

test("find button", () => {
  render(<Test />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});
