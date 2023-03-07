import { LoaderFunction, useLoaderData } from "react-router-dom";
import { IProduct } from "../model/IProduct";
import { Product } from "../model/Product";

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
    <section>
      <h1>
        {product.title} ({product.id})
      </h1>
      <p>{product.description}</p>
    </section>
  );
};

export default ProductDetailsComplete;
