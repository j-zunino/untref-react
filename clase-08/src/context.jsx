import { createContext } from 'react';
import EN from './languages/english.json';
import PTBR from './languages/portuguese.json';
import ES from './languages/spanish.json';

export const languages = {
    english: {
        id: 'EN',
        text: EN
    },
    portuguese: {
        id: 'PTBR',
        text: PTBR
    },
    spanish: {
        id: 'ES',
        text: ES
    }
};

const defaultContextValue = {
    language: languages.english,
    handleChangeLA: () => {}
};
const LanguageContext = createContext(defaultContextValue);

export default LanguageContext;
