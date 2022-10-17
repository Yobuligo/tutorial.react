import { ILesson } from "../Lessons/model/ILesson";
import { Users } from "./Users";

export class LessonPracticeProject implements ILesson {
  id: string = "PracticeProject";
  title: string = "Practice Project";
  component: React.FC<{}> = () => {
    return (
      <div>
        <Users />
      </div>
    );
  };
}
