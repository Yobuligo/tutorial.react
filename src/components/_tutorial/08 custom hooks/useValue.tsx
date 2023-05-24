/**
 * Another custom hook might be useValue.
 * useValue actually represents useState. But it returns the useState content as object, which makes it easy to use it for app context objects
 */

import { createContext, useState } from "react";

export interface IValue<T> {
  readonly value: T;
  setValue(newValue: T): void;
}

export class ValueDummy<T> implements IValue<T> {
  value: T = {} as T;
  setValue(newValue: T): void {}
}

/**
 * This hook handles a useState but returns an instance of {@link IValue}.
 */
export function useValue<T>(initialValue: T): IValue<T> {
  const [value, setValue] = useState(initialValue);
  return { value, setValue };
}

enum Language {
  de,
  en,
}

const AppContextData = {
  language: new ValueDummy<Language>(),
};

const AppContext = createContext(AppContextData);

/**
 * When initializing the AppContext use useValue instead of providing many useStates for each property
 */
export const UseValueComponent: React.FC = () => {
  return (
    <AppContext.Provider
      value={{ language: useValue(Language.de) }}
    ></AppContext.Provider>
  );
};
