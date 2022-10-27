import { useContext } from "react";
import { Context } from "../model/Context";
import { SummaryCard } from "./SummaryCard";
import styles from "./SummaryList.module.css";

export const SummaryList: React.FC = () => {
  const ctx = useContext(Context);
  const items = ctx.meals.map((meal) => {
    return <SummaryCard key={meal.id} meal={meal} />;
  });

  return <div className={styles.summaryList}>{items}</div>;
};
