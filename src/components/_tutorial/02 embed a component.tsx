// A component can be simply embedded by using it like a normal HTML tag

function EmbedMeComponent() {
  return (
    <div>
      <h1>Demo</h1>
    </div>
  );
}

function RootComponent() {
  return (
    <div>
      <EmbedMeComponent />
    </div>
  );
}
