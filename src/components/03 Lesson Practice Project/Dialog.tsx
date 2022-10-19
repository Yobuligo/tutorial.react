import ReactDOM from "react-dom";
import styles from "./Dialog.module.css";

export const Dialog: React.FC<{
  title: string;
  message: string;
  style?: string;
  onOkay?: () => void;
}> = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <>
          <div className={styles.backdrop} onClick={props.onOkay}></div>
          <div className={props.style ? props.style : styles.dialog}>
            <header className={styles.header}>
              <h3>{props.title}</h3>
            </header>
            <p>{props.message}</p>
            <footer className={styles.footer}>
              <button onClick={props.onOkay}>Okay</button>
            </footer>
          </div>
        </>,
        document.getElementById("backdrop")!
      )}
    </>
  );
};
