import { NavLink } from "react-router-dom";
import styles from "./MenuEntry.module.css";

const MenuEntry: React.FC<{ path: string; title: string }> = (props) => {
  return (
    <div className={styles.menuEntry}>
      <NavLink
        className={({ isActive }) => {
          return isActive ? styles.isActive : "";
        }}
        to={props.path}
      >
        {props.title}
      </NavLink>
    </div>
  );
};

export default MenuEntry;
