import { useEffect, useState } from "react";

/**
 * If you use fetch in your component, your test shouldn't execute the fetch with each test run.
 * Instead it should be mocked, which shows the corresponding test.
 */
interface IPerson {
  firstname: string;
}

export const TestFetchByMock: React.FC = () => {
  const [persons, setPersons] = useState<IPerson[]>([]);
  const items = persons.map((person) => (
    <li key={person.firstname}>{person.firstname}</li>
  ));

  useEffect(() => {
    fetch("anyUrl")
      .then((response) => response.json() as Promise<IPerson[]>)
      .then((value) => setPersons(value));
  }, []);
  return <>{items}</>;
};
