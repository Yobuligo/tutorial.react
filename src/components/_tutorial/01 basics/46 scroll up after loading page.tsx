/**
 * If I have a page that contains e.g. a list and scrolls down to the end.
 * Now I want to prevent from scrolling down.
 * Here is how I can achieve it
 */

import { useEffect } from "react";

const Page: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <></>;
};
