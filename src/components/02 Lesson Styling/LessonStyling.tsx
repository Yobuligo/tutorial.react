import { ILesson } from "../Lessons/model/ILesson";

export class LessonStyling implements ILesson {
  id: string = "LessonStyling";
  title: string = "Lesson Styling";
  component: React.FC<{}> = () => {
    return <div></div>;
  };
}
