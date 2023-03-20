/**
 * Lazy loading can be used to load components only when they are needed, which makes sense especially in huge components. The opposite would be eager loading.
 * The technic behind seems to be similar to common HTML pages, which are loaded when they are called.
 * And in React a component is loaded whenever it should be accessed, but it is not shipped with the normal build of an application.
 * It seems that it is not only possible to load components lazy but also e.g. loader for routes.
 *
 * To load a component lazy it is imported at the place where it is required.
 * Instead of importing the component directly it is imported by function *import*. The result is assigned to the variable e.g. the same as the component.
 * To display the component it is wrapped by *Suspense*. Here a fallback can be provided and as soon as the component was imported it can be displayed.
 *
 * Alternatively it is also possible to load e.g. a function lazy. Here the sum function is loaded on demand and the sum calculated.
 */

import { lazy, Suspense, useState } from "react";

export const LazyLoadingComponent: React.FC = () => {
  const [calcResult, setCalcResult] = useState(0);

  // Lazy loading of a component
  const LazyComponent = lazy(() => import("./38 LazyComponent"));

  // Lazy loading of a function
  import("./38 LazyComponent").then((module) => {
    setCalcResult(module.sum(4, 5));
  });

  return (
    <>
      {calcResult}
      <Suspense fallback={<p>... loading lazy component</p>}>
        <LazyComponent />
      </Suspense>
    </>
  );
};
