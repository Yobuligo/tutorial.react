/**
 * If it is required to check several e.g. texts of a component,
 * which are injected via props, the use of dynamic regex might be the answer.
 */

import { render, screen } from "@testing-library/react";

interface IPerson {
  firstname: string;
  lastname: string;
  age: number;
}

interface ITestProps {
  person: IPerson;
}

const Test: React.FC<ITestProps> = (props) => {
  return (
    <>
      <div>{props.person.firstname}</div>
      <div>{props.person.lastname}</div>
      <div>{props.person.age}</div>
    </>
  );
};

test("All properties are printed", () => {
  const person: IPerson = {
    age: 28,
    firstname: "Stacey",
    lastname: "Starfish",
  };

  render(<Test person={person} />);
  for (const propName in person) {
    const prop = (person as any)[propName];

    // Create a regex for each property to search for it
    // Actually it is not even required to use the regex here, it would work anyway.
    const element = screen.getByText(new RegExp(prop));
    expect(element).toBeInTheDocument();
  }
});
