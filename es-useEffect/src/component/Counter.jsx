import { useEffect, useState } from "react"

{/* Crea un componente funzione Counter e una nuova variabile di stato denominata counter inizializzata a 0.*
Fai in modo che il valore iniziale del contatore e l'importo dell'incremento vengano passati come props */}


const Counter = ({initialValue, incrementValue}) => {
  const [counter,setCounter]=useState(initialValue)
  {/*Il componente Counter dovrebbe visualizzare il valore del contatore all'interno di un tag h2 e il 
    valore del contatore dovrebbe essere incrementato ogni volta che l'utente fa clic su un pulsante.*/}

  const handleIncrement= () =>{
    setCounter((counter)=> counter + incrementValue)
  }
 
  {/*Aggiungi un effetto collaterale al componente Counter del primo esercizio sullo stato che stampi
     il valore corrente del contatore all'interno della console. */}

  useEffect(()=> {
    console.log(`The value of the counter is: ${counter}`);
  },[counter])


  return (
    <>
        <h2>The value of the counter is: {counter} </h2>
        <button onClick={handleIncrement}>Increment Button</button>
    </>
  )
}

export default Counter