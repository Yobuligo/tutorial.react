import { Card } from "../../core/Card/Card";
import { IMeal } from "../model/IMeal";
import styles from "./SummaryCard.module.css";

export const SummaryCard: React.FC<{ meal: IMeal }> = (props) => {
  return (
    <div className={styles.frame}>
      <Card>
        <div className={styles.summaryCard}>
          <div className={styles.details}>
            <h3>{props.meal.title}</h3>
            <div>{props.meal.description}</div>
            <div>{props.meal.price} €</div>
          </div>
          <div className={styles.control}>
            <div className={styles.input}>
              <label htmlFor="amount">Amount</label>
              <input id="amount" type="number" />
            </div>
            <button>+</button>
            <button>-</button>
          </div>
        </div>
      </Card>
    </div>
  );
};
