/**
 * When using loader with routes, there is a way to reuse a loader of a route by using the hook useRouteLoaderData.
 * But first the loader and the route id has to be provided when creating the browserRouter. By referring to the route id it is possible to reuse the data.
 * It seems that the loader can only be reused of components which are children of the root component or parent component
 */

import {
  createBrowserRouter,
  RouterProvider,
  useRouteLoaderData,
} from "react-router-dom";

interface IProduct {
  id: string;
  title: string;
}

const Welcome: React.FC = () => {
  return (
    <>
      <h1>Welcome page</h1>
    </>
  );
};

/**
 * The component Products refers to the data of the loader, which were provided by id *root*
 */
const Products: React.FC = () => {
  const products = useRouteLoaderData("root") as IProduct[];
  const items = products.map((product) => <h1>{product.title}</h1>);
  return <>{items}</>;
};

/**
 * Here the routes will be set up. For the root route the id *root* is set and a loader.
 * By using the id *root* it is possible to fetch the data of the loader by using the hook *useRouteLoaderData*
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
    id: "root",
    loader: async (): Promise<IProduct[]> => {
      return [
        { id: "1", title: "Product01" },
        { id: "2", title: "Product02" },
      ];
    },
    children: [{ path: "products", element: <Products /> }],
  },
]);

export const ReuseLoader: React.FC = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
