import { useState } from "react";
import "./GoalsForm.css";

export const GoalsForm: React.FC<{ onAddGoal: (goalTitle: string) => void }> = (
  props
) => {
  const [goalTitle, setGoalTitle] = useState<string>("");
  const [isGoalTitleValid, setIsGoalTitleValid] = useState(true);

  const resetGoalTitle = () => {
    setGoalTitle("");
  };

  return (
    <div className={`goals-form ${!isGoalTitleValid ? "invalid" : ""}`}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (goalTitle.length === 0) {
            setIsGoalTitleValid(false);
            return;
          }

          props?.onAddGoal(goalTitle);
          resetGoalTitle();
        }}
      >
        <div>
          <h2>Goal</h2>
          <input
            type="text"
            value={goalTitle}
            onChange={(event) => {
              setGoalTitle(event.target.value);
              if (goalTitle.length > 0) {
                setIsGoalTitleValid(true);
              }
            }}
          />
        </div>
        <button type="submit">Add goal</button>
      </form>
    </div>
  );
};
