/**
 * If we have a component A which contains of a sub component B and these is calling a react router dom function, like Link or whatever,
 * we will get an error, if we test A, as A cannot be rendered sufficiently in a test, as we have no react routing.
 *
 * To test this component anyway, there is the possibility to wrap the component under test by a MemoryRouter.
 */

import { render } from "@testing-library/react";
import { Link, MemoryRouter } from "react-router-dom";

/**
 * This component cannot be tested without mocking react router dom, as it displays a component "Link",
 * which required the react router dom framework
 */
const Test: React.FC<{ path: string }> = (props) => {
  return <Link to={`/${props.path}`} />;
};

test("mock react router dom by memory router", () => {
  // The component under test has to be wrapped by MemoryRouter
  render(
    <MemoryRouter>
      <Test path="/" />
    </MemoryRouter>
  );
});
