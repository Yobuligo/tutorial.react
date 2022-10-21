import styles from "./LoginButton.module.css";

export const LoginButton: React.FC<{
  disabled: boolean;
  onClick?: () => void;
}> = (props) => {
  return (
    <div className={styles.loginButton}>
      <button
        className={
          props.disabled ? styles.loginButtonInvalid : styles.loginButtonValid
        }
        type="submit"
        disabled={props.disabled}
        onClick={props.onClick}
      >
        Login
      </button>
    </div>
  );
};
