export const AddButton: React.FC<{
  caption: string;
  type?: JSX.IntrinsicElements["button"]["type"];
  onAddUserClicked?: () => void;
}> = (props) => {
  return (
    <button type={props.type || "button"} onClick={props.onAddUserClicked}>
      {props.caption}
    </button>
  );
};
