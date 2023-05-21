/**
 * Sometimes it makes sense to complete an event on enter for an input field.
 * E.g. entering a value and complete with enter.
 * Therefore the event keyUp of an input can be used followed by the check which key was pressed
 */

export const OnEnterForInputComponent: React.FC = () => {
  return (
    <>
      <input
        type="text"
        onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>) => {
          if (event.key === "Enter") {
            console.log(`Complete input`);
          }
        }}
      />
    </>
  );
};
