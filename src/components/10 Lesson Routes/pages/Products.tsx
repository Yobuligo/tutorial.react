import { NavLink, Outlet } from "react-router-dom";
import { IProduct } from "../model/IProducts";
import styles from "./Products.module.css";

const products: IProduct[] = [
  { id: "handy", title: "Handy" },
  { id: "notebook", title: "Notebook" },
  { id: "tablet", title: "Tablet" },
];

const Products: React.FC = () => {
  return (
    <section>
      <h1>Products</h1>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <NavLink
                className={({ isActive }) => {
                  return isActive ? styles.active : "";
                }}
                to={product.id}
              >
                {product.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </section>
  );
};

export default Products;
