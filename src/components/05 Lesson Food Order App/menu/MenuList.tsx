import { useContext } from "react";
import { Context } from "../model/Context";
import { MenuCard } from "./MenuCard";
import styles from "./MenuList.module.css";

export const MenuList: React.FC = () => {
  const ctx = useContext(Context);
  const items = ctx.meals.map((meal) => {
    return <MenuCard key={meal.id} meal={meal} />;
  });

  return <div className={styles.menuList}>{items}</div>;
};
