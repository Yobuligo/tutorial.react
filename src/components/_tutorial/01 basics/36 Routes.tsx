// As a React Application is a single page application (SPA) there is no need to provide several HTML files for different pages which are loaded on demand.
// Instead the whole application is transmitted to the client and by click events and input events the content of the page change.
// But what if we want to use the possibility to navigate between pages by using /<name>? within the URL?
// Here routing comes to place.
//
// By package "React Router" it is possible to navigate between pages by changing the URL. The "React Router" takes over the refresh of the page depending on the requested content (Client Side Routing).
//
// How to install "React Router"?
// To install "React Router" use the command "npm install react-router-dom".
//
// How to register routes?
// Routes are created by using the function createBrowserRouter. This function takes objects that needs the property "path" which gives the path under which a specific component is available.
// Path only means the extension /<name>. Generally the URL would be "domain.com/<name>", e.g. localhost:3000/welcome.
// In addition it is required to provide the component which should be displayed by calling the path. The component is provided by property element.
//
// How to enable the routes?
// To enable the routes it is required to include the tag "RouterProvider" to you application. The property router is mandatory which is provided by createBrowserRouter.
// Probably the "RouterProvider" would normally used in the App.tsx
//
// Best practice: save route components in a separate folder *pages*
// To clarify that components are used for routing they are saved in a specific folder which is called "pages".
//
// Using links
// Sometimes it is not only required no navigate within the application by changing the URL but by having links in the url (e.g. a specific header).
// To provide a Link which not reloads the application the tag "Link" which is part of react-router-dom can be used.
//
// Parameterized Routes
// A route can be defined by using a placeholder. That placeholder is filled during runtime.
// Such a route has to be provided as /products/:productId
// The information can be retrieved within the called component via hook useParams.
//
// Navigation
// To navigate to a specific route the hook useNavigate can be used.
//
// Load data for a specific route by loader
// By setting a loader while registering a route, it is possible to provide data to a specific route. E.g. can be loaded by calling a rest call.
// To retrieve the loaded data within the hook useLoaderData is used.
//
// Handling loader errors
// If an error occurs while loading data for a route there are several ways to handle the error. 2 possibilities are:
// 1. the implemented loader function does not return the data, but an error object like { isError: true, message: "An error occurred" }
// 2. the implemented loader function throws an exceptions. In that case the component which is set as *errorElement* like *ErrorComponent* is displayed, as the exceptions is caught by the framework.
// 3. more specific the implemented loader function throws an *Response* exception, which contains a message and HTTP status and HTTP status error details which can be displayed in the *ErrorComponent*.

import {
  createBrowserRouter,
  isRouteErrorResponse,
  Link,
  NavLink,
  Outlet,
  RouterProvider,
  useLoaderData,
  useNavigate,
  useParams,
  useRouteError,
} from "react-router-dom";
import styles from "./36 Routes.module.css";

// The following component is responsible for providing the header component of an application which contains links to the pages welcome, products and contacts.
// This header is provided for each page. The only thing which is exchanged is the component below which is provided by the tag <Outlet />.
// By calling the specific URL like /welcome, the tag <Outlet /> displays the component which is provided by the function createBrowserRouter() for that path.
// The header contains links. By clicking the specific link the underlying route is called. Which means when triggering the link "/welcome" the welcome Route /welcome is called.
//
// The NavLink is a specialty of Link. By providing the prop "className" styling information can be set depending if the underlying component of that link is currently displayed.
const MainHeader: React.FC = () => {
  return (
    <>
      <header>
        <ul>
          <li>
            <Link to="/welcome">Welcome</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            {/* Provide style information depending on if the current page is active or not */}
            <NavLink
              className={({ isActive }) => {
                return isActive ? styles.active : "";
              }}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </header>
      {/* Outlet is responsible for displaying components for the called route at exactly that position. */}
      <Outlet />
    </>
  );
};

/**
 * This component is displayed when error occurs, e.g. in case an unknown route is called or if a *loader* throws and exceptions which should be displayed with this component
 */
const ErrorComponent: React.FC = () => {
  const error = useRouteError() as Response;
  let header: string;
  let paragraph: string;
  if (isRouteErrorResponse(error)) {
    header = JSON.parse(error.data).message;
    paragraph = error.statusText;
  } else {
    header = "An error occurred";
    paragraph = "An unknown error occurred";
  }

  return (
    <section>
      <h1>{header}</h1>
      <p>{paragraph}</p>
    </section>
  );
};

// Provide the components
const WelcomeComponent: React.FC = () => {
  return (
    <section>
      <h1>Welcome Page</h1>
    </section>
  );
};

