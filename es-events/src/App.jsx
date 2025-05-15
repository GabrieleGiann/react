import AlertClock from './AlertClock'
import './App.css'

function App() {

  function Alert()
  {
    alert(new Date())
  }

  return (
    <>
      <AlertClock callback={Alert}/>
    </>
  )
}

export default App
