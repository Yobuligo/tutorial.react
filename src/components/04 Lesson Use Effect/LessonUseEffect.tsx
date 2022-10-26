import { FC } from "react";
import { ILesson } from "../Lessons/model/ILesson";
import { Login } from "./Login/Login";
import { AuthContext } from "./store/AuthContext";

export class LessonUseEffect implements ILesson {
  id: string = "LessonUseEffect";
  title: string = "Lesson Use Effect";
  component: FC<{}> = () => {
    return (
      <>
        <AuthContext.Provider value={{ isLogged: false }}>
          <Login />
        </AuthContext.Provider>
      </>
    );
  };
}
