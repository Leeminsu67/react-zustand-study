import React from "react";
import { useCounterStore } from "../sotre/useCounterStore";

function Counter() {
  const { count, increament, reset, setNumber } = useCounterStore();

  const clear = () => {
    useCounterStore.persist.clearStorage();
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={increament}>one up</button>
      <button onClick={reset}>reset</button>
      <button onClick={() => setNumber(3)}>3</button>
      <button onClick={clear}>clear</button>
    </div>
  );
}

export default Counter;
