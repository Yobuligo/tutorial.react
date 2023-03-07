import { LoaderFunction, useLoaderData } from "react-router-dom";
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

const ProductDetailsComplete: React.FC = () => {
  const product = useLoaderData() as IProduct;
  return (
    <section className={styles.innerCard}>
      <div>
        <div className={styles.productDetailsComplete}>
          <img
            width="100"
            height="100"
            src={`http://localhost:3000/assets/${product.path}`}
            alt={product.title}
          />
          <div className={styles.header}>
            <h1>
              {product.title} ({product.id})
            </h1>
          </div>
        </div>
      </div>
      <p>{product.description}</p>
    </section>
  );
};

export default ProductDetailsComplete;
