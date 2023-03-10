/**
 * Another hook is useMemo.
 * It can be used for operations which might be expensive and should be executed only rarely. E.g. sorting of a list.
 * Therefore the useMemo hook is used. It has two parameters. The first is a function that does the work and returns the result. E.g. is sorts a list and returns the result.
 * The second parameter is a list of dependencies. As usually it means that the expensive function (to sort the items) only run, if any dependency change.
 * Usage:
 * 1. when e.g. a computation takes a long time and the result should be cached
 * 2. For reference equality. E.g. a useEffect should only be called when a reference changed. Then that reference should be wrapped by useMemo. So it wont be rerendered each time with the host component,
 *    but only when the whole component including the reference has to rebuild.
 */

import { useMemo, useState } from "react";

/**
 * The following example shows, how to cache a result by using useMemo, to not recalculate with each rerendering. Which makes sense especially for expensive calculation.
 * The button is only required to trigger a rerendering of the component. But even if the button was clicked, it has to effect on the calculated result.
 */
const calc = () => {
  console.log(`Run calculation`);
  return "Calc result";
};

export const UseMemoComponent: React.FC = () => {
  const [value, setValue] = useState(0);
  const onClickHandler = () => setValue((previous) => previous + 1);
  const calcResult = useMemo(() => calc(), []);

  return (
    <>
      <div>{calcResult}</div>
      <div>{value}</div>
      <div>
        <button onClick={onClickHandler}>Increase value</button>
      </div>
    </>
  );
};

/**
 * The following example is similar to the previous example.
 * Nonetheless, here the calculation depends on an object of type *INumberProvider*.
 * This means even if the calculation is wrapped by useMemo, it would be recalled with each rerendering of the component, IF the variable numberProvider wouldn't be cached as useMemo as well.
 * Because by not wrapping the *const numberProvider: INumberProvider = { number: 123 }* with each rerendering (which can be triggered by button click), a new instance of numberProvider would be created.
 * Finally the new creation means that the calcResult has to be recalculated.
 */
interface INumberProvider {
  number: number;
}

const calc2 = (numberProvider: INumberProvider) => {
  console.log(`Run calculation`);
  return numberProvider.number;
};

export const UseMemoComponent2: React.FC = () => {
  const [value, setValue] = useState(0);
  const onClickHandler = () => setValue((previous) => previous + 1);

  const numberProvider: INumberProvider = useMemo(() => {
    return { number: 123 };
  }, []);
  const calcResult = useMemo(() => calc2(numberProvider), [numberProvider]);

  return (
    <>
      <div>{calcResult}</div>
      <div>{value}</div>
      <div>
        <button onClick={onClickHandler}>Increase value</button>
      </div>
    </>
  );
};
