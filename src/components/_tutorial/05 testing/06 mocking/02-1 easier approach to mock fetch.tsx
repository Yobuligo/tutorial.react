/**
 * Here comes an easier approach.
 * The main idea is the same then the previous one. The difference is, that we don't use any special function.
 * Instead we return a Promise for fetch and a Promise for the json function.
 */

import { render, screen } from "@testing-library/react";
import { useEffect, useState } from "react";

const Test: React.FC = () => {
  const [numbers, setNumbers] = useState<number[]>([]);
  const items = numbers.map((item, index) => <div key={index}>{item}</div>);

  useEffect(() => {
    const wrapper = async () => {
      const response = await fetch("/myURL", { method: "GET" });
      const fetchedNumbers = (await response.json()) as number[];
      setNumbers(fetchedNumbers);
    };
    wrapper();
  }, []);

  return <>{items}</>;
};

test("mock fetch", async () => {
  // Here we redefine the global fetch function.
  // This function now returns a specific promise for the fetch() call and the fetch.json() call
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([1, 2, 3, 12]),
    })
  ) as jest.Mock;

  render(<Test />);
  const element = await screen.findByText(12);
  expect(element).toBeInTheDocument();
});
