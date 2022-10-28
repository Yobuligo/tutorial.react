import styles from "./MenuButton.module.css";

export const MenuButton: React.FC = () => {
  const onShowSummaryClick = () => {};

  return (
    <div className={styles.menuButton}>
      <button onClick={onShowSummaryClick}>
        <div className={styles.menuButtonContent}>Your Card</div>
      </button>
    </div>
  );
};
