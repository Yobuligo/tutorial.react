import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import styles from "./Login.module.css";
import { LoginButton } from "./LoginButton";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [areCredentialsValid, setAreCredentialsValid] = useState(true);

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const onEmailChangedHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onPasswordChangedHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  // useEffect(() => {
  //   if (email.length === 0 && !email.includes("@")) {
  //     setAreCredentialsValid(false);
  //     return;
  //   }

  //   if (password.length === 0) {
  //     setAreCredentialsValid(false);
  //     return;
  //   }

  //   setAreCredentialsValid(true);
  // }, [email, password, areCredentialsValid]);

  return (
    <>
      <form className={styles.login} onSubmit={onSubmitHandler}>
        <div className={styles.block}>
          <label htmlFor="inputEmail">E-Mail</label>
          <input
            id="inputEmail"
            type="text"
            value={email}
            onChange={onEmailChangedHandler}
          />
        </div>
        <div className={styles.block}>
          <label htmlFor="inputPassword">Password</label>
          <input
            id="inputPassword"
            type="password"
            value={password}
            onChange={onPasswordChangedHandler}
          />
        </div>
        <LoginButton disabled={areCredentialsValid} />
      </form>
    </>
  );
};
