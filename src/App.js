import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import { increment, decrement } from "./actions";
export default function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h3>Confidential Information</h3> : ""}
    </div>
  );
}
