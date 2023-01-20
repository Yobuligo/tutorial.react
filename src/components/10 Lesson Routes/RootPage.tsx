import { Link, Outlet } from "react-router-dom";

const RootPage: React.FC = () => {
  return (
    <>
      <header>
        <div>
          <p>Extent url by /welcome to navigate to the welcome section.</p>
          <p>Extent url by /products to navigate to the products section</p>
        </div>
        <ul>
          <li>
            <Link to="/homePage">HomePage</Link>
          </li>
          <li>
            <Link to="/eventPage">EventPage</Link>
          </li>
        </ul>
      </header>
      <Outlet />
    </>
  );
};

export default RootPage;
