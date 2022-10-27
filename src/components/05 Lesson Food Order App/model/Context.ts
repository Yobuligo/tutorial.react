import React from "react";
import { IMeal } from "./IMeal";

export const Context = React.createContext<{ meals: IMeal[] }>({
  meals: [],
});
