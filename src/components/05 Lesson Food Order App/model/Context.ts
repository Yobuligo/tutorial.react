import React from "react";
import { IMeal } from "./IMeal";
import { IShoppingCartPosition } from "./IShoppingCartPosition";

export const Context = React.createContext<{
  meals: IMeal[];
  shoppingCartPositions: IShoppingCartPosition[];
  onAddMeal: (meal: IMeal, amount: number) => void;
}>({
  meals: [],
  shoppingCartPositions: [],
  onAddMeal: () => {},
});
