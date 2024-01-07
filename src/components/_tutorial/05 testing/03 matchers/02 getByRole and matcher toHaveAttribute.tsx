/**
 * If we want to test, if an element has a specific property, we can do it like this
 */

import { render, screen } from "@testing-library/react";

/**
 * This component has an element <a> with property href
 */
const Test: React.FC = () => {
  return <a href="/api/Test">Test</a>;
};

test("link contains href", () => {
  render(<Test />);
  const link = screen.getByRole("link");
  expect(link).toHaveAttribute("href", "/api/Test");
});
