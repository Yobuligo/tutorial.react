// Often components have to be stacked. Therefor each component has a specific property children.
// Children are provided between the open and the close tag of a component of the caller component
// Within the component the children can be accessed via the props parameter and attribute children

function WantToDisplayChildren(props: any) {
  return <div>{props.children}</div>;
}

function RootComponent() {
  return (
    <div>
      <WantToDisplayChildren>
        <h1>Header 1</h1>
        <h2>Header 2</h2>
        <h3>Header 3</h3>
      </WantToDisplayChildren>
    </div>
  );
}
