import { createBrowserRouter, Form, useSearchParams } from "react-router-dom";
import { URL } from "url";

/**
 * Routing not only supports params like for variable values /products/:productId, but also search params like the following
 *      localhost:3000/products?filter=title eq Demo
 * To get these search params the hook useSearchParams can be used
 * In the following example the value for the search param *mode* is displayed.
 * Search params can also be retrieved within a route by creating a new instance of URL by request object and return the searchParams.
 */
export const SearchParamsComponent: React.FC = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  return <>{searchParam.get("mode")}</>;
};

const Welcome: React.FC = () => {
  return (
    <>
      <h1>Welcome</h1>
      <Form method="post">
        <label htmlFor="demo"></label>
        <input type="text" id="demo" name="demo" />
      </Form>
    </>
  );
};

/**
 * Example of a router.
 * For the root path / an action is declared which gets the searchParams by using class URL
 */
const route = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
    action: ({ request }) => {
      const searchParams = new URL(request.url).searchParams;
    },
  },
]);
