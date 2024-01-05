/**
 * If data are loaded we sometimes displaying an alternative component for a short time, like a loading spinner.
 * Jest provides a function to test, if a component was there.
 *
 * In the example below we simulate to fetch data from a server. Meanwhile we set the useState "loading" to true
 * and as long as "loading" is set to true, we display "... loading"
 */

import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { useEffect, useState } from "react";

export const TestLoadingSpinner: React.FC = () => {
  const [loading, setLoading] = useState(true);

  // simulate data fetching from backend
  const loadData = () => {
    return new Promise((resolve) => {
      setLoading(true);
      setTimeout(() => {
        resolve("loaded data");
        setLoading(false);
      }, 1000);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  return <>{loading ? <>... loading</> : <>Content</>}</>;
};

describe("TestLoadingSpinner", () => {
  /**
   * To test a loading spinner, we must check if it was there any time by using waitForElementToBeRemoved.
   * We are displaying the loading spinner, which is just the text "... loading" as long as the data are loaded.
   * Later it must be replaced by the component
   */
  it("displays loading spinner", async () => {
    render(<TestLoadingSpinner />);
    await waitForElementToBeRemoved(() => screen.queryByText("... loading"));
  });
});
