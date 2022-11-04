import IMovie from "../model/IMovie";
import styles from "./Movie.module.css";

const Movie: React.FC<{ movie: IMovie }> = (props) => {
  return (
    <section className={styles.movie}>
      <h3>{props.movie.title}</h3>
      Episode-Id: {props.movie.episodeId}
      <p>{props.movie.openingText}</p>
    </section>
  );
};

export default Movie;
