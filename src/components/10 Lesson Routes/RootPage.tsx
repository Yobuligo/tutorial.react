import { Outlet } from "react-router-dom";
import MenuItem from "./components/MenuItem";
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
        <div className={styles.menu}>
          <MenuItem title="Welcome" path="welcome" />
          <MenuItem title="Products" path="products" />
          <MenuItem title="Contact" path="contact" />
          <MenuItem title="Handle Error" path="handleErrors" />
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default RootPage;
