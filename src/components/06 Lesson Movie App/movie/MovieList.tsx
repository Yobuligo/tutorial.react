import { useCallback, useEffect, useState } from "react";
import IMovie from "../model/IMovie";
import { ErrorText } from "./ErrorText";
import LoadingText from "./LoadingText";
import Movie from "./Movie";
import styles from "./MovieList.module.css";

export const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error>();

  const toMovie = (data: any): IMovie[] => {
    return data.map((row: any) => {
      return { ...row };
    });
  };

  const prepareFetchData = () => {
    setMovies([]);
    setIsLoading(true);
    setError(undefined);
  };

  const fetchMovies = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:8080/api/movies");
      const data = await response.json();
      setMovies(toMovie(data));
      setIsLoading(false);
      setError(undefined);
    } catch (error: any) {
      setIsLoading(false);
      setError(error);
    }
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const items = movies.map((movie) => {
    return <Movie key={movie.id} movie={movie} />;
  });
  return (
    <main className={styles.movieList}>
      <button
        onClick={() => {
          prepareFetchData();
          setTimeout(() => {
            fetchMovies();
          }, 2000);
        }}
      >
        Fetch Data
      </button>
      {isLoading && <LoadingText />}
      {!isLoading && items}
      {error && <ErrorText error={error} />}
    </main>
  );
};
