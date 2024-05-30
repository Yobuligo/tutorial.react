/**
 * Sometimes I don't have all styling information for the CSS. Instead the styling information, like a color changed during the runtime.
 * Therefore I want to inject a React property to CSS.
 * Here comes how this is possible
 */
import { CSSProperties } from "react";
import styles from "./02 inject variable value to CSS via CSSProperties.module.css";

interface ITestProps {
  color: string;
}

/**
 * Here I have a simple component, which displays a container with a background color.
 * The background color should be set from outside.
 *
 * 1. Create a variable, e.g. "style" of type CSSProperties. Here we add a new property, which must start with "--" and assign the value
 * 2. Set the style information to the component (here the div)
 * 3. Use the variable in the css by function var(--backgroundColor)
 */
const Test: React.FC<ITestProps> = (props) => {
  const style = {
    "--backgroundColor": `${props.color}rem`,
  } as CSSProperties;

  return <div className={styles.div} style={style} />;
};
