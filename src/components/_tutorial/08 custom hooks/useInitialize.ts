/**
 * A custom hook, that can be used to call something only once at the beginning
 */

import { useState } from "react";

const useInitialize = (block: () => void) => {
  const [needsInitialization, setNeedsInitialization] = useState(true);
  if (needsInitialization) {
    setNeedsInitialization(false);
    block();
  }
};
