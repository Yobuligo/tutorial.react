import styles from "./Summary.module.css";
import { SummaryList } from "./SummaryList";

export const Summary: React.FC = () => {
  return (
    <div className={styles.summary}>
      <SummaryList />
    </div>
  );
};
