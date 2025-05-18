import './App.css'
import Clock from './component/Clock'
import './component/Counter'
import Counter from './component/Counter'

function App() {


  return (
    <>
      <Counter initialValue={5} incrementValue={2}/>
      <Clock />
    </>
  )
}

export default App
