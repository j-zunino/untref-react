import { useState } from 'react';
import './App.css';
import UserProfile from './components/UserProfile';
import UserProfileFunc from './components/UserProfileFunc';

function App() {
    // true mostrar, false oculta
    const [mostrarPerfil, setMostrarPerfil] = useState(true);
    return (
        <>
            {mostrarPerfil && <UserProfile />}
            {/* {mostrarPerfil && <UserProfileFunc />} */}
            <button onClick={() => setMostrarPerfil(!mostrarPerfil)}>
                Toggle perfil
            </button>
        </>
    );
}

export default App;
