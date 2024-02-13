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
  compare: (a: T, b: T) => boolean,
  initialItems?: T[]
): IList<T> {
  const [items, setItems] = useState<T[]>(initialItems ?? []);

  const append = useCallback(
    (item: T) => setItems((previous) => [...previous, item]),
    []
  );

  const remove = useCallback(
    (item: T) => {
      setItems((previous) => {
        const index = previous.findIndex((element) => compare(element, item));
        if (index !== -1) {
          previous.splice(index, 1);
        }
        return [...previous];
      });
    },
    [compare]
  );

  return { append, items, remove };
}

interface IPerson {
  id: string;
  firstname: string;
}

const Test: React.FC = () => {
  const list = useList<IPerson>((a, b) => a.id === b.id);

  const items = list.items.map((person) => (
    <div key={person.id}>{person.firstname}</div>
  ));

  const onAddPerson = () => {
    const newPerson: IPerson = {
      id: Math.random().toString(),
      firstname: "Stacey",
    };
    list.append(newPerson);
  };

  const onRemovePerson = () => {
    // for this example find just the first person
    const person = list.items[0];
    list.remove(person);
  };

  return (
    <>
      {items}
      <button onClick={onAddPerson}>Add Person</button>
      <button onClick={onRemovePerson}>Remove Person</button>
    </>
  );
};
