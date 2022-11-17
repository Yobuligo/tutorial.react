import styles from "./ErrorText.module.css";

const ErrorText: React.FC<{ text: string }> = (props) => {
  return (
    <>
      <p className={styles.errorText}>{props.text}</p>
    </>
  );
};

export default ErrorText;
