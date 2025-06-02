import { useState } from "react";
import CounterDisplay from "./CounterDisplay";

const Counter = ({ start, increment }) => {
  const [count, setCount] = useState(start);

  const handleIncrement = () => {
    setCount((count) => count + increment);
  };

  const handleDecrement = () => {
    setCount((count) => count - increment);
  };

  const handleReset = () => {
    setCount(start);
  };

  return (
    <div id="container">
      <CounterDisplay value={count} />
      <button onClick={handleIncrement}> Aumenta</button>
      <button onClick={handleDecrement}> Diminuisci </button>
      <button onClick={handleReset}>Resetta</button>
    </div>
  );
};

export default Counter;
