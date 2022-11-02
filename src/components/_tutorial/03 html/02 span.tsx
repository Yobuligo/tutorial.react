// Span is pretty similar to div.
// Div defines a block, while span is actually used for defining an inline element

import styles from "./02 span.module.css";

export const SpanComponent: React.FC = () => {
  return (
    <>
      <button>
        <span className={styles.span}>Text</span>
      </button>
    </>
  );
};
