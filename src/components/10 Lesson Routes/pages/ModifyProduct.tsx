import { ActionFunction, Form, FormMethod, redirect } from "react-router-dom";
import { Card } from "../../core/Card/Card";
import { IProduct } from "../model/IProduct";
import { Product } from "../model/Product";
import ProductProp from "./ProductProp";

export const modifyProductAction: ActionFunction = async ({ request }) => {
  const data = await request.formData();
  const product: IProduct = {
    id: data.get("id") as string,
    title: data.get("title") as string,
    description: data.get("description") as string,
    path: data.get("path") as string,
  };
  Product.save(product);
  return redirect("/products");
};

const ModifyProduct: React.FC<{ method: FormMethod; provideImage: boolean }> = (
  props
) => {
  const imagePath = props.provideImage
    ? "https://cdn-icons-png.flaticon.com/512/4129/4129437.png"
    : "";
  return (
    <Card>
      <Form method={props.method}>
        <h3>New Product</h3>
        <ProductProp id="id" caption="Id" />
        <ProductProp id="title" caption="Title" />
        <ProductProp id="description" caption="Description" />
        <ProductProp
          id="path"
          caption="Path"
          value={props.provideImage ? imagePath : ""}
        />
        <button type="submit">Save</button>
      </Form>
    </Card>
  );
};

export default ModifyProduct;
