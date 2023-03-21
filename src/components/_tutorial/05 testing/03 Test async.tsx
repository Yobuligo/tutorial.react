/**
 * In same cases elements are only provided when they are loaded asynchronously.
 * So they must not be there from the beginning. The following example demonstrate how to render a list of items which are - simulated - to be loaded asynchronously.
 */

import { useEffect, useState } from "react";

interface IPerson {
  firstname: string;
}

export const TestAsync: React.FC = () => {
  const [persons, setPersons] = useState<IPerson[]>([]);
  const items = persons.map((person) => (
    <li key={person.firstname}>{person.firstname}</li>
  ));

  useEffect(() => {
    setTimeout(() => {
      setPersons([{ firstname: "Stacey" }, { firstname: "Bertha" }]);
    }, 500);
  }, []);
  
  return <>{items}</>;
};
