// Conditional Content means that a component is rendered differently depending on the circumstances.

export const ConditionContentComponent = (props: any) => {
  if (props.value === "empty") {
    return <h2>No Content Provided</h2>;
  }

  return (
    <div>
      <h2>Here is the content</h2>
      <p>{props.value}</p>
    </div>
  );
};
