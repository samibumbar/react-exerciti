import { useState } from "react";

import "./increment.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div className="container">
      <h2>Counter:{count}</h2>
      <button onClick={increment}>Ad 1 count</button>
      <button onClick={decrement}>remove 1 Count</button>

      <button onClick={reset}>Reset</button>
    </div>
  );
}
export default Counter;
