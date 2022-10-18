// Conditional Content means that a component is rendered differently depending on the circumstances.
// It can be realized by using if statements that returns a condition.
// But sometimes complex conditions are required where only parts of a component have to be changed.
// As you can provide an expression within {} e.g. for displaying a component in a div (<div>{<Card/>}</div>)
// It is possible to provide something like a if statement within {}. The and condition && helps especially. So you can use && to provide a condition. Only if this is true the component, which is provided afterwards, will be rendered

export const ConditionContentComponent = (props: any) => {
  if (props.value === "empty") {
    return <h2>No Content Provided</h2>;
  }

  const firstname = "Peter";
  const needsRendering = true;

  return (
    <div>
      <h2>Here is the content</h2>
      <p>{props.value}</p>
      <div>
        {firstname === "Peter" && <h1>Name is Peter</h1>}
        {needsRendering && (
          <h1>
            needsRendering is true so the expression behind && is executed and
            this h1 is returned
          </h1>
        )}
      </div>
    </div>
  );
};
