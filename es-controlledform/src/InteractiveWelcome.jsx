import Welcome from "./Welcome";
import { useState } from "react";
const InteractiveWelcome = () => {
  const [name, setName] = useState('');

  return (
    <div>
      <h2>Interactive Welcome</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Welcome name={name} />
    </div>
  );
}

export default InteractiveWelcome