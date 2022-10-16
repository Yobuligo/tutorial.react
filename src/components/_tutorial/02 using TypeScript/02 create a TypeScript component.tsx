// Creating a React component in TypeScript is actually completely equivalent to using JavaScript.
// Either it can be implemented via the function keyword or by using the arrow function. It has a name and returns JSX.
// The differences to JavaScript starts when using properties. By using JavaScript you have to know your property attributes.
// In JavaScript you can access those properties even so they are not available. If the property was renamed the caller not even recognize the error when coding.
//
// To create a React TypeScript component your Component needs a type. That type is React.FC. FC stands for Functional Component.

// A React component with no properties
export const TypeScriptComponentNoProperty: React.FC = () => {
  return <div></div>;
};

// A React component with property firstname and lastname which can be accessed via parameter props
export const TypeScriptComponentChild: React.FC<{
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

// A React component that calls the child component has to provide the properties firstname and lastname. Otherwise the IDE shows an error
export const TypeScriptComponentParent: React.FC = () => {
  // create a list of persons
  const persons: { firstname: string; lastname: string }[] = [
    { firstname: "Alex", lastname: "Ant" },
    { firstname: "Stacey", lastname: "Starfish" },
  ];

  // instantiate a component per person. An error occurs if the properties firstname and lastname are not handed over
  const items = persons.map((person) => {
    return (
      <TypeScriptComponentChild
        firstname={person.firstname}
        lastname={person.lastname}
      />
    );
  });

  // display the items the components
  return <div>{items}</div>;
};
