import "./LessonItem.css";
import { ILesson } from "./model/ILesson";

export const LessonItem: React.FC<{
  lesson: ILesson;
  onLessonSelected: (selectedLesson: ILesson) => void;
}> = (props) => {
  const onLessonClickedHandler = () => {
    props.onLessonSelected(props.lesson);
  };
  return (
    <div className="lesson-item" onClick={onLessonClickedHandler}>
      {props.lesson.title}
    </div>
  );
};
