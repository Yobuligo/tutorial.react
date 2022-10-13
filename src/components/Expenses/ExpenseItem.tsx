import { Card } from "../UI/Card";
import { ExpenseDate } from "./ExpenseDate";
import "./ExpenseItem.css";

export const ExpenseItem = (props: any) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">€ {props.amount}</div>
        <button
          onClick={() => {
            console.log("Clicked");
          }}
        >
          Change Title
        </button>
      </div>
    </Card>
  );
};