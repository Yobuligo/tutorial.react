import React from "react";
import styles from "./Card.module.css";

export const Card: React.FC<{ children?: React.ReactNode }> = (props) => {
  return <div className={styles.card}>{props.children}</div>;
};
