/**
 * This is another example for lazy loading.
 * Lazy loading especially makes sense, for multiple pages. Often not all pages are displayed. So it makes sense to lazy load especially separate pages.
 * And as I analyzed, it is not only that the page is loaded lazy, but also all its used components, features, ... .
 *
 * In the following example a summary page is loaded lazy whenever a button is clicked.
 * This could be an example for tabs, which are selected.
 */

import { lazy, useState } from "react";

// The component Summary is provided lazy and only when called ...
const Summary = lazy(() => import("./38-1 lazy Summary"));

export const LazyExample2Component: React.FC = () => {
  const [displaySummary, setDisplaySummary] = useState(false);
  return (
    // The component Summary is only called, when displaySummary was set to true. And only than it is loaded.
    <>
      {displaySummary ? <Summary /> : ""}
      <button onClick={() => setDisplaySummary(true)}>Display Summary</button>
    </>
  );
};
