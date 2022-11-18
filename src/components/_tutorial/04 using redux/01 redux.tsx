import { Provider, useDispatch, useSelector } from "react-redux";
import redux, { Reducer } from "redux";

// How to use redux?
//  1. Implement the dependencies redux and react-redux
//  2. Best Practice: provide a separate folder for redux named 'store'
//  3. Implement a file (e.g. index.ts) to provide the redux store which should be used
//  4. Extend the e.g. the App component by wrapper <App /> by <Provider> which is part of redux (library react-redux). Equal to useContext it means a store can be used within components which are wrapped by the Provider.
//      here alternatively it is wrapped via another ParentComponent
//  5. provide the store to the <Provider store={store}/> by importing the file which contains the store
//  6. Use a state of the store (a property) by using e.g. the useSelector() function. Each time the referenced value changed the component which uses useSelector gets updated
//  7. Dispatch actions by using useDispatch

// 3.1 implement the reducer
enum Action {
  INCREMENT,
  DECREMENT,
}

type IAction =
  | { type: Action.INCREMENT; counter: number }
  | { type: Action.DECREMENT; counter: number };

interface IState {
  counter: number;
}

const reduxReducer: Reducer<IState, IAction> = (
  state: IState = { counter: 0 },
  action: IAction
) => {
  switch (action.type) {
    case Action.DECREMENT: {
      return { counter: state.counter - 1 };
    }
    case Action.INCREMENT: {
      return { counter: state.counter + 1 };
    }
  }
};

// 3.2 provide a global store that refers the reducer function
const store = redux.createStore(reduxReducer);

// 6. use a state by using function useSelector, which returns the current state
const ReduxComponent: React.FC = () => {
  const counter = useSelector((state: IState) => {
    return state.counter;
  });
  return <>{counter}</>;
};

// 7. Dispatch an action by using function useDispatch
const ParentComponent: React.FC = () => {
  const dispatch = useDispatch();
  const onIncrementHandler = () => {
    dispatch({ type: Action.INCREMENT });
  };
  const onDecrementHandler = () => {
    dispatch({ type: Action.DECREMENT });
  };
  return (
    <Provider store={store}>
      <ReduxComponent />
      <button onClick={onIncrementHandler}>Increment</button>
      <button onClick={onDecrementHandler}>Decrement</button>
    </Provider>
  );
};
