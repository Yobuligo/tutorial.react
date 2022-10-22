// Another state management next to useState
// When to use reducer
// 	1. When states belong together (e.g. password input value, password valid value )
//  2. When a states depends on another state (e.g. a button (Login User) is disabled, enabled depending on the given username and password)
// Otherwise you could also use a useState which contains an object with all information like {firstname: string, lastname: string}
// But if you have e.g. conditions a useReducer makes sense. {firstname: string, lastname: string, valid: boolean}.
//
// Why to use reducer
//	1. It might be happen that a state, from which another states depends on is still under update (and not up to date), wasn't processed yet

import { Reducer, useReducer } from "react";
import { TODO } from "../../../Global";

export const UseReducerComponent: React.FC = () => {
  TODO();
  return <></>;
};

// Best Practice for a type safe access

// 1. Provide an enum with all actions for the reducer
export enum PersonAction {
  CREATE,
  REMOVE,
  UPDATE,
}

// 2. Provide a type that holds all action Variants with required parameters. This must be a discriminated union type and all provided types need an attribute "type".
//    Later it is required to differ between these types. Thanks to TypeScript it know exactly from the given type which attributes the type has. This means it is possible for a type safe access to the attributes.
//    The types itself are coming from the enum instead of using literal. This means whenever an enum changes you can find all user and you can rename an option within the num at a central place.
export type IPersonAction =
  | { type: PersonAction.CREATE; attr: string; attr2: number }
  | {
      type: PersonAction.REMOVE;
      attr3: boolean;
      function: () => void;
    }
  | { type: PersonAction.UPDATE; attr1: string; function: () => void };

// 3. Provide the state that should be managed
export interface IPersonState {
  attr?: string;
  attr2?: number;
  attr3?: boolean;
  function?: () => void;
}

// 4. Provide the reducer function. It has two parameters. First the current state. second the action to be executed.
//    Via switch case statement the action.type can be evaluated and a type safe access is possible.
export const personStateReducer: Reducer<IPersonState, IPersonAction> = (
  prevState: IPersonState,
  action: IPersonAction
) => {
  switch (action.type) {
    case PersonAction.CREATE: {
      console.log(
        `Type safe access to ${action.attr} and ${action.attr2} is provided`
      );
      break;
    }
    case PersonAction.REMOVE: {
      console.log(
        `Type safe access to ${action.attr3} and ${action.function} is provided`
      );
      break;
    }
    case PersonAction.UPDATE: {
      console.log(
        `Type safe access to ${action.attr1} and ${action.function} is provided`
      );
      break;
    }
  }
  return prevState;
};

// 5. provide the component and initialize the reducer
export const BestPracticeUseReducer: React.FC = () => {
  const [personState, dispatchPersonAction] = useReducer(
    personStateReducer,
    {attr: "initialize value", }
  );
  return <></>;
};
