/**
 * Sometimes it is hard to find the correct element that should be tested.
 * E.g. if there are several elements of the same type.
 * To restrict the elements we can use the method within combined with a "data-testid" property.
 *
 * In the example below, we only want to get the rows which contain the data, but not the headline "Firstname".
 * As both, data rows and headline row, can be selected via role type "row", we have to restrict the data.
 * And that can be done be the data-testid and the within method.
 *
 * The within method is required the define an area which should be crawled for finding the elements.
 */

import { render, screen, within } from "@testing-library/react";

const Test: React.FC = () => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Firstname</th>
          </tr>
        </thead>
        <tbody data-testid="users">
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
  render(<Test />);

  // Here we use the function within to define a smaller scope which should be searched.
  // Previously we defined that are by property "data-testid" with value "users".
  const rows = within(screen.getByTestId("users")).getAllByRole("row");
  expect(rows).toHaveLength(2);
});
