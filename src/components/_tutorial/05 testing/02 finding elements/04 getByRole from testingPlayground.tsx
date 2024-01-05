/**
 * If it is hard to find the element which should be tested, the testing playground can be used.
 * Therefor we have to extend the code to generate and URL for the testing playground.
 * That URL can be copied and called within the browser.
 * Within the browser the component is displayed. And here we can select the element, that should be tested.
 * After selecting the element, the code is generated which should be used for getting the element.
 * HINT: if eslint or another code checking tool is active, it might be happen that the command logTestingPlaygroundURL is underlined. That is just a warning.
 *
 * Attention: Sometimes it is hard to click the exact element. Here it makes sense to add some styling information, directly in the code, which is displayed in the browser.
 * like style="border: 10px solid red; display: block;"
 */

import { render, screen } from "@testing-library/react";

const Test: React.FC = () => {
  return <></>;
};

test("Generate testing playground link", () => {
  render(<Test />);

  // now an URL is generated, of the component that can be copied
  screen.logTestingPlaygroundURL();
});
