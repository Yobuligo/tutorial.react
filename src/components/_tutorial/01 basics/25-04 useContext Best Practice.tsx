/**
 * The following example shows a best practice so far as I worked with the context.
 * It requires the following elements:
 *      1. The data definition of the context in form of an interface or type, which is called IContext, IAppContext, I*Context, etc.
 *      2. The context itself, which is called like Context, AppContext, *Context etc.
 *      3. The property interface for the wrapper component, which is called like IContextProviderProps, IAppContextProviderProps, I*ContextProviderProps, etc.
 *      4. The wrapper component that provides the context, which is called like ContextProvider, AppContextProvider, *ContextProvider, etc.
 *      5. Instead of having useStates for each property, it makes sense to have separate custom hooks, which handle the values.
 */

import { ReactNode, createContext } from "react";
import { IValue, useValue } from "../08 custom hooks/useValue";

export namespace UseContextBestPractice {
  interface IAppContext {
    firstname: IValue<string>;
    lastname: IValue<string>;
  }

  // As I don't understand why a context should be initialized when be created, as the value is reassigned when used, the context value is set to null!
  const AppContext = createContext<IAppContext>(null!);

  interface IAppContextProviderProps {
    children?: ReactNode;
  }

  const AppContextProvider: React.FC<IAppContextProviderProps> = (props) => {
    return (
      <AppContext.Provider
        value={{ firstname: useValue(""), lastname: useValue("") }}
      >
        {props.children}
      </AppContext.Provider>
    );
  };

  export const UseContextBestPracticeComponent: React.FC = () => {
    return <AppContextProvider>any child components</AppContextProvider>;
  };
}
