import { useState } from "react";
import { Card } from "../../core/Card/Card";
import { IMeal } from "../model/IMeal";
import styles from "./SummaryCard.module.css";

export const SummaryCard: React.FC<{
  meal: IMeal;
  onAddMeal?: (meal: IMeal, amount: number) => void;
}> = (props) => {
  const [amount, setAmount] = useState<string>("0");
  const onChangeEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  const onAddMealEventHandler = () => {
    console.log(`Add ${amount} of ${props.meal.title} to shopping cart.`);
    props.onAddMeal?.(props.meal, Number(amount));
  };

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
              <input
                id="amount"
                type="number"
                onChange={onChangeEventHandler}
              />
            </div>
            <button type="button" onClick={onAddMealEventHandler}>
              + Add
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};
