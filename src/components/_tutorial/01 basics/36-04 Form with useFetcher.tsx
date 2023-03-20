import {
  createBrowserRouter,
  NavLink,
  RouterProvider,
  useFetcher,
} from "react-router-dom";

/**
 * If it is required to interact with loader or actions of routes, but the navigation should be suppressed,
 * the hook useFetcher can be used. Instead of redirecting to the root page (in this example) the navigation is suppressed.
 */
const UseFetcher: React.FC = () => {
  const fetcher = useFetcher();
  return (
    <fetcher.Form action="/">
      <label htmlFor="firstName">Firstname</label>
      <input type="text" id="firstName" name="firstName" />
    </fetcher.Form>
  );
};

const Welcome: React.FC = () => {
  return (
    <>
      <h1>Welcome</h1>
      <NavLink to="/fetcher">Fetcher</NavLink>
    </>
  );
};

const router = createBrowserRouter([
  { path: "/", element: <Welcome /> },
  { path: "/fetcher", element: <UseFetcher /> },
]);

export const UseFetcherComponent: React.FC = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
