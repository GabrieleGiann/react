import { useState } from "react";
//un hook custom è una funzione che ritorna delle sue costanti e funzioni
function useCounter(initialValue) {
  //Il  counter è uno stato, quindi un hook può avere più di un hook annidato
  const [count, setCount] = useState(initialValue);

  //funzioni reducer
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(initialValue);

  //ritorno dei valori
  return { count, increment, decrement, reset };
}

//esportazione
export default useCounter;
