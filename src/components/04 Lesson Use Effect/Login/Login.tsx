import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { MessageCard } from "../../core/MessageCard/MessageCard";
import styles from "./Login.module.css";
import { LoginButton } from "./LoginButton";

export const Login = () => {
  const LOGGED_IN = "LOGGED_IN";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [areCredentialsValid, setAreCredentialsValid] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log("Login component mounted")

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const onEmailChangedHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onPasswordChangedHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    const loggedIn = localStorage.getItem(LOGGED_IN);
    if (loggedIn && loggedIn === "1") {     
      setIsLoggedIn(true);
    }
    console.log("UseEffect to check if user is logged in executed")
  }, []);

  useEffect(() => {
    console.log("timer set")
    const timeout = setTimeout(() => {
      console.log("timer timeout")
      if (email.includes("@") && password.trim().length > 6) {
        setAreCredentialsValid(true);
      } else {
        setAreCredentialsValid(false);
      }
    }, 500);

    console.log("UseEffect to update login button executed")

    return () => {
      console.log(`timer reset ${timeout}`)
      clearTimeout(timeout);
    };
  }, [email, password]);

  const onLogoutHandler = () => {
    localStorage.removeItem(LOGGED_IN);
    setIsLoggedIn(false);
  };

  console.log("Login component mounted completed")
  return (
    <>
      <div className={styles.toolbar}>
        <button type="button" onClick={onLogoutHandler}>
          Logout
        </button>
      </div>
      <div>
        {!isLoggedIn ? (
          <form className={stvscodeyles.login} onSubmit={onSubmitHandler}>
            <header className={styles.header}>Login</header>
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
            <footer className={styles.footer}>
              <LoginButton
                disabled={!areCredentialsValid}
                onClick={() => {
                  console.log("User was logged in");
                  localStorage.setItem(LOGGED_IN, "1");
                  setIsLoggedIn(true);
                }}
              />
            </footer>
          </form>
        ) : (
          <>
            <MessageCard message="Welcome User" />
          </>
        )}
      </div>
    </>
  );
};
