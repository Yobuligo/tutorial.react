/**
 * This hooks is comparable to useEffect, without the need to run it at the beginning
 */

import { useEffect, useRef } from "react";

export const useUpdateEffect = (
  callback: () => void,
  dependencies: React.DependencyList | undefined
) => {
  const firstRenderCycle = useRef(true);
  useEffect(() => {
    if (firstRenderCycle.current) {
      firstRenderCycle.current = false;
      return;
    }
    callback();
  }, dependencies);
};
