import { render, screen } from "@testing-library/react";
import { TestAsync } from "./03 Test async";

describe("TestAsync", () => {
  test("does not render elements directly", () => {
    render(<TestAsync />);
    const listItems = screen.queryAllByRole("listitem");
    expect(listItems).toHaveLength(0);
  });

  test("does render elements asynchronously", async () => {
    render(<TestAsync />);
    const listItems = await screen.findAllByRole("listitem");
    expect(listItems).toHaveLength(2);
  });  
});
