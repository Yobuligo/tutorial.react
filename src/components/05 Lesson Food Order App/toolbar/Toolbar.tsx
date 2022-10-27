import { SummaryButton } from "../summary/SummaryButton";
import styles from "./Toolbar.module.css";

export const Toolbar: React.FC = () => {
  return (
    <div className={styles.toolbar}>
      <div><h1>React Meals</h1></div>
      <div className={styles.summaryButton}>
        <SummaryButton />
      </div>
    </div>
  );
};
