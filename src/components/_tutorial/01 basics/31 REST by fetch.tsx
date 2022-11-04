// To call a REST service you can either use frameworks like Axios or you can use the integrated fetch method of JavaScript.
// Fetch returns a promise and if the promise is kept e.g. a result list can be filled which is declared as a useState.

import { useEffect, useState } from "react";

interface IMovie {
  id: number;
  episodeId: number;
  title: string;
  openingText: string;
}

export const RESTByFetchComponent: React.FC = () => {
  const [movies, setMovies] = useState<IMovie[]>();

  useEffect(() => {
    fetch("https://swapi.dev/api/films/")
      .then((response) => {
        return response.json();
      })
      .then((data: any) => {
        const formattedData: IMovie[] = data.results.map((movieData: any) => {
          return {
            id: movieData.episode_id,
            episodeId: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
          };
        });
        setMovies(formattedData);
      });
  }, []);

  return <>{movies}</>;
};
