import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Card } from "../core/Card/Card";
import Contact from "./pages/Contact";
import ErrorComponent from "./pages/ErrorComponent";
import HandleErrorExample from "./pages/HandleErrorExample";
import ModifyProduct, { modifyProductAction } from "./pages/ModifyProduct";
import ProductDetails from "./pages/ProductDetails";
import ProductDetailsComplete, {
  productDetailsCompleteLoader,
} from "./pages/ProductDetailsComplete";
import Products, { productLoader } from "./pages/Products";
import Welcome from "./pages/Welcome";
import RootPage from "./RootPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorComponent />,
    children: [
      { path: "welcome", element: <Welcome /> },
      {
        path: "products",
        element: <Products />,
        loader: productLoader,
        children: [
          { path: ":productId", element: <ProductDetails /> },
          {
            path: "complete/:productId",
            element: <ProductDetailsComplete />,
            loader: productDetailsCompleteLoader,
          },
          {
            path: "newProduct",
            element: <ModifyProduct method="post" provideImage={true} />,
            action: modifyProductAction,
          },
        ],
      },
      { path: "contact", element: <Contact /> },
      {
        path: "handleErrors",
        element: <HandleErrorExample />,
        loader: async () => {
          // simulate an error which might occurs when fetching data from the backend
          // Error is analyzed within component *HandleErrorExample*
          throw new Response(
            JSON.stringify({ message: "Loading route data" }),
            {
              status: 500,
              statusText: "Simulated error when loading route data by loader.",
            }
          );
        },
      },
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
