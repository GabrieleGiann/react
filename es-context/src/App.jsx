import Hello from "./Hello";
import { useState } from "react";
import LanguageContext from './LanguageContext';

const App = () => {
  const [language, setLanguage] = useState('en');

  return (
    <LanguageContext.Provider value={{ language }}>
      <div>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
          <option value="de">Deutsch</option>
          <option value="it">Italiano</option>
        </select>
        <Hello />
      </div>
    </LanguageContext.Provider>
  );
};

export default App;