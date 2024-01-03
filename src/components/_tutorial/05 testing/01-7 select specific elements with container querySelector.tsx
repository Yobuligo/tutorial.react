/**
 * In the previous example we used "within" after defining an data-testid.
 * The disadvantage is, that we had to adjust the productive code.
 *
 * To avoid it, we can select the data more specific by using the querySelector of the "container".
 * The "container" is an object that is returned from the renderer method.
 * Here we can call method "querySelector" or "querySelectorAll". The importing parameter just needs plane css selector code.
 * So we can e.g. write the element name like "tbody" or in combination with child elements like "tbody tr"
 *
 * Hint: RTL (React Testing Library) may ask you to not use that function. But if there is no other way, it is fine to use it. So ignore that warning
 * - the warning can be omitted by using the following comment
 * // eslint-disable-next-line
 */

import { render } from "@testing-library/react";

const Test: React.FC = () => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Firstname</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Stacey</th>
          </tr>
          <tr>
            <th>Bertha</th>
          </tr>
        </tbody>
      </table>
    </>
  );
};

test("gets only the table data rows", () => {
  const { container } = render(<Test />);

  const rows = container.querySelectorAll("tbody tr");
  expect(rows).toHaveLength(2);
});
