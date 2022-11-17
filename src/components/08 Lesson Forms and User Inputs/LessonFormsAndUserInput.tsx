import { FC } from "react";
import { ILesson } from "../Lessons/model/ILesson";
import SimpleForm from "./SimpleForm";

class LessonFormsAndUserInput implements ILesson {
  id: string = "LessonFormsAndUserInput";
  title: string = "Lesson Forms and User Input";
  component: FC<{}> = () => {
    return <SimpleForm />;
  };
}

export default LessonFormsAndUserInput;
