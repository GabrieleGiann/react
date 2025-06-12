import { useState } from "react";
import useCounter from "./hooks/useCounter";
import FilteredList from "./components/FilteredList";

const List = [
  { id: 1, name: "Alice", age: 17 },
  { id: 2, name: "Margot", age: 22 },
  { id: 3, name: "Charlie", age: 30 },
  { id: 4, name: "Bubino", age: 15 },
];

function App() {
  const { count, increment, decrement, reset } = useCounter(0);
  const [list, setList] = useState(List);

  return (
    <div style={{ padding: 20 }}>
      <h2>useCounter Hook</h2>
      <p>Counter: {count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>

      <hr />

      <h2>Filtered List </h2>
      <FilteredList list={list} />
    </div>
  );
}

export default App;
