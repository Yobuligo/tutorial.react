import { useParams } from "react-router-dom";

const ProductDetails: React.FC = () => {
  const params = useParams<{ productId: string }>();
  return (
    <section>
      <h1>Product Details</h1>
      <p>These are the product details of product with id {params.productId}</p>
    </section>
  );
};

export default ProductDetails;
