import ReactDOM from "react-dom";

import App from "./App";

import { createStore } from "redux";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
const store = createStore(rootReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
