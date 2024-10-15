import { useState } from "react";
import "./increment-2.css";
function MyFirstIncrement() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const resset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <h2>Your Count Is:{count}</h2>
      <button onClick={increment}>Increment With 1</button>
      <button onClick={decrement}>Decrement With 1</button>
      <button onClick={resset}>Reset</button>
    </div>
  );
}
export default MyFirstIncrement;
