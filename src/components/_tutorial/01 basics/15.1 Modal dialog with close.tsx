/**
 * The following example shows how to provide a generic modal dialog which can be closed via backdrop click.
 * 1. Provide the CSS which contains of 3 classes (see also file 15.1 Modal dialog with close.module.css)
 *      1.1     modalContainer: it is only responsible for providing a frame over the whole page with with 100%, height 100%
 *      1.2.    backdrop: it is a div which has also the size of the whole page with 100% and height 100%. It is responsible for providing the background color and for providing a close event, when it was clicked (the backdrop was clicked). Z-index must be lower 10.
 *      1.3.    modalDialog: it is a div that contains the component itself, which should be displayed. It is responsible for aligning the component which is displayed as modalDialog
 *      The backdrop and the modalDialog are children of the modalContainer.
 *
 * 2. Provide the portal in the index.html, where the modalDialog can be embedded into. This is not part of that tutorial. But here is how the index.html should looks like:
 *      <body>
 *          <div id="modalContainer"></div>
 *          <div id="root"></div>
 *      </body>
 *
 * 3. Provide the ModalDialog component itself.
 *      It only creates the portal and displays the whole components.
 */

import { ReactNode, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./15.1 Modal dialog with close.module.css";

namespace ModalDialogWithClose {
  interface IModalDialogProps {
    children: ReactNode;
    onClose?: () => void;
  }

  const ModalDialog: React.FC<IModalDialogProps> = (props) => {
    return (
      <>
        {ReactDOM.createPortal(
          <div className={styles.modalContainer}>
            <div className={styles.backdrop} onClick={props.onClose} />
            <div className={styles.modalDialog}>{props.children}</div>
          </div>,
          document.getElementById("modalContainer")!
        )}
      </>
    );
  };

  /**
   * Displaying the modal dialog is controlled via "showModalDialog". The variable is set to true when the button was clicked.
   * The modal dialog itself has a close event. Whenever the backdrop was clicked the variable "showModalDialog" is set to false.
   * And of course it would also be possible to display a whole component within the modal dialog, which can e.g. have events to close the dialog by lifting the event up and by setting "showModalDialog"
   */
  const App: React.FC = () => {
    const [showModalDialog, setShowModalDialog] = useState(false);
    return (
      <>
        {showModalDialog && (
          <ModalDialog onClose={() => setShowModalDialog(false)}>
            Inside Modal Dialog
          </ModalDialog>
        )}
        <button onClick={() => setShowModalDialog(true)}>
          Open modal dialog
        </button>
      </>
    );
  };
}
