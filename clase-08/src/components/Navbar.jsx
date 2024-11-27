import React, { useContext } from 'react'
import "../App.css"
import LanguageContext from '../context'

const Navbar = () => {
    /* TIP: Descomentar este bloque de código, cuando "App.jsx" tiene un proveedor
    const { language, handleChangeLA } = useContext(LanguageContext)
    const {text} = idioma
    
    */
    return (
        <div className="navbar">
            {/* CONSEJO: Deje esta información dinámica, utilice los valores capturados a través del contexto (véase 'texto', en la línea 8). */}
            <p>Início</p> 
            <p>Idioma atual: PTBR</p>
            <button>Alterar idioma</button>
        </div>
    )
}

export default Navbar