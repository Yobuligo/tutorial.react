import { Goal } from "./Goal";
import "./GoalsList.css";
import { IGoal } from "./models/IGoal";

export const GoalsList: React.FC<{
  goals?: IGoal[];
  onGoalClicked: (goal: IGoal) => void;
}> = (props) => {
  const items = props.goals?.map((goal) => {
    return (
      <Goal key={goal.id} goal={goal} onGoalClicked={props.onGoalClicked} />
    );
  });

  return <div className="goals-list">{items}</div>;
};
