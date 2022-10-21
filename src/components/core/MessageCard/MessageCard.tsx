import { Card } from "../Card/Card";
import styles from "./MessageCard.module.css";

export const MessageCard: React.FC<{ message: string }> = (props) => {
  return (
    <div className={styles.messageCard}>
      <Card>
        <h1>{props.message}</h1>
      </Card>
    </div>
  );
};
