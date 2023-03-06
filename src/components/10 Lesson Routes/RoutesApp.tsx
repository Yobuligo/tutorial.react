import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Card } from "../core/Card/Card";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";
import Products, { productLoader } from "./pages/Products";
import Welcome from "./pages/Welcome";
import RootPage from "./RootPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      { path: "welcome", element: <Welcome /> },
      {
        path: "products",
        element: <Products />,
        loader: productLoader,
        children: [{ path: ":productId", element: <ProductDetails /> }],
      },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

const RoutesApp: React.FC = () => {
  return (
    <Card>
      <RouterProvider router={router} />
    </Card>
  );
};

export default RoutesApp;
