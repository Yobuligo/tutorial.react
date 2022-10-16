// Another way to set a conditional style is to provide the style within a css class which can "loaded" depending on a condition

//load the css file
import "./13 Conditional Style dynamically.css";

export const ConditionalStyleDynamicallyComponent = () => {
  // any random condition, even so it is only true now.
  const isValid = true;

  return (
    // set the css style information and add the conditional information via ... condition by dynamically fill the string
    // Always the css class 'conditional-style-dynamically-component' is loaded. But depending on the variable 'isValid' also the class '.conditional-style-dynamically-component.invalid' is loaded
    // which effects input and h2 tags
    // if the variable 'isValid' is true only 'conditional-style-dynamically-component' is loaded
    //
    // So it is possible to load various css classes. It is not restricted to 2!
    <div
      className={`conditional-style-dynamically-component ${
        !isValid ? " invalid" : ""
      }`}
    >
      <h2>Any header</h2>
      <input value="Default Value" />
    </div>
  );
};
