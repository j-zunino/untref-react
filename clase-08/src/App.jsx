import { useState } from 'react';
import './App.css';
import Body from './components/Body';
import Navbar from './components/Navbar';
import LanguageContext, { languages } from './context';

function App() {
    const [language, setLanguage] = useState(languages.english);

    const handleChangeLA = () => {
        if (language === languages.english) {
            setLanguage(languages.portuguese);
            return;
        }

        if (language === languages.portuguese) {
            setLanguage(languages.spanish);
            return;
        }

        if (language === languages.spanish) {
            setLanguage(languages.english);
            return;
        }
    };

    return (
        <div className="App">
            <LanguageContext.Provider value={{ language, handleChangeLA }}>
                <Navbar />
                <Body />
            </LanguageContext.Provider>
        </div>
    );
}

export default App;

