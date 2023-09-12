import { RootState } from "./redux/store";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
function App() {
  const count = useAppSelector((state: RootState) => state.counter.count);
  const dispatch = useAppDispatch();
  return (
    <div>
      <button className="btn p-3 m-2 bg-blue-600 btn-primary" onClick={() => dispatch(increment())}>Increment</button>
      <button className="btn p-3 m-2 bg-blue-600 btn-primary" onClick={() => dispatch(decrement())}>decrement</button>
      <button className="btn p-3 m-2 bg-blue-600 btn-primary" onClick={() => dispatch(incrementByAmount(5))}>
        increament 5
      </button>
      <p>{count}</p>
    </div>
  );
}

export default App;
