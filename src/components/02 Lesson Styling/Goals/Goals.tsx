import { useState } from "react";

import { GoalsForm } from "./GoalsForm";
import { GoalsList } from "./GoalsList";

import "./Goals.css";
import { IdGenerator } from "./models/IdGenerator";
import { IGoal } from "./models/IGoal";

export const Goals: React.FC = () => {
  const [goals, setGoals] = useState<IGoal[]>([
    { id: IdGenerator.next(), title: "Learn React" },
    { id: IdGenerator.next(), title: "Learn TypeScript" },
  ]);

  const onAddGoalHandler = (goalTitle: string) => {
    setGoals((actual) => {
      return [{ id: IdGenerator.next(), title: goalTitle }, ...actual];
    });
  };

  const onRemoveGoalHandler = (goal: IGoal) => {
    setGoals((actual) => {
      return actual.filter((item) => {
        return item.id !== goal.id;
      });
    });
  };

  return (
    <div className="goals">
      <GoalsForm onAddGoal={onAddGoalHandler} />
      <GoalsList goals={goals} onGoalClicked={onRemoveGoalHandler} />
    </div>
  );
};
