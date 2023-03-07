import {
  ActionFunction,
  LoaderFunction,
  redirect,
  useLoaderData,
  useSubmit,
} from "react-router-dom";
import { IProduct } from "../model/IProduct";
import { Product } from "../model/Product";
import styles from "./ProductDetailsComplete.module.css";

const error = (message: string): never => {
  throw new Error(message);
};

export const productDetailsCompleteLoader: LoaderFunction = async ({
  request,
  params,
}): Promise<IProduct> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productId = (params as { productId: string }).productId;
      const product =
        Product.findById(productId) ??
        error(
          `Error when loading product. Product with id ${productId} is unknown.`
        );
      resolve(product);
    }, 500);
  });
};

export const productDetailsDeleteAction: ActionFunction = async ({
  request,
  params,
}) => {
  const productId = (params as { productId: string }).productId;
  Product.delete(productId);
  return redirect("/products");
};

const ProductDetailsComplete: React.FC = () => {
  const product = useLoaderData() as IProduct;

  const imagePath = product.path.includes("http")
    ? product.path
    : `http://localhost:3000/assets/${product.path}`;

  const submit = useSubmit();

  const onDeleteHandler = () => {
    if (window.confirm("Would you like to delete the product?")) {
      submit(null, { method: "delete" });
    }
  };

  return (
    <section className={styles.innerCard}>
      <div>
        <div className={styles.productDetailsComplete}>
          <img width="100" height="100" src={imagePath} alt={product.title} />
          <div className={styles.header}>
            <h1>
              {product.title} ({product.id})
            </h1>
          </div>
        </div>
      </div>
      <p>{product.description}</p>
      <button onClick={onDeleteHandler}>Delete</button>
    </section>
  );
};

export default ProductDetailsComplete;
