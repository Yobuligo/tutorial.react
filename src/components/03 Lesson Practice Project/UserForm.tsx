import { useState } from "react";
import { AddButton } from "./AddButton";
import styles from "./UserForm.module.css";

export const UserForm: React.FC<{
  onAddUser: (username: string, age: number) => void;
}> = (props) => {
  const [username, setUsername] = useState<string>();
  const [age, setAge] = useState<number>();

  return (
    <form
      className={styles.userForm}
      onSubmit={(event) => {
        event.preventDefault();

        if (username !== undefined && age !== undefined) {
          props.onAddUser(username, age);
        }
      }}
    >
      <div className={styles.block}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
      </div>
      <div className={styles.block}>
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          onChange={(event) => {
            setAge(Number(event.target.value));
          }}
        />
      </div>

      <AddButton caption="Add User" type="submit" />
    </form>
  );
};
