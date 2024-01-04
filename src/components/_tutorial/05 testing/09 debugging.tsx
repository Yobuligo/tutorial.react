/**
 * It is not directly about debugging. But it is possible to print the generated code of the React component at the console by using screen.debug
 *
 * The following component would be printed at the console as:
 *     <body>
 *       <div>
 *         Hello World
 *       </div>
 *     </body>
 */

import { render, screen } from "@testing-library/react";

const Test: React.FC = () => {
  return <>Hello World</>;
};

test("prints component at the console", () => {
  render(<Test />);
  screen.debug();
});
