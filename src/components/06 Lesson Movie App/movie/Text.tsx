import styles from "./Text.module.css";

const Text: React.FC<{ text: string }> = (props) => {
  return (
    <div className={styles.text}>
      <p>{props.text}</p>
    </div>
  );
};

export default Text;
