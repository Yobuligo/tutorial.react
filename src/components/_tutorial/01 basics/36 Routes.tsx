// As a React Application is a single page application (SPA) there is no need to provide several HTML files for different pages which are loaded on demand.
// Instead the whole application is transmitted to the client and by click events and input events the content of the page change.
// But what if we want to use the possibility to navigate between pages by using /<name>? within the URL?
// Here routing comes to place.
//
// By package "React Router" it is possible to navigate between pages by changing the URL. The "React Router" takes over the refresh of the page depending on the requested content (Client Side Routing).
//
// How to install "React Router"?
// To install "React Router" use the command "npm install react-router-dom@5" to install 5 of react router, which acts slightly different as the current version 6.
// In addition install "npm i --save-dev @types/react-router-dom".
// Finally you should find in the package.json under "dependencies" the following entries:
// - "@types/react-router-dom": "^5.3.3"
// - "react-router-dom": "^5.3.4",
//
// How to register routes?
// To register a route the tag "Route" of "React Router" is used. This path needs the property "path" which gives the path under which a specific component is available.
// Path only means the extension /<name>. Generally the URL would be "domain.com/<name>", e.g. localhost:3000/welcome.
// In addition it is required to provide the component which should be displayed by calling the path. The component is provided as child element to the tag "Route"
//
// How to enable the routes?
// To enable the routes it is required to wrap the component in which the routes are required by the component "BrowserRouter". From my point of view it can be considered like a context (useContext).
// Probably the "BrowserRouter" would normally wrap the App.tsx
//
// Saving components which are used for routing
// To clarify that components are used for routing they are saved in a specific folder which is called "pages".
//
// Using links
// Sometimes it is not only required no navigate within the application by changing the URL but by having links in the url (e.g. a specific header).
// To provide a Link which not reloads the application the tag "Link" which is part of react-router-dom can be used.

import { BrowserRouter, Link, NavLink, Route } from "react-router-dom";
import styles from "./36 Routes.module.css";

// Provide the components
const WelcomeComponent: React.FC = () => {
  return <h1>Welcome Page</h1>;
};

const ProductsComponent: React.FC = () => {
  return <h1>My Products</h1>;
};

const ContactComponent: React.FC = () => {
  return <h1>Contact</h1>;
};

// The following component is responsible for providing the header of a component which contains of the two links "welcome" and "products".
// By clicking the specific link the underlying route is called. Which means when triggering the link "/welcome" the welcome Route /welcome is called.
//
// The NavLink is a specialty of Link. It also provides the property "activeClassName" to provide styling information in case a link is current active.
const MainHeader: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/welcome">Welcome</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/contact"></NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

// Provide the routes (probably in the App.tsx) to the specific components by providing routes.
export const RoutesComponent: React.FC = () => {
  return (
    <BrowserRouter>
      <header>
        <MainHeader />
      </header>
      <body>
        <Route path="/welcome">
          <WelcomeComponent />
        </Route>
        <Route path="/products">
          <ProductsComponent />
        </Route>
        <Route path="/contact">
          <ContactComponent />
        </Route>
      </body>
    </BrowserRouter>
  );
};
