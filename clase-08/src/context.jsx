import { createContext } from 'react';
import EN from "./languages/english.json"
import PTBR from "./languages/portuguese.json"
import ES from "./languages/spanish.json"

export const languages = {
    english: {
        id: "EN",
        text: EN
    },
    /* SUGERENCIA: Añada las nuevas lenguas que desee */
};

/* CONSEJO: Utilice createContext e inicie el idioma inglés como predeterminado. */
const LanguageContext = "";

export default LanguageContext;