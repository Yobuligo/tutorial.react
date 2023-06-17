/**
 * A custom hook, that can be used to call something only once at the beginning
 */

import { useState } from "react";

const useInitialize = (block: () => void) => {
  const [needsInitialize, setNeedsInitialize] = useState(true);
  if (needsInitialize) {
    setNeedsInitialize(false);
    block();
  }
};
