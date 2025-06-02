
import './App.css'
import Counter from './components/Counter.jsx'

function App() {

  return (
    <>
      <Counter start={10} increment={5} />

      <Counter start={2} increment={3} />
    </>
  )
}

export default App
