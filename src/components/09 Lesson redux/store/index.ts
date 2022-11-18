import { createStore, Reducer } from "redux";

export enum ReduxAction {
  INCREMENT,
  DECREMENT,
}

export interface IReduxAction {
  type: ReduxAction;
  counter: number;
}

export interface IReduxState {
  counter: number;
}

export const reducer: Reducer<IReduxState, IReduxAction> = (
  state: IReduxState = { counter: 0 },
  action: IReduxAction
) => {
  switch (action.type) {
    case ReduxAction.INCREMENT: {
      return { counter: state.counter + 1 };
    }
    case ReduxAction.DECREMENT: {
      return { counter: state.counter - 1 };
    }
  }

  return state;
};

// Create a store and provide the reducer function which should be called whenever an action is dispatched
const store = createStore(reducer);

export default store;
