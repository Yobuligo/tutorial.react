// To not only hard code all values which have to be displayed, it is possible to show content of variables.
// The value has to be set in braces {}

function ShowVariableValueAsContent() {
  const firstname = "Stacey";
  const lastname = "Starfish";

  return (
    <div>
      <div>{firstname}</div>;<div>{lastname}</div>;
    </div>
  );
}
