import './App.css'
import React, { useState } from 'react'
import LanguageContext, { languages } from './context';
import Navbar from './components/Navbar';
import Body from './components/Body';

function App() {

  const [language, setLanguage] = useState(languages.english);

  const handleChangeLA = () => {
    setLanguage(() => {
      //TIP: Función que cambia un idioma por otro (al pulsar el botón)
    })
  }

  return (
    <div className="App">
      <>{/*  CONSEJO: Añada el proveedor LanguageContext */}
        <Navbar />
        <Body />
      </>
    </div>
  )
}

export default App