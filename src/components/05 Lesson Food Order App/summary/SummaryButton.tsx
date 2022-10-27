import { Card } from "../../core/Card/Card";
import styles from "./SummaryButton.module.css";

export const SummaryButton: React.FC = () => {
  return (
    <div className={styles.summaryButton}>
      <button>
        <div className={styles.summaryButtonContent}>
        Your Card
        </div>
      </button>
    </div>
  );
};
