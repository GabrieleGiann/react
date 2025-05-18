import { useEffect, useState } from "react"

const Clock = () => {

 {/* Crea un componente Clock che visualizzi l'ora corrente
     all'interno di un tag h2. Utilizza l'hook useEffect per aggiornare l'ora ogni secondo.*/}
  const [date,setDate]= useState(new Date())

  useEffect(()=>{
    setInterval(()=>{
        setDate(new Date())
    },1000)
  },[date])

  return (
    <h2>{date.toLocaleTimeString()}</h2>
  )
}

export default Clock