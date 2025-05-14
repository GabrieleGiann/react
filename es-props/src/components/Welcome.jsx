import Age from "./Age"


function Welcome ({name = "Pluto", age}) {
  return (
    <>
    <p>Welcome <strong>{name}</strong> </p>
    <Age age={age}/>
    </>
  )
}

export default Welcome