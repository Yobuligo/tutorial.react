import { useState } from "react";
import { ILesson } from "../Lessons/model/ILesson";
import { Expenses } from "./Expenses/Expenses";
import { NewExpense } from "./NewExpense/NewExpense";

export class LessonExpenses implements ILesson {
  id: string = "LessonExpenses";
  title: string = "Lesson Expenses";

  component: React.FC = () => {
    const EXPENSES_DUMMY = [
      { id: 1, title: "Table", amount: 194.67, date: new Date(Date.now()) },
      { id: 2, title: "Plant", amount: 10.99, date: new Date(Date.now()) },
      { id: 3, title: "Screen", amount: 499.99, date: new Date(Date.now()) },
      { id: 4, title: "Screen", amount: 499.99, date: new Date(Date.now()) },
    ];

    const [expenses, setExpenses] = useState(EXPENSES_DUMMY);

    const addExpenseHandler = (enteredExpenseData: any) => {
      // instead of setting the enteredExpenseData and the existing it seems it could be possible to use setExpense([enteredExpenseData, ...expenses])
      // But as expenses could be changed at runtime, instead a function should be implemented. It provides the current or previous value of the useState.
      // So it can be accessed (here via variable prevExpenses) and added to the return list
      setExpenses((prevExpenses) => {
        return [enteredExpenseData, ...prevExpenses];
      });
    };

    return (
      <div>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses} />
      </div>
    );
  };
}
