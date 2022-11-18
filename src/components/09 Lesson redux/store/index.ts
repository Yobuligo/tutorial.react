import redux, { Reducer } from "redux";

enum Action {
  INCREMENT,
  DECREMENT,
}

interface IAction {
  type: Action;
  counter: number;
}

interface IState {
  counter: number;
}

const reducer: Reducer<IState, IAction> = (
  state: IState = { counter: 0 },
  action: IAction
) => {
  switch (action.type) {
    case Action.INCREMENT: {
      return { counter: state.counter + 1 };
    }
    case Action.DECREMENT: {
      return { counter: state.counter - 1 };
    }
  }
};

// Create a store and provide the reducer function which should be called whenever an action is dispatched
export const store = redux.createStore(reducer);
