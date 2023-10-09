/**
 * Error boundaries are nice for displaying errors. Anyway they only work for synchronous functions.
 * But often we have asynchronous function for e.g. requesting data from a backend.
 * Throwing an Error within those functions cannot be handled by error boundaries,
 * as they are not part of the same "process". Error boundaries only work for the React cycle thread.
 *
 * To anyway display errors in the error boundaries it seems to be possible nice to have a separate hook useError.
 * The hook returns a function to set error, which can also be set on asynchronously running functions.
 * Whenever the useError hook is rerendered, it can throw the error within the React cycle process.
 */

import { useCallback, useEffect, useState } from "react";
import { ErrorBoundary } from "./40 Error Boundary";

const useError = () => {
  const [error, setError] = useState<Error | undefined>(undefined);

  /**
   * This function caches the error
   */
  const throwError = (error: Error) => {
    setError(error);
  };

  /**
   * Here we check if an error exists. If so, we throw the error. Which means we throw it at the React cycle thread / process
   */
  if (error) {
    throw error;
  }

  /**
   * Returns the function to throw / set an error
   */
  return throwError;
};

const Component: React.FC = () => {
  const throwError = useError();

  /**
   * Simulates in initialization of data.
   * Whenever an error occurs, it occurs at an asynchronous thread / process, which is not the React cycle process.
   * To lift that error up to the React cycle process, to display in the error boundary we hand the error over to the useError hook,
   * which throws it in the next React render cycle, which finally can be displayed within the ErrorBoundary
   */
  const initialLoad = useCallback(async () => {
    try {
      await fetch("");
    } catch (error) {
      if (error instanceof Error) {
        throwError(error);
      } else {
        throw new Error();
      }
    }
  }, [throwError]);

  /**
   * The useEffect is used to e.g. initially load data from the backend.
   */
  useEffect(() => {
    initialLoad();
  }, [initialLoad]);
  return <></>;
};

/**
 * This app uses a normal ErrorBoundary
 * Inside it displays the Component that throws an error.
 */
const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Component />
    </ErrorBoundary>
  );
};
