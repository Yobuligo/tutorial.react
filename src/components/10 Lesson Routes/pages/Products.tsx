import { NavLink, Outlet, useLoaderData, useNavigate } from "react-router-dom";
import { IProduct } from "../model/IProduct";
import { Product } from "../model/Product";
import styles from "./Products.module.css";

export const productLoader = async (): Promise<IProduct[]> => {
  return await new Promise<IProduct[]>((resolve) => {
    setTimeout(() => {
      resolve(Product.findAll());
    }, 500);
  });
};

const Products: React.FC = () => {
  const products = useLoaderData() as IProduct[];
  const navigate = useNavigate();

  const completeProductsItems = products.map((product) => {
    return (
      <li key={product.id}>
        <NavLink
          to={`complete/${product.id}`}
        >{`Complete ${product.title}`}</NavLink>
      </li>
    );
  });
  return (
    <section>
      <h1>Products</h1>
      <button
        onClick={() => {
          navigate("newProduct");
        }}
      >
        Add product
      </button>
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
        {completeProductsItems}
      </ul>
      <Outlet />
    </section>
  );
};

export default Products;
