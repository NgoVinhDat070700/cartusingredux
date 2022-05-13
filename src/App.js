import { Provider } from "react-redux";
import { Cart } from "./components/Cart";
import { Home } from "./components/Home";
import { store } from "./redux/store/store";
import "./styles.css";

export default function App() {
  return (
    <Provider store={store}>
      <Cart />
      <Home />
    </Provider>
  );
}
