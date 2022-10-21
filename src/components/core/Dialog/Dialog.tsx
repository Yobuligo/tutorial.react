import React from "react";
import styles from "./Dialog.module.css";

export const Dialog: React.FC<{ title: string; children?: React.ReactNode }> = (
  props
) => {
  return (
    <>
      <div className={styles.backdrop}></div>
      <div className={styles.dialog}>
        <header className={styles.header}>{props.title}</header>
        <div>{props.children}</div>
        <footer className={styles.footer}>
          <button type="button">Okay</button>
        </footer>
      </div>
    </>
  );
};
