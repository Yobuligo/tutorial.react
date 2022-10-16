import { LessonItem } from "./LessonItem";
import "./LessonsOverview.css";
import { ILesson } from "./model/ILesson";

export const LessonsOverview: React.FC<{
  lessons: ILesson[];
  onLessonSelected: (selectedLesson: ILesson) => void;
}> = (props) => {
  const items = props.lessons.map((lesson) => {
    return (
      <LessonItem
        key={lesson.id}
        lesson={lesson}
        onLessonSelected={(selectedLesson) => {
          props.onLessonSelected(selectedLesson);
        }}
      />
    );
  });
  return <div className="lessons-overview">{items}</div>;
};
