import { useState } from "react";
import { Menu } from "./menu/Menu";
import { Context } from "./model/Context";
import { IdGenerator } from "./model/IdGenerator";
import { IMeal } from "./model/IMeal";
import { IShoppingCartPosition } from "./model/IShoppingCartPosition";
import { Toolbar } from "./toolbar/Toolbar";

const meals: IMeal[] = [
  {
    id: IdGenerator.next(),
    title: "Sushi",
    description: "What a healthy food. I like each piece of it.",
    price: 22.0,
  },
  {
    id: IdGenerator.next(),
    title: "Schnitzel",
    description:
      "Schnitzel meal with potatoes, ketchup and a lot of other unhealthy ingredients.",
    price: 14.5,
  },
  {
    id: IdGenerator.next(),
    title: "Breakfast",
    description:
      "Breakfast with eggs, rolls, beacon, jam, orange juice and tomatoes",
    price: 5.99,
  },
];

export const FoodOrderApp: React.FC = () => {
  const [shoppingCartPositions, setShoppingCartPositions] = useState<
    IShoppingCartPosition[]
  >([]);
  const onAddMealHandler = (meal: IMeal, amount: number) => {
    setShoppingCartPositions((present) => {
      let shoppingCartPosition = present.filter((entry) => {
        return entry.meal.id === meal.id;
      })[0];

      if (shoppingCartPosition === undefined) {
        shoppingCartPosition = { meal: meal, amount: amount };
        return [...present, shoppingCartPosition];
      } else {
        shoppingCartPosition.amount += amount;
        return [...present];
      }
    });
  };

  return (
    <>
      <Context.Provider
        value={{
          meals: meals,
          shoppingCartPositions: shoppingCartPositions,
          onAddMeal: onAddMealHandler,
        }}
      >
        <Toolbar />
        <Menu />
      </Context.Provider>
    </>
  );
};
