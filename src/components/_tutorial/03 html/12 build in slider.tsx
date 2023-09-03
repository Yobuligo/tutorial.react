/**
 * By choosing "time" as type for input, the input is converted to a slider.
 * The easiest way to change the color of the slider is to set the property "accent-color".
 */

import styles from "./12 build in slider.module.css";

export const BuildIntTimePicker: React.FC = () => {
  return (
    <>
      <input type="range" className={styles.slider} />
    </>
  );
};
