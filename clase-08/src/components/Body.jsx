import { useContext } from 'react';
import LanguageContext from '../context';

const Body = () => {
    const { language } = useContext(LanguageContext);

    return (
        <div>
            <h1>{language.text.title}</h1>
            <p>{language.text.description}</p>
        </div>
    );
};

export default Body;
