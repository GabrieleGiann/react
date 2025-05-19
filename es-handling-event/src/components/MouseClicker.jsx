

const MouseClicker = () => {


  const printName = (e) =>{
    console.log(e.target.name)
  }  

  const printImage = (e) =>{
    console.log(e.target.src)
  }

  return (
    <>
    <button onClick={printName} name="one">Stampa il nome</button>
     <button onClick={printImage} name="two"><img src="https://placehold.co/200" /></button>
    </>
  )
}

export default MouseClicker