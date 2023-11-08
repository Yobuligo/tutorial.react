/**
 * If data are loaded we sometimes displaying an alternative component for a short time, like a loading spinner.
 * Jest provides a function to test, if a component was there.
 *
 * In the example below we simulate to fetch data from a server. Meanwhile we set the useState "loading" to true
 * and as long as "loading" is set to true, we display "... loading"
 */

import { useEffect, useState } from "react";

export const TestLoadingSpinner: React.FC = () => {
  const [loading, setLoading] = useState(true);

  // simulate data fetching from backend
  const loadData = () => {
    return new Promise((resolve) => {
      setLoading(true);
      setTimeout(() => {
        resolve("loaded data");
        setLoading(false);
      }, 1000);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  return <>{loading ? <>... loading</> : <>Content</>}</>;
};
