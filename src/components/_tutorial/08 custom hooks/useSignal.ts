/**
 * Sometimes it is required to send an information to the inner component.
 * E.g. we have a list and each list element is a card which can be expanded or collapsed.
 * Now this collapsible state is handled within the list item card.
 * Anyway we want to instruct the inner component to collapse or expand.
 * To inject a separate state (isCollapsed true or false) is not possible as the component itself has a separate state.
 *
 * To solve those problems we can use signals.
 */

import { useState } from "react";

interface ISignal {
  readonly createdAt: Date;
}

class Signal implements ISignal {
  readonly createdAt: Date = new Date();
}

const useSignal = (): [signal: ISignal | undefined, trigger: () => void] => {
  const [signal, setSignal] = useState<ISignal | undefined>(undefined);

  const trigger = () => {
    setSignal(new Signal());
  };

  return [signal, trigger];
};
