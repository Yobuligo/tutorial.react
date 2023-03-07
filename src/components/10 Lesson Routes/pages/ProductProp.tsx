import styles from "./ProductProp.module.css";

const ProductProp: React.FC<{ id: string; caption: string }> = (props) => {
  return (
    <div className={styles.productProp}>
      <div>
        <label htmlFor={props.id}>{props.caption}</label>
      </div>
      <div>
        <input name={props.id} type="text" />
      </div>
    </div>
  );
};

export default ProductProp;
