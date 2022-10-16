import { ILesson } from "../Lessons/model/ILesson";
import { Goals } from "./Goals/Goals";

export class LessonStyling implements ILesson {
  id: string = "LessonStyling";
  title: string = "Lesson Styling";
  component: React.FC<{}> = () => {
    return (
      <div>
        <Goals />
      </div>
    );
  };
}
