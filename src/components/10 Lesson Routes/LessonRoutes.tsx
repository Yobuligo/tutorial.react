import { FC } from "react";
import { ILesson } from "../Lessons/model/ILesson";
import RoutesApp from "./RoutesApp";

export class LessonRoutes implements ILesson {
  id: string = "lessonRoutes";
  title: string = " Lesson Routes";
  component: FC<{}> = () => {
    return <RoutesApp />;
  };
}
