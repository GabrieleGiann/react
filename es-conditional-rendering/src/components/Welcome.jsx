import Age from "./Age.jsx"
import Message from "./Message.jsx"

const Welcome = ({name, age}) => {
  return (
    <div>
        <h1>Welcome {name}</h1>

        {age > 18 && <Age age={age} />}

        {age && <Age age={age} />}

        {age > 18 && age < 65 && <Age age={age} />}

        {age > 18 && name === "John" && <Age age={age} />}

        <Age age={age} />

        <Message age={age} />

    </div>
  )
}

export default Welcome