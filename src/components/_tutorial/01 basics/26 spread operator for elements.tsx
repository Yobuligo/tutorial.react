// To write reusable code it makes sense to have central components, which can be reused.
// But sometimes the style or other properties of a component should change depending of the usage.
// For JSX elements properties can be provided via spread operator. So all properties will applied to a component.
//
// The following example shows 3 different possibilities to customize a component
//  1. provide properties separate by key-value pairs
//  2. provide the properties via spread operator
//  3. mix key-value pairs and spread operator.
// Either you can provide all properties at once
//

export const SpreadOperatorForElementsComponent: React.FC<{
  id: string;
  type: string;
  value: string;
}> = (props) => {
  return (
    <>
      <input id={props.id} type={props.type} value={props.value} />
      <input {...props} />
      <input {...props} onChange={() => {}} />
    </>
  );
};
