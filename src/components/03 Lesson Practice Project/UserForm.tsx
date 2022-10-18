import { useState } from "react";
import { Button } from "./Button";
import { ErrorModal } from "./ErrorModal";
import styles from "./UserForm.module.css";

export const UserForm: React.FC<{
  onAddUser: (username: string, age: number) => void;
}> = (props) => {
  const [username, setUsername] = useState<string>();
  const [age, setAge] = useState<string>();

  return (
    <div>
      <ErrorModal title="An error occurred!" message="Something went wrong!" />
      <form
        className={styles.userForm}
        onSubmit={(event) => {
          event.preventDefault();
          if (username !== undefined && age !== undefined && +age > 0) {
            props.onAddUser(username, Number(age));
            setUsername("");
            setAge("");
          }
        }}
      >
        <div className={styles.block}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
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
            value={age}
            onChange={(event) => {
              setAge(event.target.value);
            }}
          />
        </div>

        <Button caption="Add User" type="submit" />
      </form>
    </div>
  );
};
