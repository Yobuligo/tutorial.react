import "./App.css";
import { Expenses } from "./components/Expenses/Expenses";
import { NewExpense } from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    { id: 1, title: "Table", amount: 194.67, date: new Date(Date.now()) },
    { id: 2, title: "Plant", amount: 10.99, date: new Date(Date.now()) },
    { id: 3, title: "Screen", amount: 499.99, date: new Date(Date.now()) },
    { id: 4, title: "Screen", amount: 499.99, date: new Date(Date.now()) },
  ];

  const addExpenseHandler = (enteredExpenseData: any) => {
    console.log(enteredExpenseData);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
