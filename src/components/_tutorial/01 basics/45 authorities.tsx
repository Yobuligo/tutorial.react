/**
 * Next to authentication, authorization is an important part of a page.
 * To provide authorities an AuthorityProvider and an AuthorityContext can be used.
 * 1. The AuthorityProvider is responsible for loading authorities.
 * 2. The AuthorityContext contains all loaded authorities
 * 3. The custom hook useAuth is responsible for checking against authorities.
 */

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

/**
 * An authority is represented via string
 */
type Authority = string;

/**
 * Contains the current session
 */
interface ISession {
  token: string;
}

/**
 * Provides the AppContext, which keeps e.g. the session.
 */
interface IAppContext {
  session: ISession | undefined;
  setSession: (session: ISession | undefined) => void;
}

/**
 * Contains the authority context.
 */
interface IAuthorityContext {
  authorities: Authority[];
  setAuthorities: (authorities: Authority[]) => void;
}

interface IAuthorityProviderProps {
  children?: ReactNode;
  loadAuthorities: () => Promise<Authority[]>;
}

/**
 * The AuthorityProvider is responsible for loading the authorities.
 * If the authorities are not loaded yet, a loading spinner is displayed instead.
 * The authorities are loaded when calling AuthorityProvider for the first time.
 * The AuthorityProvider also handles the values for the AuthorityContext.
 */
const AuthorityProvider: React.FC<IAuthorityProviderProps> = (props) => {
  const [authorities, setAuthorities] = useState<Authority[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAuthorities = async () => {
      setLoading(true);
      const authorities = await props.loadAuthorities();
      setLoading(false);
    };
    loadAuthorities();
  }, [props]);

  return (
    <AuthorityContext.Provider value={{ authorities, setAuthorities }}>
      {loading ? <>...loading Authorities</> : props.children}
    </AuthorityContext.Provider>
  );
};

const useAuth = () => {
  const authorityContext = useContext(AuthorityContext);

  // check if user has a specific authority.
  // The user authorities are stored in authorityContext.authorities
  const has = (authority: Authority) => {
    if (authorityContext.authorities.includes(authority)) {
      return true;
    }
    return false;
  };
  return { has };
};

/**
 * This component should be protected via authority check.
 * Use custom hook useAuth to check if the current user has a specific authority.
 */
const ProtectedComponent: React.FC = () => {
  const auth = useAuth();
  return <>{auth.has("ADMIN") ? <>Admin Content</> : <></>}</>;
};

/**
 * This page wants to protect its content via authorities.
 * So it wraps its content via AuthorityProvider. So the child components can use custom hook useAuth to check the loaded authority.
 * If the authorities are not loaded, a loading spinner is displayed, which is provided by the AuthorityProvider.
 * The loadAuthorities function is responsible for loading the users authorities, which are here "ADMIN" and "SUPPORT"
 */
const ProtectedPage: React.FC = () => {
  return (
    <AuthorityProvider loadAuthorities={async () => ["ADMIN", "SUPPORT"]}>
      <ProtectedComponent />
    </AuthorityProvider>
  );
};

/**
 * Simple HomePage
 */
const HomePage: React.FC = () => {
  return <></>;
};

/**
 * Login page, which sets a session for the user
 */
const LoginPage: React.FC = () => {
  const context = useContext(AppContext);

  return (
    <>
      <button onClick={() => context.setSession({ token: "myToken.1234" })}>
        Login
      </button>
    </>
  );
};

/**
 * Create context for App and for Authority and add AppRouter
 */
const AppContext = createContext<IAppContext>(null!);
const AuthorityContext = createContext<IAuthorityContext>(null!);
const AppRouter = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/protectedPage", element: <ProtectedPage /> },
]);

/**
 * The app keeps the session as useState, which can be accessed via AppContext.
 */
const App: React.FC = () => {
  const [session, setSession] = useState<ISession | undefined>(undefined);

  return (
    <AppContext.Provider value={{ session, setSession }}>
      <RouterProvider router={AppRouter} />
    </AppContext.Provider>
  );
};
