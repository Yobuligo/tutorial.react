import { BrowserRouter, Route } from "react-router-dom";
import Products from "./Products";
import styles from "./RoutesApp.module.css";
import Welcome from "./Welcome";

const RoutesApp: React.FC = () => {
  return (
    <>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
      <div className={styles.routesApp}>
        <p>Extent url by /welcome to navigate to the welcome section.</p>
        <p>Extent url by /products to navigate to the products section</p>
      </div>
      </>
  );
};

export default RoutesApp;
