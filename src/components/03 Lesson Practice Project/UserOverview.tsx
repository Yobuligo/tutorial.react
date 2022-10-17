import { IUser } from "./model/IUser";
import { UserItem } from "./UserItem";

export const UserOverview: React.FC<{ users: IUser[] }> = (props) => {
  const items = props.users.map((user) => {
    return <UserItem key={user.id} user={user} />;
  });
  return <div>{items}</div>;
};
