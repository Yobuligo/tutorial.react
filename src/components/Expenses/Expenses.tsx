import { useState } from "react";
import { ExpensesFilter } from "../ExpenseFilter/ExpensesFilter";
import { Card } from "../UI/Card";

import "./Expenses.css";
import { ExpensesChart } from "./ExpensesChart";
import { ExpensesList } from "./ExpensesList";

export const Expenses = (props: any) => {
  const [filteredYear, setFilteredYear] = useState("2019");
  const filterChangeHandler = (filteredYear: any) => {
    console.log(`Selected year was ${filteredYear}`);
    setFilteredYear(filteredYear);
  };

  const filteredExpenses = props.items.filter((element: any) => {
    return element.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onFilterChange={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};
