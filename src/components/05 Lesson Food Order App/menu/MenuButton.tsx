import styles from "./MenuButton.module.css";

export const MenuButton: React.FC = () => {
  return (
    <div className={styles.menuButton}>
      <button>
        <div className={styles.menuButtonContent}>Your Card</div>
      </button>
    </div>
  );
};
