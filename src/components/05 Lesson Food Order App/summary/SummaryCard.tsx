import { IShoppingCartPosition } from "../model/IShoppingCartPosition";
import styles from "./SummaryCard.module.css";

export const SummaryCard: React.FC<{
  shoppingCardPosition: IShoppingCartPosition;
}> = (props) => {
  return (
    <div className={styles.summaryCard}>
      {props.shoppingCardPosition.meal.title}
    </div>
  );
};
