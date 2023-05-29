/**
 * Find the whole example in chapter "*useDataAccessObject" in the basics sections
 */

import { useState } from "react";

export const useDataAccessObject = <T>(initialDataObjects?: T[]) => {
  const [dataObjects, setDataObjects] = useState<T[]>(initialDataObjects ?? []);

  const onAdd = (dataObject: T) => {
    setDataObjects((previous) => [...previous, dataObject]);
  };

  const onDelete = (dataObject: T) => {
    setDataObjects((previous) => {
      const index = previous.findIndex((element) => element === dataObject);
      previous.splice(index, 1);
      return [...previous];
    });
  };

  return { dataObjects, onAdd, onDelete };
};
