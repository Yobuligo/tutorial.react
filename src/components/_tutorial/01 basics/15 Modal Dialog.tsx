// One might expect a modal dialog already exists. But it seems it doesn't exist.
// Instead a modal dialog has to be implemented by yourself.
// A modal dialog consists of two main parts.
// 1. the dialog box, that should be displayed (see file 15 Modal Dialog.module.css)
//    The dialog css needs the following attributes: 'position' must be set to fixed. Otherwise it would be displayed behind the backdrop and you can access other HTML elements.
// 2. a backdrop that is required to lock the access to the HTML components behind the modal dialog (see file 15 Modal Dialog.module.css)
//    The backdrop css needs the following attributes: 'width' and 'height' must set to 100% to spread it over the whole screen. 'top' must be 0, to start from the top edge.
//    'position' must be set to fixed. Otherwise you could access the elements which are displayed behind.

import styles from "./15 Modal Dialog.module.css";

export const ModalDialog: React.FC<{ title: string; message: string }> = (
  props
) => {
  return (
    <div>
      <div className={styles.backdrop}></div>
      <div className={styles.modalDialog}>
        <h3>{props.title}</h3>
        <p>{props.message}</p>
      </div>
    </div>
  );
};
