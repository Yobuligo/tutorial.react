import { useState } from "react";
import { IUser } from "./model/IUser";
import { IdGenerator } from "./services/IdGenerator";
import { UserForm } from "./UserForm";
import { UsersList } from "./UsersList";

export const Users: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  return (
    <div>
      <UserForm
        onAddUser={(username, age) => {
          setUsers((present) => {
            return [
              {
                id: IdGenerator.next().toString(),
                username: username,
                age: age,
              },
              ...present,
            ];
          });
        }}
      />
      <UsersList users={users} />
    </div>
  );
};
