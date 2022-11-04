import { useEffect, useState } from "react";
import IMovie from "../model/IMovie";
import Movie from "./Movie";
import styles from "./MovieList.module.css";

export const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<IMovie[]>([
    {
      id: 1,
      episodeId: 1,
      openingText: "Any Opening Text",
      title: "My Title",
    },
  ]);

  useEffect(() => {
    fetch("https://swapi.dev/api/films/")
      .then((response) => {
        return response.json();
      })
      .then((data: any) => {
        const movies: IMovie[] = data.results.map((movieData: any) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            episodeId: movieData.episode_id,
            openingText: movieData.opening_crawl,
          };
        });
        setMovies(movies);
      });
  }, []);

  const items = movies.map((movie) => {
    return <Movie key={movie.id} movie={movie} />;
  });
  return <main className={styles.movieList}>{items}</main>;
};
