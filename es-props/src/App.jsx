import './App.css'
import Welcome from './components/Welcome'


function App() {

  return (
    <>
    <Welcome age={18}/>
      <Welcome name={"pippo"} age={18}/>
    </>
  )
}

export default App
