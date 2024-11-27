import { useContext } from 'react';
import '../App.css';
import LanguageContext from '../context';

const Navbar = () => {
    const { language, handleChangeLA } = useContext(LanguageContext);

    return (
        <div className="navbar">
            <p>{language.text.home}</p>
            <p>
                {language.text.current}: {language.id}
            </p>
            <button onClick={handleChangeLA}>{language.text.button}</button>
        </div>
    );
};

export default Navbar;

