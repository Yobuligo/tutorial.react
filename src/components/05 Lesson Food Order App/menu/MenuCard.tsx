import { useContext, useState } from "react";
import { Card } from "../../core/Card/Card";
import { Context } from "../model/Context";
import { IMeal } from "../model/IMeal";
import styles from "./MenuCard.module.css";

export const MenuCard: React.FC<{
  meal: IMeal;
}> = (props) => {
  const [amount, setAmount] = useState<string>("0");
  const ctx = useContext(Context);
  const onChangeEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  const onAddMealEventHandler = () => {
    console.log(`Add ${amount} of ${props.meal.title} to shopping cart.`);
    ctx.onAddMeal(props.meal, Number(amount));
  };

  return (
    <div className={styles.frame}>
      <Card>
        <div className={styles.menuCard}>
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
                min="1"
                max="2"
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
