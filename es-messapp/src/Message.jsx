import { useEffect } from 'react'
import { useState } from 'react'
import './Message.css'

const Message = () => {
  //creo uno useState che è un array di oggetti
  const [message, setMessage] = useState([
    {text:"Ciao", sender:"bot"}
  ]
  )
  
  //creo uno useState che sarà una stringa con il messaggio
  const [newMessage, setNewMessage] = useState("")
  

  const handleSend = () => {
  console.log("handleSend in esecuzione...", newMessage);
  setMessage(prev => [...prev, { text: newMessage, sender: "io" }]);
  };

  useEffect(()=>{
    const elm = message.at(-1); // accede all'ultimo messaggio senza modificarlo
    if (elm.sender === "io") {
        getResponse(elm.text)  // Chiama getResponse
    }
  },[message])


  const getResponse = (message) =>{
    console.log("Funzione che risponde")
    switch (message) {
        case "Ciao":
            setMessage(prev => [...prev, { text: "ciao amico", sender: "bot" }]);
            break;
    
        case "Sei umano?":
            setMessage(prev => [...prev, { text: "umano? bleh ", sender: "bot" }]);
            break;

        case "Come stai?":
            setMessage(prev => [...prev, { text: "Non so come sto ma puoi vedere il mio stato tramite console.log", sender: "bot" }]);    
            break;

        case "Ma sei scemo?":
            setMessage(prev => [...prev, { text: "Al massimo lo sono come chi mi ha creato!", sender: "bot" }]);    
            break;
     
        default:
            setMessage(prev => [...prev, { text: "Non so cosa rispondere ", sender: "bot" }]);
    }
  }

  return (
    <div className="chat-container">
    <div className="chat-messages">
      {message.map((msg, index) => (
        <div key={index} className={`message ${msg.sender}`}>
          <strong>{msg.sender}:</strong> {msg.text}
        </div>
      ))}
    </div>

    <div className="chat-input">
      <input
        type="text"
        placeholder="Scrivi un messaggio..."
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
      />
      <button onClick={handleSend}>Invia</button>
    </div>
  </div>
    
  )
}

export default Message