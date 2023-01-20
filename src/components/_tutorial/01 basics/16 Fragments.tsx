// When a component is rendered, the corresponding function can only return one argument. As each function or method.
// In case several components have to be displayed often a <div> is used to wrap those components even though the <div> is only needed for that.
// But these <div>s have to be rendered as HTML which costs CPU time and if there are thousands of them the application becomes slow.
// Therefore fragments were introduced. The only task for fragments is to wrap other components. But they have the advantage not being rendered.
// A fragment can be provided by an opening and closing angle brackets <>.

export const FragmentComponent: React.FC = () => {
  return (
    <>
      <h1>My Header</h1>
    </>
  );
};
