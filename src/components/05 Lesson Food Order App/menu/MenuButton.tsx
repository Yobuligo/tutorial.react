import { useContext } from "react";
import { Context } from "../model/Context";
import styles from "./MenuButton.module.css";

export const MenuButton: React.FC = () => {
  const ctx = useContext(Context)
  const onShowSummaryClick = ()=>{
    ctx.shoppingCartPositions.map((shoppingCartPosition) => {
      return <></>
    })
  }

  return (
    <div className={styles.menuButton}>
      <button onClick={onShowSummaryClick}>
        <div className={styles.menuButtonContent}>Your Card</div>
      </button>
    </div>
  );
};
