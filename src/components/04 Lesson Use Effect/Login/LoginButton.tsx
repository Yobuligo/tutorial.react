import styles from "./LoginButton.module.css";

export const LoginButton: React.FC<{
  disabled: boolean;
  onClick?: () => void;
}> = (props) => {
  return (
    <div className={styles.loginButton}>
      <button type="submit" onClick={props.onClick}>
        Login
      </button>
    </div>
  );
};
