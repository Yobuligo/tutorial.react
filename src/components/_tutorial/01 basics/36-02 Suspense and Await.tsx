/**
 * When loading components for a route or even for other components it might be necessary to load data asynchronously.
 * These data might be used for setting up other components or for the data are displayed directly.
 * An alternative way to use a useState is to use Suspense and Await. The Suspense component replaces another component as long as the component is not yet loaded.
 * The Await component takes a promise a property. And as soon as the promise gets resolved the content can be used to display a component by the asynchronously loaded data.
 */

import { Suspense } from "react";
import { Await } from "react-router-dom";

export const SuspenseAndAwait: React.FC = () => {
  // Load data asynchronously
  const loadString = () =>
    new Promise<string>((resolve) => resolve("My result"));

  // The Suspense function displays *... load component* as long as the execution of the async function *loadString* is not completed.
  // The Await takes a promise. If the promise resolves, a function is called and the result can be displayed
  // Here the result is taken directly to be displayed. Alternatively it could be mapped to a component.
  return (
    <>
      <Suspense fallback={<p>... load component</p>}>
        <Await resolve={loadString}>{(result) => result}</Await>
      </Suspense>
    </>
  );
};
