/**
 * There are pages which are accessible only when authenticated or authorized.
 * To not check for each page if the user is logged in, there might be 2 different kinds of pages:
 *      1. PublicPage - which is accessible from each user
 *      2. ProtectedPage - which is accessible only from authenticated users
 * Whenever a page is displayed for which the user is not authorized or not even authenticated, the user will be navigated to a public page like a homepage or a login page
 */

import { ReactNode, createContext, useContext } from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";

/**
 * This is an abstract page. It contains the page structure, how each page should look like.
 */
const Page: React.FC<{ children: ReactNode }> = (props) => {
  return (
    <>
      <header>Display a header for each page</header>
      <main>{props.children}</main>
      <footer>Display a footer for each page</footer>
    </>
  );
};

/**
 * This abstract page is for public pages, which are accessible from each user.
 */
const PublicPage: React.FC<{ children: ReactNode }> = (props) => {
  return <Page>{props.children}</Page>;
};

/**
 * This abstract page is for protected pages, which are only accessible when e.g. logged in or authorized.
 * So if the current user is not logged in, the protected page will navigate to the landing page e.g. the homepage or login page.
 */
const ProtectedPage: React.FC<{ children: ReactNode }> = (props) => {
  const context = useContext(AppContext);

  // check if the sessionId is set, otherwise the user must be logged in before continue working.
  // As ProtectedPage is a component it must return a ReactNode. ReactRouterDom provides the component Navigate for that.
  if (context.sessionId === undefined) {
    return <Navigate to="/" />;
  }

  return <Page>{props.children}</Page>;
};

/**
 * Provide an AppContext to provide a session at a central point
 */
interface IAppContext {
  sessionId: number | undefined;
  setSessionId: (sessionId: number | undefined) => void;
}

const AppContext = createContext<IAppContext>(null!);

/**
 * This page is the login page. The user has to enter username and password.
 * If the credentials are valid, the user is forwarded to the home page (which needs a valid, authenticated user)
 */
const LoginPage: React.FC = () => {
  // Display input fields to login user (here I omit them consciously, as not required for the example, here the user just has to click button Login)
  // If the user was successfully authenticated, we navigate him to the homepage, which is a ProtectedPage and the starting point for the user.
  const context = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <PublicPage>
      <button
        onClick={() => {
          context.setSessionId(123);
          navigate("/");
        }}
      >
        Login
      </button>
    </PublicPage>
  );
};

/**
 * This is the homepage. A protected page, which is only accessible by an authenticated user.
 * If the user is not yet logged in, the ProtectedPage navigates him to the LoginPage.
 */
const HomePage: React.FC = () => {
  return <ProtectedPage>Display Homepage stuff</ProtectedPage>;
};

/**
 * Defines the routes for that app
 */
const AppRouter = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/login", element: <LoginPage /> },
]);

/**
 * This is the App component
 */
export const App: React.FC = () => {
  return <RouterProvider router={AppRouter} />;
};
