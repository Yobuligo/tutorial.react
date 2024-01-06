/**
 * If we have asynchronously tests and we want to check the rendering result before e.g. data were loaded compared with the result after the data were loaded,
 * we can implement and some kind of pause.
 * Before the pause we use the debug function to print the result before.
 * Then we call the pause, which waits for maybe just 100 ms.
 * And finally we print the component after the pause by calling debug
 */

import { render, screen } from "@testing-library/react";
import { useEffect, useState } from "react";

const Test: React.FC = () => {
  const [numbers, setNumbers] = useState<number[]>([]);

  // simulate to load the numbers asynchronously.
  useEffect(() => {
    setTimeout(() => setNumbers([1, 2, 3]), 50);
  }, []);

  return (
    <>
      <div>{numbers}</div>
    </>
  );
};

/**
 * The small helper function, which pauses the execution for just some milliseconds.
 */
const pause = (): Promise<void> => {
  return new Promise((resolve) => setTimeout(() => resolve(), 100));
};

test("print component by debug before and after loading the data by using the pause", async () => {
  render(<Test />);
  screen.debug();
  await pause();
  screen.debug();
});
