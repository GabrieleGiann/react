import './App.css'
import Colors from './Colors';
function App() {
  const colorList = [
  { id: 1, name: 'Rosso' },
  { id: 2, name: 'Verde' },
  { id: 3, name: 'Blu' },
];

  return (
    <>
      <div>
      <h1>Lista Colori</h1>
      <Colors colors={colorList} />
     </div>
    </>
  )
}

export default App
