import { useState } from "react";
import "./increment-3.css";

function MyFirstIncrement() {
  const [count, setCount] = useState(0);

  function plus() {
    setCount(count + 10000000);
  }
  function minus() {
    setCount(count - 1000);
  }
  function resset() {
    setCount(0);
  }
  return (
    <div className="container">
      <h2>Damaris kg : {count} </h2>
      <button onClick={plus}>Plus</button>
      <button onClick={minus}>Minus</button>
      <button onClick={resset}>Resset</button>
    </div>
  );
}
export default MyFirstIncrement;
