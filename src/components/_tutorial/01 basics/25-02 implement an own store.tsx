/**
 * It seems that redux really has advantages to use context. Especially when it comes to performance issues, as all dependent components will be rerendered when the context changed.
 * But maybe there is a way to avoid that by providing an own store. This is a generic store which can be used for several stores.
 */

import { useEffect, useState } from "react";

let globalState = {};
let listeners: any[] = [];
let actions: any = {};

export const useStore = () => {
  // provide a store which can be accessed from components
  const setState = useState(globalState)[1];

  // provide a dispatcher which can be used by components which are using the store
  const dispatch = (action: any, payload: any) => {
    const newState = actions[action](globalState, payload);
    // update global state with the new values of the action
    globalState = { ...globalState, ...newState };

    // inform listeners
    for (const listener of listeners) {
      listener(globalState);
    }
  };

  useEffect(() => {
    // add state when useStore is initialized
    listeners.push(setState);

    // provide a clean up function whenever is hook is destructed and reset it to setState
    return () => {
      listeners = listeners.filter((listener) => listener !== setState);
    };
  }, [setState]);

  return [globalState, dispatch];
};

/**
 * provide a possibility to initialize the store
 */
const initStore = (userActions: any, initialState: any) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...userActions };
};

/**
 * Here a concrete product store is implemented
 */
interface IProduct {
  id: string;
  title: string;
}

const configureProductStore = () => {
  const actions = {
    TOGGLE_FAV: (currentState: any, productId: string) => {
      return { products: currentState.products };
    },
  };
  initStore(actions, {
    products: [
      { id: "1", title: "product 1" },
      { id: "2", title: "product 2" },
    ],
  });
};

/**
 * Here comes a component or app that uses the store
 */

// directly initialize the store
configureProductStore();

const UseStoreComponent: React.FC = () => {
  const [state, dispatch] = useStore();
  const items = (state as any).products.map((product: any) => (
    <h1>product.id</h1>
  ));
  const onChangeDispatcher = () => {
    (dispatch as any)("TOOGLE_FAV", "myId");
  };

  return (
    <>
      {items}
      <button onClick={onChangeDispatcher}>Call dispatcher</button>
    </>
  );
};
