/**
 * UseList is a custom hook that manages list items
 * Items can be easily appended, removed or just read.
 * It can also be used when having this list global at an AppContext
 */

import { useCallback, useState } from "react";

interface IList<T> {
  readonly items: T[];
  append(item: T): void;
  remove(item: T): void;
}

function useList<T>(
  compare: keyof T | ((a: T, b: T) => boolean),
  initialItems?: T[]
): IList<T> {
  const [items, setItems] = useState<T[]>(initialItems ?? []);

  const createComparator = useCallback(
    () =>
      typeof compare === "function"
        ? compare
        : (a: T, b: T) => a[compare] === b[compare],
    [compare]
  );

  const append = useCallback(
    (item: T) => setItems((previous) => [...previous, item]),
    []
  );

  const remove = useCallback(
    (item: T) => {
      setItems((previous) => {
        const comparator = createComparator();
        const index = previous.findIndex((element) =>
          comparator(element, item)
        );
        if (index !== -1) {
          previous.splice(index, 1);
        }
        return [...previous];
      });
    },
    [createComparator]
  );

  return { append, items, remove };
}

interface IPerson {
  id: string;
  firstname: string;
}

export const Test: React.FC = () => {
  const firstList = useList<IPerson>((a, b) => a.id === b.id);
  const secondList = useList<IPerson>("id");

  const items = secondList.items.map((person) => (
    <div key={person.id}>{person.firstname}</div>
  ));

  const onAddPerson = () => {
    const newPerson: IPerson = {
      id: Math.random().toString(),
      firstname: "Stacey",
    };
    secondList.append(newPerson);
  };

  const onRemovePerson = () => {
    // for this example find just the first person
    const person = secondList.items[0];
    secondList.remove(person);
  };

  return (
    <>
      {items}
      <button onClick={onAddPerson}>Add Person</button>
      <button onClick={onRemovePerson}>Remove Person</button>
    </>
  );
};
