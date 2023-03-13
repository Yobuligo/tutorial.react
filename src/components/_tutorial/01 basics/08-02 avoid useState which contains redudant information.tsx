import { useEffect, useState } from "react";

/**
 * Sometimes a useState only contains data of other useStates. There is actually no need to have a separate useState for it, which makes the system slower.
 * Instead use a normal variable
 */
const AvoidUseStateForRedundantInformation: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  // Here the whole component is always rendered twice. First when updating firstName or lastName and second because fullName has to be rerendered implicit.
  useEffect(() => {
    setFullName(`${firstName} ${lastName}`);
  }, [firstName, lastName]);

  // Correct it would be better to use a simple variable
  const fullNameValue = `${firstName} ${lastName}`;

  return (
    <>
      <input
        type="text"
        onChange={(event) => setFirstName(event.target.value)}
      />
      <input
        type="text"
        onChange={(event) => setLastName(event.target.value)}
      />
      {fullName}
      {fullNameValue}
    </>
  );
};

export default AvoidUseStateForRedundantInformation;
