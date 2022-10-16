// Lifting State Up Concept
// Probably it is possible, but it should be avoided to have global variables, singletons or whatever to share content / variables over multiple components.
// But anyway it is required to share information between components.
// The communication from parent to child is achieved by using properties, which is already explained it previous chapters.
// The communication from child to parent is achieved via events. Whenever a child component has to share information with its parent, it raises an event and provides the information.
// If the same information has to be transported over an hierarchy the event handling is implemented multiple times (parent <- parent <- parent <- leaf)
// Often variables states are only kept by a component on a higher level (e.g. a Dashboard which is connected to tons of child components).
// Components on a lower level (e.g. a specific screen which has no children) only provides information to its parent.
// The listener of the parent (which should be informed) has to be provided to the child via props.

export const LiftingUpChildComponent = (props: any) => {
  const changeHandler = (event: any) => {
    // the entered value is provided to the caller (the parent) via callback, which means by calling a method on the props parameter and providing information (here event.target.value - the current value)
    props.onValueChanged(event.target.value);
  };

  return <input type="text" onChange={changeHandler} />;
};

export const LiftingUpParentComponentParent = () => {
  const valueChangedHandler = (newValue: any) => {
    console.log(`My child changed the entered value to ${newValue}`);
  };

  return <LiftingUpChildComponent onValueChanged={valueChangedHandler} />;
};
