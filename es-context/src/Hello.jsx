import { useContext } from 'react';
import LanguageContext from './LanguageContext';

const Hello = () => {
  const { language } = useContext(LanguageContext); // solo lettura

  const translations = {
    en: 'Hello, World!',
    es: '¡Hola, Mundo!',
    fr: 'Bonjour, le monde !',
    de: 'Hallo, Welt!',
    it: 'Ciao, Mondo!',
  };

  return <h2>{translations[language]}</h2>;
};

export default Hello;