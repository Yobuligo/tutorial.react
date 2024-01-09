/**
 * If we are not able to render a sub component, it is possible to mock the whole one.
 * This is possible by function jest.mock
 *
 * Attention: It is required to use the default export keywords (maybe find another solution later)
 * Here comes how it works
 */

import { render } from "@testing-library/react";

/**
 * We want to mock this component
 */
const Callee: React.FC = () => {
  return <>My content</>;
};

/**
 * This is the component under test and we want to mock component {@link Callee}.
 * Mocking means we want to replace it by another component.
 */
const Caller: React.FC = () => {
  return <Callee />;
};

/**
 * To mock the component {@link Callee}, we have to use the function jest.mock.
 * It requires two parameters.
 * 1. the path to the component that should be mocked. The path must be the path of the component from point of this test case.
 * 2. a function that returns an alternative component, which should be rendered instead
 */
jest.mock("./Callee", () => {
  return () => {
    return <>Alternative component, that is rendered instead of the origin.</>;
  };
});

test("this test will not render component callee, but the alternative instead", () => {
  // As we defined before jest.mock, Caller is rendered without rendering component Callee.
  render(<Caller />);
});
