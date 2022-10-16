// React in TypeScript also has the advantage that the useState has to be type safe. This means you know the type. This also means that you can access properties of e.g. objects in case thats the type of the useState

import { useState } from "react";

export interface IPerson {
  firstname: string;
  lastname: string;
}

export const TypeScriptUseStateChild: React.FC<{
  firstname: string;
  lastname: string;
}> = (props) => {
  return (
    <div>
      <div>{props.firstname}</div>
      <div>{props.lastname}</div>
    </div>
  );
};

export const TypeScriptUseStateParent: React.FC = () => {
  // Create a type safe useState for an array of objects which implement IPerson
  const [persons, setPersons] = useState<IPerson[]>([
    { firstname: "Alex", lastname: "Ant" },
    { firstname: "Stacey", lastname: "Starfish" },
  ]);

  // the attributes of persons can be accessed in a type safe way
  const items = persons.map((person) => {
    return (
      <TypeScriptUseStateChild
        firstname={person.firstname}
        lastname={person.lastname}
      />
    );
  });

  return <div>{items}</div>;
};
