// The function parameter binding can be used to provide default values when e.g. an event handler is called.
//
// The following example has two components. The ChildComponents calls an event handler whenever its button is clicked.
// When calling a value is provided (lets assume it is some kind of id). So the child always provides "123" as value.
// The parent component embeds the ChildComponent. By using the function bind the parameter values can be injected which are used whenever the function is called.

export const ChildComponent: React.FC<{ onClick: (value: number) => void }> = (
  props
) => {
  const onClickHandler = () => {
    props.onClick(123);
  };

  return (
    <>
      <button onClick={onClickHandler}>Click Me</button>
    </>
  );
};

// When injecting the onClickHandler to event onClick, the method bind is called which provides
//  1. "null" as the first parameter. The first parameter means the associated object with that object, lets leave it empty here.
//  2. override the value which is used when calling the onClickHandler. So the onClickHandler is always called with "234" even so the ChildComponent provides "123" as value
export const BindFunctionParameterComponent: React.FC = () => {
  const onClickHandler = (value: number) => {
    console.log(`The provided value is ${value}.`);
  };
  return (
    <>
      <ChildComponent onClick={onClickHandler.bind(null, 234)} />
    </>
  );
};
