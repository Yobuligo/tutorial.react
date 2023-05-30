import { createContext, ReactNode, useContext } from "react";

/**
 * To encapsulate the context in a better way, it sometimes makes sense to wrap the context in a separate component.
 * The component provides the required tags, initialize the context and shows the children within that context.
 */
interface IContext {
  firstname: string;
  setFirstname: (firstname: string) => void;
}

const initialContext: IContext = {
  firstname: "Stacey",
  setFirstname: () => {},
};

const Context = createContext<IContext>(initialContext);

const ContextComponent: React.FC<{ children?: ReactNode }> = (props) => {
  return (
    <Context.Provider value={initialContext}>{props.children}</Context.Provider>
  );
};

const ChildComponent: React.FC = () => {
  const context = useContext(Context);
  return (
    <>
      {context.firstname}
      <input
        type="text"
        onChange={(event) => context.setFirstname(event.target.value)}
      />
    </>
  );
};

export const WrapUseContextComponent: React.FC = () => {
  return (
    <ContextComponent>
      <ChildComponent />
    </ContextComponent>
  );
};
