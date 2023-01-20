import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EventDetailPage from "./pages/EventDetailPage";
import EventPage from "./pages/EventPage";
import HomePage from "./pages/HomePage";
import RootPage from "./RootPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      { path: "/homePage", element: <HomePage /> },
      { path: "/EventPage", element: <EventPage /> },
      { path: "/EventPage/:eventId", element: <EventDetailPage /> },
    ],
  },
]);

const RoutesApp: React.FC = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default RoutesApp;
