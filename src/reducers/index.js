import { combineReducers } from "redux";
import counterReducer from "./Counter";
import loggedReducer from "./isLogged";

const rootReducer = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer
});
// Or
// const rootReducer = combineReducers({
//   counterReducer,
//   loggedReducer
// })
export default rootReducer;
