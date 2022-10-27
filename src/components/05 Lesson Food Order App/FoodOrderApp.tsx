import { Context } from "./model/Context";
import { IMeal } from "./model/IMeal";
import { Toolbar } from "./toolbar/Toolbar";

const meals: IMeal[] = [
  { title: "Sushi", description: "Fish meal", price: 22.0 },
  {
    title: "Schnitzel",
    description: "Schnitzel meal with potatoes",
    price: 14.5,
  },
  { title: "Breakfast", description: "Breakfast with ", price: 5.99 },
];

export const FoodOrderApp: React.FC = () => {
  return (
    <>
      <Context.Provider value={{ meals: meals }}>
        <Toolbar />
      </Context.Provider>
    </>
  );
};
