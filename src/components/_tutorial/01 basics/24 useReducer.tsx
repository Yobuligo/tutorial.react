// Another state management next to useState
// When to use reducer
// 	1. When states belong together (e.g. password input value, password valid value )
//  2. When a states depends on another state (e.g. a button (Login User) is disabled, enabled depending on the given username and password)
//
// Why to use reducer
//	1. It might be happen that a state, from which another states depends on is still under update (and not up to date), wasn't processed yet

import { TODO } from "../../../Global";

export const UseReducerComponent: React.FC = () => {
  TODO();
  return <></>;
};
