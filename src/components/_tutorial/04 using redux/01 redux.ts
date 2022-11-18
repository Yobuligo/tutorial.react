import redux, { Reducer } from "redux";

// How to use redux?
//  1. Implement the dependencies redux and react-redux
//  2. Best Practice: provide a separate folder for redux named 'store'
//  3. Implement a file (e.g. index.ts) to provide the redux store which should be used
//  4. Extend the e.g. the App component by wrapper <App /> by <Provider> which is part of redux. Equal to useContext it means a store can be used within components which are wrapped by the Provider.

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
