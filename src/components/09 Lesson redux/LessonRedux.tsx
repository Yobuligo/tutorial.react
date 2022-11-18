import { FC } from "react";
import { ILesson } from "../Lessons/model/ILesson";

export class LessonRedux implements ILesson {
  id: string = "LessonRedux";
  title: string = "Lesson Redux";
  component: FC<{}> = () => {
    return <></>;
  };
}
