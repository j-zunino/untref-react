import React, { useContext } from 'react'
import LanguageContext from '../context'

const Body = () => {
    
    /* CONSEJO: Utilice useContext() */
    
    return (
        <div>
            {/* CONSEJO: Utilice los valores capturados a través del contexto */}
            <h1>Título</h1>
            <p>Descrição</p>
        </div>
    )
}

export default Body