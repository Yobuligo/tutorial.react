import { FC } from "react";
import { ILesson } from "../Lessons/model/ILesson";
import { MovieList } from "./movie/MovieList";

class LessonMovieApp implements ILesson {
  id: string = "LessonMovieApp";
  title: string = "Movie App";
  component: FC<{}> = () => {
    return (
      <>
        <MovieList />
      </>
    );
  };
}

export default LessonMovieApp;
