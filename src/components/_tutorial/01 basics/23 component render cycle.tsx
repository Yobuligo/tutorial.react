// The render cycle / life cycle of a component isn't obvious on the first glance
// e.g. a useEffect is only called after the render cycle ends

import { useEffect } from "react";

export const ComponentRenderCycleComponent: React.FC = () => {
  //1. mount component

  useEffect(() => {
    //4. useEffect runs at the end
    return () => {
      //3. cleanup function runs before the next body of the useEffect is executed
    };
  });

  //2. mounting completed
  return <></>;
};
