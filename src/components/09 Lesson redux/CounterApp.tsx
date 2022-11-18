import { Provider } from "react-redux";
import CounterCockpit from "./CounterCockpit";
import store from "./store";

const CounterApp: React.FC = () => {
  // provide the store for this and all sub components via a Provider
  return (
    <div>
      <Provider store={store}>
        <CounterCockpit />
      </Provider>
    </div>
  );
};

export default CounterApp;
