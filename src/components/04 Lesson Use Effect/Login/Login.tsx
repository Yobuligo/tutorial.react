import {
  ChangeEvent,
  FormEvent,
  Reducer,
  useEffect,
  useReducer,
  useState,
} from "react";
import { MessageCard } from "../../core/MessageCard/MessageCard";
import styles from "./Login.module.css";
import { LoginButton } from "./LoginButton";

enum LoginAction {
  SET_EMAIL,
  SET_PASSWORD,
}

type ILoginAction =
  | { type: LoginAction.SET_EMAIL; email: string }
  | { type: LoginAction.SET_PASSWORD; password: string };

interface ILoginState {
  email: string;
  password: string;
  credentialsAreValid: boolean;
}

const loginReducer: Reducer<ILoginState, ILoginAction> = (
  prevState: ILoginState,
  action: ILoginAction
) => {
  const newState = { ...prevState };
  switch (action.type) {
    case LoginAction.SET_EMAIL: {
      newState.email = action.email;
      break;
    }
    case LoginAction.SET_PASSWORD: {
      newState.password = action.password;
      break;
    }
  }

  newState.credentialsAreValid =
    newState.email.includes("@") && newState.password.trim().length > 6;

  return newState;
};

export const Login = () => {
  const LOGGED_IN = "LOGGED_IN";

  const [loginState, dispatchLoginAction] = useReducer<
    Reducer<ILoginState, ILoginAction>
  >(loginReducer, {
    credentialsAreValid: true,
    email: "",
    password: "",
  });

  const [areCredentialsValid, setAreCredentialsValid] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log("Login component mounted");

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const onEmailChangedHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatchLoginAction({
      type: LoginAction.SET_EMAIL,
      email: event.target.value,
    });
  };

  const onPasswordChangedHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatchLoginAction({
      type: LoginAction.SET_PASSWORD,
      password: event.target.value,
    });
  };

  useEffect(() => {
    const loggedIn = localStorage.getItem(LOGGED_IN);
    if (loggedIn && loggedIn === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    console.log("timer set");
    const timeout = setTimeout(() => {
      console.log("timer timeout");
      setAreCredentialsValid(loginState.credentialsAreValid);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [loginState.email, loginState.password, loginState.credentialsAreValid]);

  const onLogoutHandler = () => {
    localStorage.removeItem(LOGGED_IN);
    setIsLoggedIn(false);
  };

  console.log("Login component mounted completed");
  return (
    <>
      <div className={styles.toolbar}>
        <button type="button" onClick={onLogoutHandler}>
          Logout
        </button>
      </div>
      <div>
        {!isLoggedIn ? (
          <form className={styles.login} onSubmit={onSubmitHandler}>
            <header className={styles.header}>Login</header>
            <div className={styles.block}>
              <label htmlFor="inputEmail">E-Mail</label>
              <input
                id="inputEmail"
                type="text"
                value={loginState.email}
                onChange={onEmailChangedHandler}
              />
            </div>
            <div className={styles.block}>
              <label htmlFor="inputPassword">Password</label>
              <input
                id="inputPassword"
                type="password"
                value={loginState.password}
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
