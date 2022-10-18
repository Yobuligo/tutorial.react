import styles from "./Dialog.module.css";

export const Dialog: React.FC<{
  title: string;
  message: string;
  style?: string;
  onOkay?: () => void;
}> = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onOkay}></div>
      <div className={props.style ? props.style : styles.dialog}>
        <h3>{props.title}</h3>
        <p>{props.message}</p>
        <div className={styles.buttonBox}>
          <button onClick={props.onOkay}>Okay</button>
        </div>
      </div>
    </div>
  );
};
