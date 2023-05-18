/**
 * UseEffects my cause memory leaks because they are not destructed.
 * Lets assume we have an interval (setInterval), which runs each second. It is called only once, when then component is rendered initially.
 * Anyway, whenever the component is recreated, the useEffect is called again which would start another interval. So with several initializations of a the component, certain intervals would be started.
 * So it is necessary to destruct e.g. interval timer or other constructs.
 */

import { useEffect, useState } from "react";

/**
 * This example shows how the component Test starts an interval with each render process.
 * The corresponding main component (AvoidMemoryLeaksInUseEffects) can toggle if the Test component should be embedded or not by clicking the button.
 * Whenever the button is clicked and toggle set to true, the Test component is recreated and thats way rerendered, which will call the useEffect and start another interval.
 * So after toggling 5 times from false to true, 5 interval timers are running.
 */
const Test: React.FC = () => {
  useEffect(() => {
    setInterval(() => console.log("Interval finished"), 1000);
  }, []);
  return <></>;
};

export const AvoidMemoryLeaksInUseEffects: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      i {toggle && <Test />}
      <button onClick={() => setToggle((previous) => !previous)}>
        Toggle Test Component
      </button>
    </>
  );
};

/**
 * To avoid that behavior the interval has to be cleaned when destructing the useEffect. And that is not only necessary for intervals, but also for timeouts or fetching data etc.
 */
const TestImproved: React.FC = () => {
  // here the interval is cleared whenever the component and therefore the useEffect is destructed
  useEffect(() => {
    const interval = setInterval(() => console.log("Interval finished"), 1000);
    return () => clearInterval(interval);
  }, []);
  return <></>;
};

export const MainComponentImproved: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      i {toggle && <TestImproved />}
      <button onClick={() => setToggle((previous) => !previous)}>
        Toggle Test Component
      </button>
    </>
  );
};
