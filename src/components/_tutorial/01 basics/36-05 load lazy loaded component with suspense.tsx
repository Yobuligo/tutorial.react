/**
 * If a component of a path should be loaded lazy, an error occurs for the first time, as the component isn't loaded yet.
 * This problem can be solved by using the Suspense tag, which is a placeholder and wait until the component is loaded
 */

import { Suspense, lazy } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";

namespace LoadLazyLoadedComponentWithSuspense {
  /**
   * Lazy loading of the component {@link LazyComponent}
   */
  const LazyComponent = lazy(() => import("./36-05 lazy component"));

  /**
   * Component that navigates on click to lazyComponent
   */
  const HomePage: React.FC = () => {
    const navigate = useNavigate();
    return (
      <>
        HomePage
        <button onClick={() => navigate("/lazyComponent")}>
          Navigate to lazy component
        </button>
      </>
    );
  };

  /**
   * Definition of the routes and its components.
   * As {@link LazyComponent} is loaded lazy, we have to wrap it by {@link Suspense}, to not get an error.
   * Instead a message is displayed as long as the component is loaded.
   */
  const AppRouter = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    {
      path: "/lazyComponent",
      element: (
        <Suspense fallback={<p>...loading component</p>}>
          <LazyComponent />
        </Suspense>
      ),
    },
  ]);

  const App: React.FC = () => {
    return <RouterProvider router={AppRouter} />;
  };
}
