import { Provider } from "react-redux";
import store from "./redux/store";
import Navigation from "./routes/Routes";

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
