export default function Header() {
    return (
        <header className="main-header">
            <h1>Bienvenidos a Mi Página Completa</h1>
            <nav>
                <ul className="nav-list">
                    <li>
                        <a href="#inicio">Inicio</a>
                    </li>
                    <li>
                        <a href="#sobre-mi">Sobre mí</a>
                    </li>
                    <li>
                        <a href="#contacto">Contacto</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
