import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <Link to="/home">Home</Link>
            <Link to="/Contacto">Contacto</Link>
        </nav>
    );
};

export default Navbar;
