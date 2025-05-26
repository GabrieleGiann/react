import './App.css'
import { useState } from 'react'
import InteractiveWelcome from './InteractiveWelcome'
import Login from './Login'


function App() {
  const handleLogin = (formData) => {
    console.log('Login data:', formData);
  };

  return (
    <div>
      <InteractiveWelcome />
      <Login onLogin={handleLogin} />
    </div>
  );
}

export default App;