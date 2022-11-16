import { FC } from "react";
import { ILesson } from "../Lessons/model/ILesson";
import CountDown from "./CountDown";
import CountUp from "./CountUp";

class LessonCounterApp implements ILesson {
  id: string = "LessonCounterApp";
  title: string = "Lesson Counter App";
  component: FC<{}> = () => {
    return (
      <>
        <CountUp />
        <CountDown />
      </>
    );
  };
}
export default LessonCounterApp;
