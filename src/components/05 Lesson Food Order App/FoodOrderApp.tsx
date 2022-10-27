import { Context } from "./model/Context";
import { IdGenerator } from "./model/IdGenerator";
import { IMeal } from "./model/IMeal";
import { Summary } from "./summary/Summary";
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
  return (
    <>
      <Context.Provider value={{ meals: meals }}>
        <Toolbar />
        <Summary />
      </Context.Provider>
    </>
  );
};
