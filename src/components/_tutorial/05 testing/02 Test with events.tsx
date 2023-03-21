import { useState } from "react";

/**
 * The following test example shows how to trigger an event
 * Here a text is printed and whenever the button was clicked, the text is changed.
 */
export const TestWithEvent: React.FC = () => {
  const [text, setText] = useState("Default");
  return (
    <>
      {text}
      <button onClick={() => setText("Changed text")}>Click Me</button>
    </>
  );
};
