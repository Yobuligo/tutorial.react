import { IUser } from "./model/IUser";
import styles from './UserItem.module.css'

export const UserItem: React.FC<{ user: IUser }> = (props) => {
  return (
    <div className={styles.UserItem}>
      {props.user.username} ({props.user.age} years old)
    </div>
  );
};
