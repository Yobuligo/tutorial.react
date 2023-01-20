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
// Best practice: save route components in a separate folder
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

import {
  createBrowserRouter,
  Link,
  NavLink,
  Outlet,
  RouterProvider,
  useNavigate,
  useParams,
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

const ErrorComponent: React.FC = () => {
  return (
    <section>
      <h1>An Error occurred</h1>
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

const ProductsComponent: React.FC = () => {
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
        children: [
          // Defines a relative path, which is a child of /products. To display this it is required that the parent component <ProductsComponent /> has an <Outlet /> as well.
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
