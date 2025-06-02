import Hello from "./Hello";
import { useState } from "react";
import LanguageContext from './LanguageContext';

const App = () => {
  const [language, setLanguage] = useState('en');



  const selectOption = 
    [
      {
        code: "it",
        label:"italiano"
      },
      {
        code: "en",
        label:"inglese"
      },
      {
        code: "es",
        label:"spagnolo"
      },
      {
        code:"de",
        label:"tedesco"
      },
      {
        code:"fr",
        label:"francese"
      }
    ]
  
  return (
    <>
      <div>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          {
            selectOption.map((s)=>(
              <option key={s.code} value={s.code}>{s.label}</option>
            ))
          }
    </select>
      </div>
      <LanguageContext.Provider value={{ language }}>
      <Hello />
      </LanguageContext.Provider>
    </>
  );
};

export default App;