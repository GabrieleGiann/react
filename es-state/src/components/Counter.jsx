import { useState } from 'react'
import CounterDisplay from './CounterDisplay'
import Button from './Button'
/*
Create a Counter function component and create a new state variable called counter initialized to 0.
The counter value should be incremented every time the user clicks on a button. Tip: use the useState hook.
Make it so that the initial value of the counter and the increment amount are passed as props to the component.
Add a decrement button and a reset button to the Counter component. The decrement button should decrement the counter by the
 amount passed as a prop, and the reset button should reset the counter to the initial value passed as a prop.
Create a new component called CounterDisplay passing it the counter state variable as a count prop, that should be 
rendered within an h2 tag.
The CounterDisplay component should be rendered within the Counter component. When calling "setter"
function to increment the counter, should the parameter be a function or an immediate value? 
Why? Write your answers in a comment.

The parameter should be a function because u can't update parameter directly
*/
const Counter = ({start, increment}) => {
  const [count, setCount] = useState(start)
 
  const handleIncrement = () =>{
    setCount((count) => count + increment)
  } 

  const handleDecrement =() =>{
    setCount((count) => count - increment)
  }
 
  const handleReset = () =>{
    setCount(start)
  }

  return (
    <div id="container">
    <CounterDisplay value={count}/>  
    {/*
    Funziona ma non è una soluziene molto pulita, l'ho sostituita con delle funzioni 
    <button onClick={()=> setCount((count) => count + increment)}> Aumenta</button>
    <button onClick={()=> setCount((count) => count - increment)}>Diminuisci </button>
    <button onClick={()=> setCount((count) => count = start)}>reset </button>
    <button onClick={handleIncrement}>Aumenta</button>
    <button onClick={handleDecrement}>Diminuisci</button>
    <button onClick={handleReset}>Resetta</button>
    */}

    <Button handler={handleIncrement} label={"Aumenta"}/>
    <Button handler={handleDecrement} label={"Diminuisci"}/>
    <Button handler={handleReset} label={"Resetta"}/>
    </div>
  )
}

export default Counter