import { useCallback, useEffect, useState } from "react";
import IMovie from "../model/IMovie";
import LoadingText from "./LoadingText";
import Movie from "./Movie";
import styles from "./MovieList.module.css";

export const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const toMovie = (data: any): IMovie[] => {
    return data.map((row: any) => {
      return { ...row };
    });
  };

  const fetchMovies = useCallback(async () => {
    const response = await fetch("http://localhost:8080/api/movies");
    const data = await response.json();
    setMovies(toMovie(data));
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  // async function onLoadMoviesHandlerAsyncAwait() {
  //   console.log(`Start loading movies ...`);
  //   setIsLoading(true);
  //   const response = await fetch("https://swapi.dev/api/films/");
  //   const data = await response.json();

  //   const movies: IMovie[] = data.results.map((movieData: any) => {
  //     return {
  //       id: movieData.episode_id,
  //       title: movieData.title,
  //       episodeId: movieData.episode_id,
  //       openingText: movieData.opening_crawl,
  //     };
  //   });
  //   setMovies(movies);

  //   setIsLoading(false);
  //   console.log(`Stop loading movies ...`);
  // }

  // const onLoadMoviesHandler = () => {
  //   setIsLoading(true);
  //   fetch("https://swapi.dev/api/films/")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data: any) => {
  //       const movies: IMovie[] = data.results.map((movieData: any) => {
  //         return {
  //           id: movieData.episode_id,
  //           title: movieData.title,
  //           episodeId: movieData.episode_id,
  //           openingText: movieData.opening_crawl,
  //         };
  //       });
  //       setMovies(movies);
  //       setIsLoading(false);
  //     });
  // };

  const items = movies.map((movie) => {
    return <Movie key={movie.id} movie={movie} />;
  });
  return (
    <main className={styles.movieList}>
      {isLoading && <LoadingText />}
      {!isLoading && items}
    </main>
  );
};
