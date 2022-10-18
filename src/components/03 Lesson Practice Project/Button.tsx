import styles from "./Button.module.css";

export const Button: React.FC<{
  caption: string;
  type?: JSX.IntrinsicElements["button"]["type"];
  onAddUserClicked?: () => void;
}> = (props) => {
  return (
    <button
      className={styles.button}
      type={props.type || "button"}
      onClick={props.onAddUserClicked}
    >
      {props.caption}
    </button>
  );
};
