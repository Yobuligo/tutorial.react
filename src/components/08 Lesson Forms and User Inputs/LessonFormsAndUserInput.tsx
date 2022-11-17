import { FC } from "react";
import { Card } from "../core/Card/Card";
import { ILesson } from "../Lessons/model/ILesson";
import styles from "./LessonFormsAndUserInput.module.css";

class LessonFormsAndUserInput implements ILesson {
  id: string = "LessonFormsAndUserInput";
  title: string = "Lesson Forms and User Input";
  component: FC<{}> = () => {
    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
    };

    return (
      <div className={styles.lessonFormsAndUserInput}>
        <Card>
          <form onSubmit={onSubmitHandler}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" />
            <div className={styles.submitButton}>
              <button type="submit">Submit</button>
            </div>
          </form>
        </Card>
      </div>
    );
  };
}

export default LessonFormsAndUserInput;
