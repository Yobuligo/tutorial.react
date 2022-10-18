import { Button } from "./Button";
import styles from "./ErrorModal.module.css";

export const ErrorModal: React.FC<{ title: string; message: string }> = (
  props
) => {
  return (
    <div>
      <div className={styles.backdrop}></div>
      <div className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button caption="Okay" />
        </footer>
      </div>
    </div>
  );
};
