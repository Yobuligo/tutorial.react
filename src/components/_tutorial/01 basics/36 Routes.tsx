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

import { BrowserRouter, Route } from "react-router-dom";

// Provide the components
const WelcomeComponent: React.FC = () => {
  return <h1>Welcome Page</h1>;
};

const ProductsComponent: React.FC = () => {
  return <h1>My Products</h1>;
};

// Provide the routes (probably in the App.tsx) to the specific components by providing routes.
export const RoutesComponent: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/welcome">
        <WelcomeComponent />
      </Route>
      <Route path="/products">
        <ProductsComponent />
      </Route>
    </BrowserRouter>
  );
};
