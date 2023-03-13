import { useEffect, useMemo, useState } from "react";

/**
 * Here is another example for reference equality where it makes sense to use useMemo.
 * An object that should only be updated if certain properties change
 */
const UseMemoWithReferenceEquality: React.FC = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  // here a person would be created with each render request, even though it depends only from the properties age and name.
  // This means when clicking the checkbox for toggling between a black and white background color, the person object would be recreated
  const person = { name: name, age: age };
  useEffect(() => {
    console.log(person);
  }, [person]);

  // Correct, instead use useMemo to only create a new person instance if the person really changed
  const personValue = useMemo(() => {
    return { name: name, age: age };
  }, [name, age]);
  useEffect(() => {
    console.log(personValue);
  }, [personValue]);

  return (
    <div style={{ background: darkMode ? "black" : "white" }}>
      <input type="number" onChange={(event) => setAge(+event.target.value)} />
      <input type="text" onChange={(event) => setName(event.target.value)} />
      <input
        type="checkbox"
        onChange={(event) => setDarkMode(event.target.checked)}
      />
    </div>
  );
};

export default UseMemoWithReferenceEquality;
