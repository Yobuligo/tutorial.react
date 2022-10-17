import { useState } from "react";
import styles from "./UserForm.module.css";

export const UserForm: React.FC<{
  onAddUser: (username: string, age: number) => void;
}> = (props) => {
  const [username, setUsername] = useState<string>();
  const [age, setAge] = useState<number>();

  return (
    <form
      className={styles.UserForm}
      onSubmit={(event) => {
        event.preventDefault();
        if (username !== undefined && age !== undefined) {
          props.onAddUser(username, age);
        }
      }}
    >
      <div className={styles.Username}>
        <label>Username</label>
        <div>
          <input
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </div>
      </div>
      <div>
        <label>Age (Years)</label>
        <div>
          <input
            onChange={(event) => {
              setAge(Number(event.target.value));
            }}
          />
        </div>
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};
