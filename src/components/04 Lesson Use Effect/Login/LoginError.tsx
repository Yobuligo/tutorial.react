import styles from "./LoginError.module.css";

export const LoginError: React.FC = () => {
  return (
    <>
      <div className={styles.backdrop}></div>
      <div className={styles.loginError}>Error message</div>
    </>
  );
};
