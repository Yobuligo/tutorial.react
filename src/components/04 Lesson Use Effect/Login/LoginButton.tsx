import styles from "./LoginButton.module.css";

export const LoginButton: React.FC<{
  disabled: boolean;
  onClick?: () => {};
}> = (props) => {
  return (
    <div className={styles.loginButton}>
      <button type="submit" disabled={props.disabled} onClick={props.onClick} className={props.disabled ? styles.disabled : ""}>
        Login
      </button>
    </div>
  );
};
