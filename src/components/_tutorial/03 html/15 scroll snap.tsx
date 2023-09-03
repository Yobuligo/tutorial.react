/**
 * In HTML and React it is possible to provide a page, which contains of several sections and with each scroll the app jumps to the next section.
 * Therefore the css prop scroll-snap is used.
 * Provide an application which contains e.g. of several sections.
 * Apply a corresponding css.
 *
 * The css needs to contain scroll-snap-type at the parent and scroll-snap-align at the child.
 * The type defined where to scroll horizontal (x) or vertical (y). In addition it is possible to define if the jump type in the view port (proximity, mandatory).
 */

import styles from "./14 scroll snap.module.css";

export const ScrollSnapComponent: React.FC = () => {
  return (
    <div className={styles.div}>
      <section>
        <h1>First</h1>
      </section>
      <section>
        <h1>Second</h1>
      </section>
      <section>
        <h1>Third</h1>
      </section>
    </div>
  );
};
