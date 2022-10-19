import "./LessonDetails.module.css";
import styles from "./LessonDetails.module.css";
import { ILesson } from "./model/ILesson";

export const LessonDetails: React.FC<{ lesson: ILesson }> = (props) => {
  return (
    <>
      <div>
        <header className={styles.header}>{props.lesson.title}</header>
        <div>
          <div>{props.lesson.component({}, {})}</div>
        </div>
      </div>
    </>
  );
};
