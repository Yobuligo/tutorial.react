import { ExpenseForm } from "./ExpenseForm";
import "./NewExpense.css";

export const NewExpense = (props: any) => {
  const saveExpenseDataHandler = (enteredExpenseData: any) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData)
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};
