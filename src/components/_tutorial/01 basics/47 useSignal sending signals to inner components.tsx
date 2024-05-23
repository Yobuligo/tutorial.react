/**
 * Sometimes it is required to send an information to the inner component.
 * E.g. we have a list and each list element is a card which can be expanded or collapsed.
 * Now this collapsible state is handled within the list item card.
 * Anyway we want to instruct the inner component to collapse or expand.
 * To inject a separate state (isCollapsed true or false) is not possible as the component itself has a separate state.
 *
 * To solve those problems we can use signals.
 * A signal can be provided to the inner component and whenever it changed, that is the signal for the inner component to do something
 */

import { useEffect, useState } from "react";

export namespace SendSignals {
  /**
   * Represents the signal
   */
  interface ISignal {
    readonly createdAt: Date;
  }

  /**
   * Simple Signal class
   */
  class Signal implements ISignal {
    readonly createdAt: Date = new Date();
  }

  /**
   * Hook to administrate the signal.
   * It is responsible for providing access to a signal and to trigger it.
   * Initially no signal exists
   */
  const useSignal = (): [signal: ISignal | undefined, trigger: () => void] => {
    const [signal, setSignal] = useState<ISignal | undefined>(undefined);

    const trigger = () => {
      setSignal(new Signal());
    };

    return [signal, trigger];
  };

  /**
   * Inner component which should react on signal change
   */
  const InnerComponent: React.FC<{ collapseSignal?: ISignal }> = (props) => {
    const [collapse, setCollapse] = useState(false);

    /**
     * Check if signal changed
     * Initially the signal should not be triggered, so check for if collapseSignal is defined
     */
    useEffect(() => {
      if (props.collapseSignal) {
      }
    }, [props.collapseSignal]);

    return (
      <>
        {!collapse && <div>Display content, as component is not collapsed</div>}
      </>
    );
  };

  const OuterComponent: React.FC = () => {
    const [collapseSignal, triggerCollapseSignal] = useSignal();

    /**
     * Button was clicked, so trigger collapsed signal
     * The use state is changed so the inner component will be updated
     */
    const onTriggerCollapseSignal = () => {
      triggerCollapseSignal();
    };

    return (
      <>
        <InnerComponent collapseSignal={collapseSignal} />
        <button onClick={onTriggerCollapseSignal}>
          Trigger signal (collapse)
        </button>
      </>
    );
  };
}
