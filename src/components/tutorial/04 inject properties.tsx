// Values which are needed by a component as parameters can be injected via properties
// The value has to be provided by tag attributes and can be 

function NeedValueComponent(prop: any) {
  return <div>{prop.firstname}</div>;
}

function RootComponent() {
  return (
    <div>
      <NeedValueComponent firstname="Stacey" />
    </div>
  );
}