// create a list of products
interface IProduct {
  id: number;
  title: string;
}

const products: IProduct[] = [
  { id: 1, title: "Book" },
  { id: 2, title: "Handy" },
  { id: 3, title: "Notebook" },
];

// Provide a loader which is responsible for loading products. The loader should be put close to the *ProductComponent* (below), which means normally in the same file.
// There is no need to provide directly the returning type like IProduct[]. Instead a Promise or an object of type *Response* can be returned. The Hook useLoaderData will expose the real data.
// Important to know: This function is a browser function, which means it is possible to access all functions which only exists on client side, like e.g. localStorage to handle cookies.
const productLoader = async (): Promise<IProduct[]> => {
  return await new Promise<IProduct[]>((resolve) => {
    setTimeout(() => {
      // Here an exception is thrown when the products list is empty.
      // It just simulates how to handle errors. In that case the component which is set as *errorComponent* is displayed
      if (products.length === 0) {
        throw new Error("Error when loading product data.");
      }

      // even better would be to throw a Response error, which can take http-status and http-status-error information and a message.
      // E.g. this can be analyzed by the special hook *useRouteError* to fetch the response information and to show a more meaningful message.
      if (products.length === 0) {
        throw new Response(
          JSON.stringify({ message: "Error when loading product data" }),
          { status: 500, statusText: "Error when loading product data for " }
        );
      }

      // As alternative to the upper thrown exception is to return an object which can be handled individual from the corresponding component, which needs the loader data.
      if (products.length === 0) {
        return { isError: true, message: "Error when loading product data." };
      }

      resolve(products);
    }, 500);
  });
};

const ProductsComponent: React.FC = () => {
  // use the hook *useLoaderData* to get data from the loader which is defined for that route
  const products = useLoaderData() as IProduct[];
  return (
    <section>
      <h1>Products</h1>
      <ul>
        {/* 
            Create a dynamic list of links.
            The following are relative paths. This means there is no need to say it is located under /products. Instead that is defined by react-router-dom. 
            Probably that makes it more independent from /products. If /products has to be changed once, Notebook can be displayed anyway, as it path is relative to the new parent path.
          */}
        {products.map((product) => {
          return (
            <li key={product.id}>
              <Link to={product.id.toString()}>{product.title}</Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

const ContactComponent: React.FC = () => {
  return (
    <section>
      <h1>Contact</h1>
    </section>
  );
};

// This component is special. Instead of showing static content it can change its content depending on the provided parameter within the route.
// E.g. if somebody calls localhost:3000/products/book it only shows the product details of the book or any other product. Maybe you would like to provide a product id.
// To read the content from the URL there is the custom hook of react-router-dom "useParams".
// In addition an example for useNavigate is implemented to navigate to any route.
const ProductDetailsComponent: React.FC = () => {
  // Use hook "useParams" to read params from the URL
  const params = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const onNavigateBackHandler = () => {
    navigate("/products");
  };
  return (
    <section>
      <h1>Product Details</h1>
      <p>Details of product with id {params.productId}</p>
      {/* by using the hook useNavigate, it is possible to navigate to any route */}
      <button onClick={onNavigateBackHandler}>back to products</button>

      {/* An Outlet is required as /products also has children */}
      <Outlet />
    </section>
  );
};

//1. Provide the routes.
// Here we only have one root route which contains of several children routes.
// The Root component, which is provided by prop "element" is "MainHeader".
// In case of an error the ErrorComponent is displayed instead of the default error.
// The children are separate path which have the same structure as the root path.
// /products/:productId provides a specific route. The path has a parameter which can be read by the custom hook useParam within the component ProductDetails.
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainHeader />,
    errorElement: <ErrorComponent />,
    children: [
      // "index: true" sets this route as the default route, which will be displayed as fallback
      { index: true, element: <WelcomeComponent /> },
      { path: "/welcome", element: <WelcomeComponent /> },
      {
        path: "/products",
        element: <ProductsComponent />,
        // provide a *loader*, which simulates to execute a rest call and retrieve data which should be displayed within a route
        loader: productLoader,
        children: [
          // Defines a relative path, which is a child of /products. To display this it is required that the parent component <ProductsComponent /> has an <Outlet /> as well.
          // This means we nesting components
          { path: ":productId", element: <ProductDetailsComponent /> },
        ],
      },
      { path: "/contact", element: <ContactComponent /> },
    ],
  },
]);

// Provide the routes (probably in the App.tsx) to the specific tag RouterProvider.
export const RoutesComponent: React.FC = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
