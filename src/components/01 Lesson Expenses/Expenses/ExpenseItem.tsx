import { CardExpenses } from "../UI/CardExpenses";
import { ExpenseDate } from "./ExpenseDate";
import "./ExpenseItem.css";

export const ExpenseItem = (props: any) => {
  return (
    <li>
      <CardExpenses className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">€ {props.amount}</div>
        </div>
      </CardExpenses>
    </li>
  );
};
