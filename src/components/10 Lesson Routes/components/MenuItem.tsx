import { Link } from "react-router-dom";
import styles from "./MenuItem.module.css";

const MenuItem: React.FC<{ title: string; path: string }> = (props) => {
  return (
    <div className={styles.menuItem}>
      <Link to={props.path}>{props.title}</Link>
    </div>
  );
};

export default MenuItem;
