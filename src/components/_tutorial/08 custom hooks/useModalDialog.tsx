/**
 * A custom hook that can be used to display a component in a modal dialog.
 * The idea is to provide a modal and display it via conditional content within the main app.
 * Over e.g. a context or a more private way the useForm hook changes the parameter showModal in the app and sets the component that should be displayed.
 * Here is how to proceed.
 *      1. Provide a modal div container in the index.html
 *      2. implement a modal dialog that uses that modal div container via portal to display components
 *      3. the main app embeds the modal
 *      4. via useModalDialog a component can be displayed as modal dialog without the need to provide the modal, without the need to have a useState
 */

import { ReactNode, createContext, useContext, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./useModalDialog.module.css";

/**
 * Provide the Modal Dialog
 */
interface IModalDialog {
  children: ReactNode;
  onClose: () => void;
}

const ModalDialog: React.FC<IModalDialog> = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <div className={styles.modalContainer}>
          <div className={styles.modalBackdrop} onClick={props.onClose}></div>
          <div className={styles.modalDialog}>{props.children}</div>
        </div>,
        document.getElementById("modalContainer")!
      )}
    </>
  );
};

/**
 * Provide an AppContext that handles the properties to display or hide the modal and which component should be displayed.
 */
interface IAppContext {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  modalDialogComponent: ReactNode;
  setModalDialogComponent(component: ReactNode): void;
}

const AppContext = createContext<IAppContext>(null!);

/**
 * Implement useModalDialog hook.
 * Function show uses the context to show the modal and set the component which should be displayed within the modal
 */
const useModalDialog = () => {
  const context = useContext(AppContext);

  const show = (component: ReactNode) => {
    context.setShowModal(true);
    context.setModalDialogComponent(component);
  };

  const close = () => {
    context.setShowModal(false);
    context.setModalDialogComponent(null);
  };

  return { show, close };
};

/**
 * Implement the component that should be displayed within the modal dialog
 */
const SimpleComponent: React.FC = () => {
  return <p>I am a simple component</p>;
};

/**
 * Implement the component that uses useModalDialog to show the {@link SimpleComponent}.
 * Whenever the button is clicked {@link SimpleComponent} is displayed within a modal dialog.
 * If the backdrop of the modal is clicked the component is automatically closed.
 */
const Caller: React.FC = () => {
  const modalDialog = useModalDialog();
  return (
    <button onClick={() => modalDialog.show(<SimpleComponent />)}>
      Show modal dialog
    </button>
  );
};

/**
 * Provide the main application that embeds the modal dialog and provides the useStates for the modal dialog
 * In addition it displays the component {@link Caller}.
 */
const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalDialogComponent, setModalDialogComponent] =
    useState<ReactNode>(null);

  const onCloseModalDialog = () => {
    setShowModal(false);
    setModalDialogComponent(null);
  };

  return (
    <AppContext.Provider
      value={{
        showModal,
        setShowModal,
        modalDialogComponent,
        setModalDialogComponent,
      }}
    >
      {showModal && (
        <ModalDialog onClose={onCloseModalDialog}>
          {modalDialogComponent}
        </ModalDialog>
      )}
      <Caller />
    </AppContext.Provider>
  );
};
