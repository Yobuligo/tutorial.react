import "./CardExpenses.css";

export function CardExpenses(props: any) {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}
