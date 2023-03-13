/**
 * Whenever a component is displayed, which needs data, which were loaded asynchronous by fetch, it might happen that the component is not displayed anymore.
 * Or if you have a custom hook which is recalled but not yet finished the fetch.
 * Here the fetch request should be aborted. That can be achieved as follows.
 */

import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState<Error>();

  // This useEffect is called whenever the url parameter changed.
  // In this case a new fetch request is triggered, including an abortSignal
  // Whenever the useFetch hook is destructed the useEffect is destructed as well and calls the returned function which calls abortController.abort()
  useEffect(() => {
    setLoading(true);
    const abortController = new AbortController();
    fetch(url, { signal: abortController.signal })
      .then((value) => value.json())
      .then((value) => setData(value))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
    return () => {
      abortController.abort();
    };
  }, [url]);

  return { loading, data, error };
};

export default useFetch;
