/**
 * If we want to test a component, we may not interested in useTranslation, which might have to consider the selected language, maybe we need a local storage, etc.
 * To avoid those problems we can mock useTranslation easily.
 */

import { render, screen } from "@testing-library/react";
import { texts } from "../../09 translate texts/useTranslation3";
import { useTranslation } from "../../09 translate texts/useTranslation4";

/**
 * First create a mock for your useTranslation. The path must be the path from the test to the hook "useTranslation" (just import it to the test file and take that path).
 * Finally we creating a mock object instead. Normally we have the function "t" which can be of type jest.fn()
 */
jest.mock("../../useTranslation", () => () => ({ t: jest.fn() }));

/**
 * As I learned that ()=>{return {}} can be replaced by ()=>({}) I used it above. Anyway here comes the complete code.
 */
jest.mock("../../useTranslation", () => {
  return () => {
    return {
      t: jest.fn(),
    };
  };
});

/**
 * The component that uses useTranslation
 */
const Test: React.FC = () => {
  const { t } = useTranslation();
  return <button>{t(texts.sayHello)}</button>;
};

/**
 * And the tests, here I am not interested in the button caption, but only the button.
 * As the mock was already called above, it is already active
 */
test("renders component while using a mock for useTranslation", () => {
  render(<Test />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});
