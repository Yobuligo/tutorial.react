import { Outlet } from "react-router-dom";
import { Card } from "../../core/Card/Card";
import { IMenuEntry } from "../model/IMenuEntry";
import styles from "./Main.module.css";
import MenuEntry from "./MenuEntry";

const Main: React.FC<{ menuEntries: IMenuEntry[] }> = (props) => {
  const items = props.menuEntries.map((menuEntry) => {
    return <MenuEntry path={menuEntry.path} title={menuEntry.title} />;
  });
  
  return (
    <Card>
      <div className={styles.main}>{items}</div>
      <Outlet />
    </Card>
  );
};

export default Main;
