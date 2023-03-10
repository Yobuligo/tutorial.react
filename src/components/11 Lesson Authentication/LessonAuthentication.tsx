import { FC } from "react";
import { ILesson } from "../Lessons/model/ILesson";
import Authentication from "./components/Authentication";

class LessonAuthentication implements ILesson {
  id: string = "lessonAuthentication";
  title: string = "Lesson Authentication";
  component: FC<{}> = () => {
    return (
      <>
        <Authentication />
      </>
    );
  };
}

export default LessonAuthentication;
