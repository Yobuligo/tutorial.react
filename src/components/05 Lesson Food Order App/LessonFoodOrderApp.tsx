import { FC } from "react";
import { ILesson } from "../Lessons/model/ILesson";
import { FoodOrderApp } from "./FoodOrderApp";

export class LessonFoodOrderApp implements ILesson {
  id: string = "FoodOrderApp";
  title: string = "Food Order App";
  component: FC<{}> = () => {
    return <FoodOrderApp />;
  };
}
