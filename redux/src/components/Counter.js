import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/counter.slice";

const Counter = () => {
  //Subcribe to the state in the store
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const visible = useSelector((state) => state.counter.show);

  const increaseHandler = () => {
    dispatch(counterActions.increase());
  };

  const decreaseHandler = () => {
    dispatch(counterActions.decrease());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  //payload
  // counterActions.increase(10) => {type: Bla Bla, payload: 10}

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {visible && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={increaseHandler}>Increase</button>
        <button onClick={decreaseHandler}>Decrease</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
