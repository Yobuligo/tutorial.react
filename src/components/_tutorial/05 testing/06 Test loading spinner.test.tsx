import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { TestLoadingSpinner } from "./06 Test loading spinner";

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
