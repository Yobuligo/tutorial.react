import "./App.css";
import { Expenses } from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    { title: "Table", amount: 194.67, date: new Date(Date.now()) },
    { title: "Plant", amount: 10.99, date: new Date(Date.now()) },
    { title: "Screen", amount: 499.99, date: new Date(Date.now()) },
    { title: "Screen", amount: 499.99, date: new Date(Date.now()) },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
