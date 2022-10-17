import { useState } from "react";
import { IUser } from "./model/IUser";
import { IdGenerator } from "./services/IdGenerator";
import { UserForm } from "./UserForm";
import { UserOverview } from "./UserOverview";

export const Users: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  return (
    <div>
      <UserForm
        onAddUser={(username, age) => {
          setUsers((present) => {
            return [{ id: IdGenerator.next().toString(), username: username, age: age }, ...present];
          });
        }}
      />
      <UserOverview users={users} />
    </div>
  );
};
