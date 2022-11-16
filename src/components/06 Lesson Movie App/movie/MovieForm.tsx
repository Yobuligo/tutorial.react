import { useState } from "react";
import { Card } from "../../core/Card/Card";
import IMovie from "../model/IMovie";

import styles from "./MovieForm.module.css";

const MovieForm: React.FC<{ onAddMovie?: (movie: IMovie) => void }> = (
  props
) => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState(0);
  const [length, setLength] = useState(0);
  const [genre, setGenre] = useState("");

  const onTitleChangedHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTitle(event.target.value);
  };
  const onYearChangedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setYear(+event.target.value);
  };
  const onLengthChangedHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLength(+event.target.value);
  };
  const onGenreChangedHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setGenre(event.target.value);
  };

  const onAddMovieHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onAddMovie?.({
      id: 0,
      title: title,
      year: year,
      genre: genre,
      length: length,
    });
  };

  return (
    <Card>
      <form className={styles.movieForm} onSubmit={onAddMovieHandler}>
        <label htmlFor="title">Title</label>
        <input type="text" value={title} onChange={onTitleChangedHandler} />
        <label htmlFor="year">Year</label>
        <input
          type="number"
          value={year}
          min={1900}
          onChange={onYearChangedHandler}
        />
        <label htmlFor="length">Length</label>
        <input type="number" value={length} onChange={onLengthChangedHandler} />
        <label htmlFor="genre">Genre</label>
        <input type="text" value={genre} onChange={onGenreChangedHandler} />
        <div className={styles.movieFormButton}>
          <button type="submit">Add movie</button>
        </div>
      </form>
    </Card>
  );
};

export default MovieForm;
