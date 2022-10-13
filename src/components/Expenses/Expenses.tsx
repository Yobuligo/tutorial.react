import { useState } from "react";
import { ExpensesFilter } from "../ExpenseFilter/ExpensesFilter";
import { Card } from "../UI/Card";
import { ExpenseItem } from "./ExpenseItem";

import "./Expenses.css";

export const Expenses = (props: any) => {
  const [filteredYear, setFilteredYear] = useState("2019")
  const filterChangeHandler = (filteredYear: any) => {
    console.log(`Selected year was ${filteredYear}`);
    setFilteredYear(filteredYear)
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selectedYear={filteredYear} onFilterChange={filterChangeHandler} />

      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
    </Card>
  );
};
