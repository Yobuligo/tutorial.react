import "./Goal.css";
import { IGoal } from "./models/IGoal";

export const Goal: React.FC<{
  goal: IGoal;
  onGoalClicked: (goal: IGoal) => void;
}> = (props) => {
  const onGoalClickedHandler = () => {
    props.onGoalClicked(props.goal);
  };

  return (
    <div className="goal" onClick={onGoalClickedHandler}>
      {props.goal.title}
    </div>
  );
};
