/**
 * The following example shows another approach to provide the Context more easily.
 * So instead of creating the Context, the ContextData, the ContextComponent, etc. again and again, it is wrapped in a separate ContextFactory function.
 */

import { ReactNode, createContext, useContext, useState } from "react";

export namespace ContextFactory {
  /**
   * Represents each possible context.
   * Each context only has the property data for read only access and setData to update the data
   */
  interface IContext<T> {
    data: T;
    setData(newData: T): void;
  }

  /**
   * The ContextFactory is a function that wraps the creation of the Context, the ContextProvider and provides the data via useState.
   * It returns the Provider and the Context
   */
  function ContextFactory<T>(initialData: T) {
    /**
     * create the actually Context
     */
    const Context = createContext<IContext<Partial<T>>>({
      data: initialData,
      setData: () => {},
    });

    /**
     * Creates the ContextProvider.
     * Also it holds the useState which represents the whole context data
     */
    const Provider: React.FC<{ children: ReactNode }> = (props) => {
      const [data, setData] = useState<Partial<T>>(initialData);
      return (
        <Context.Provider value={{ data, setData }}>
          {props.children}
        </Context.Provider>
      );
    };

    return { Provider, Context };
  }

  // Creates the Provider and Context (normally globally, so that it can be accessed within the whole application)
  const { Provider, Context: AppContext } = ContextFactory({
    firstname: "Stacey",
    lastname: "Starfish",
  });

  /**
   * Component that accesses the AppContext for read only purposes
   */
  const ChildDisplay: React.FC = () => {
    const context = useContext(AppContext);
    return <>{context.data.firstname}</>;
  };

  /**
   * Component that accesses the AppContext for updating purposes
   */
  const ChildChanger: React.FC = () => {
    const context = useContext(AppContext);
    return (
      <>
        <button
          onClick={() => context.setData({ lastname: "Updated Lastname" })}
        >
          Change
        </button>
      </>
    );
  };

  /**
   * AppComponent
   */
  const App: React.FC = () => {
    return (
      <Provider>
        <ChildDisplay />
        <ChildChanger />
      </Provider>
    );
  };
}
