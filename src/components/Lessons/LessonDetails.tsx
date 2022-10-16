import "./LessonDetails.css";
import { ILesson } from "./model/ILesson";

export const LessonDetails: React.FC<{ lesson: ILesson }> = (props) => {
  return (
    <div className="lesson-details">
      <h2>{props.lesson.title}</h2>
      <div>{props.lesson.component({}, {})}</div>
    </div>
  );
};
