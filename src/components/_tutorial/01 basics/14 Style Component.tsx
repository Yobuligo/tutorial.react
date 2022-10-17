/**
 * There are 3 main possibility to use styling in React
//  1. Inline Style: use the inline approach by providing the style for each tag e.g. <h1 style={{ color: "red" }}>Inline Style</h1>
//  2. Style Components: Style Components is a framework to provide styling within your code
//  3. CSS Modules: next to only use css files use CSS modules. By just using CSS files it my happen that a style is also active for another component in case the css class in not unique as the name of the class is used twice.
//      The usage of CSS files and CSS modules is pretty similar. The CSS is provided in a separate file. The difference is that the CSS file is name like <component_name>.module.css. It is extended by *.module.*.
//      Furthermore when importing the style it is imported as follows: import styles from './<component_name>.module.css'. The name 'styles' is variable. Normally it is called styles or classes
//      And later it can be used by {} setting the class name
 */

import styles from "./14 Style Component.module.css";

// the div shows how a condition can be implemented. At the first the general style is set. In addition another style is added depending on a condition.
// Therefore the className is wrapped in ``. Here the style can be set via interpolation ${}. The hole condition can be implemented in this expression
// to avoid the [] to get the style via key, the style has to be provided without -. E.g. style-component has to be translated to StyleComponent.
export const StyleComponent: React.FC = () => {
  const valid = false
  return (
    <div className={`${styles["style-component"]} ${valid ? "" : styles.invalid}`}>
      <h1 className={styles["style-component"]}>Inline Style</h1>
    </div>
  );
};
