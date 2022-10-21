// What does useEffect means and what is it for?
// An effect is something that occurs by circumstances. E.g. when entering a value in the input value or when calling a REST service.
// It has an effect on the application on a component.
// So it provides an easier way to update a component when the circumstances change. E.g. when a value is entered within an input field the input field changed and maybe a corresponding button will be enabled or disabled.
//
// A useEffect runs always when a component is called. So it is called for the first time. In addition it is called whenever a given dependency changed.
// Dependencies must not be:
//  1. the useState setter functions or other functions like setTimer.
//  2. the global variables
//

import { useEffect, useState } from "react";

export const UseEffectComponent: React.FC = () => {
  const [value, setValue] = useState<string>();
  // this useEffect runs only once at the beginning, when a component is created
  // It has no dependencies. As the useEffect code is only executed for the first time of a component and when a dependency changed, it runs only once
  useEffect(() => {
    // setValue triggers a rerun of this component (but as mentioned before only once at the beginning)
    setValue("Test");
  }, []);
  return <></>;
};
