import "./styles.css";
import { Provider } from "react-redux";
import store from "./store/store";
import Counter from "./components/Counter";
import Todos from "./components/Todos";
export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Counter />
        <Todos />
      </Provider>
    </div>
  );
}
