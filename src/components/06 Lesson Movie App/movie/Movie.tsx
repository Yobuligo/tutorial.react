import IMovie from "../model/IMovie";
import styles from "./Movie.module.css";

const Movie: React.FC<{ movie: IMovie }> = (props) => {
  return (
    <section className={styles.movie}>
      <h3>{`${props.movie.title} (${props.movie.year})`}</h3>      
      {props.movie.length} min
      <p>{props.movie.genre}</p>
    </section>
  );
};

export default Movie;
