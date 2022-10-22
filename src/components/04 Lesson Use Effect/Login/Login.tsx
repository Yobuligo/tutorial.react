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
  credentialsValid: boolean;
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

  newState.credentialsValid =
    newState.email.includes("@") && newState.password.trim().length > 6;

  return newState;
};

export const Login = () => {
  const LOGGED_IN = "LOGGED_IN";

  const [loginState, dispatchLoginAction] = useReducer<
    Reducer<ILoginState, ILoginAction>
  >(loginReducer, {
    credentialsValid: true,
    email: "",
    password: "",
  });

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [areCredentialsValid, setAreCredentialsValid] = useState(false);
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
    console.log("UseEffect to check if user is logged in executed");
  }, []);

  // useEffect(() => {
  //   console.log("timer set");
  //   const timeout = setTimeout(() => {
  //     console.log("timer timeout");
  //     if (email.includes("@") && password.trim().length > 6) {
  //       setAreCredentialsValid(true);
  //     } else {
  //       setAreCredentialsValid(false);
  //     }
  //   }, 500);

  //   console.log("UseEffect to update login button executed");

  //   return () => {
  //     console.log(`timer reset ${timeout}`);
  //     clearTimeout(timeout);
  //   };
  // }, [email, password]);

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
                disabled={!loginState.credentialsValid}
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
