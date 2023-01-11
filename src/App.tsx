import { BrowserRouter } from "react-router-dom";
import { Lessons } from "./components/Lessons/Lessons";

const App = () => {
  return (
    <BrowserRouter>
      <Lessons />
    </BrowserRouter>
  );
};

export default App;
