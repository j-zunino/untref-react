import { useContext } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import { ThemeContext } from './context/ThemeContext';

function App() {
    const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

    return (
        <div
            style={{
                backgroundColor: isDarkMode ? '#fff' : '#000',
                color: isDarkMode ? '#000' : '#fff'
            }}
        >
            <h1>App con modo {isDarkMode ? 'oscuro' : 'claro'}.</h1>
            <button onClick={toggleDarkMode}>Toggle theme</button>
            <Dashboard />
        </div>
    );
}

export default App;
