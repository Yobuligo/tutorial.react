import { Link, Outlet } from "react-router-dom";
import styles from "./RootPage.module.css";

const RootPage: React.FC = () => {
  return (
    <>
      <header className={styles.rootPage}>
        <div>
          <p>Extent url by /welcome to navigate to the welcome section.</p>
          <p>Extent url by /products to navigate to the products section</p>
          <p>Extent url by /contact to navigate to the contact section</p>
          <p>
            Or click on the links below and have a look at the url of the page
          </p>
        </div>
        <ul>
          <li>
            <Link to="welcome">Welcome</Link>
          </li>
          <li>
            <Link to="products">Products</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
      </header>
      <Outlet />
    </>
  );
};

export default RootPage;
