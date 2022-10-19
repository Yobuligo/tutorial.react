import { FC } from "react";
import { ILesson } from "../Lessons/model/ILesson";
import { Login } from "./Login/Login";

export class LessonUseEffect implements ILesson {
  id: string = "LessonUseEffect";
  title: string = "Lesson Use Effect";
  component: FC<{}> = () => {
    return (
      <>
        <Login />
      </>
    );
  };
}
