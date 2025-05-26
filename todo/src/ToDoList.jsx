/*
Create a TodoList component that renders a ul tag with a li tag for each item contained in the todos state variable. 
The todos state variable should be an array of strings. The TodoList component should also contain an input tag and a button. 
When the button is clicked, the event handler should add the value of the input tag to the todos array.
Clear the input every time a Todo is added to the todos array.
Add a "reset" button that clears the todos array when clicked.
Add a "remove" button to each li tag. When clicked, the event handler should remove corresponding item from the todos array.

*/


import React from 'react'
import { useState } from 'react'
const ToDoList = () => {
  const [toDo, setToDo] = useState([
    'Fare la spesa', 'Chiamare idraulico', 'Andare dal barbiere'
  ])  

  const [newItem, setNewItem] = useState('');


   const handleAdd = () => {
    setToDo((prev) => [...prev, newItem]);
    setNewItem('');
  };
   const handleReset = () => {
    setToDo([]);
  };

  const handleRemove = (itemToRemove) => {
    setToDo((prev) => prev.filter((item) => item !== itemToRemove));
  };

  return (
    <div className="todo-container">
      <h1>ToDo List</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Scrivi un nuovo task..."
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={handleAdd}>Aggiungi</button>
        <button className="reset-btn" onClick={handleReset}>Reset</button>
      </div>

      <ul className="todo-list">
        {toDo.map((item) => (
          <li key={item}>
            <span>{item}</span>
            <button className="remove-btn" onClick={() => handleRemove(item)}>
              Rimuovi
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ToDoList