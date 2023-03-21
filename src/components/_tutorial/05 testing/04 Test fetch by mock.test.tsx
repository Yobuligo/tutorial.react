import { render, screen } from "@testing-library/react";
import { TestFetchByMock } from "./04 Test fetch by mock";

describe("TestFetchByMock", () => {
  test("renders persons asynchronously", async () => {
    // mock the fetch function by a jest function
    window.fetch = jest.fn();
    
    // The mockResolvedValueOnce is set by jest
    (window.fetch as any).mockResolvedValueOnce({
      json: async () => [{ firstname: "Stacey" }, { firstname: "Bertha" }],
    });
    render(<TestFetchByMock />);
    const listItems = await screen.findAllByRole("listitem");
    expect(listItems).toHaveLength(2);
  });
});
