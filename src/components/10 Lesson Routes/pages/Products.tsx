import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import { IProduct } from "../model/IProducts";
import styles from "./Products.module.css";

export const productLoader = async (): Promise<IProduct[]> => {
  return await new Promise<IProduct[]>((resolve) => {
    setTimeout(() => {
      resolve([
        { id: "handy", title: "Handy" },
        { id: "notebook", title: "Notebook" },
        { id: "tablet", title: "Tablet" },
      ]);
    }, 500);
  });
};

const Products: React.FC = () => {
  const products = useLoaderData() as IProduct[];
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
