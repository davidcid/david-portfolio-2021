import '../stylesheets/header.scss';

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <ul className="menu">
                    <li className="menu-item"><a href="#home">Inicio</a></li>
                    <li className="menu-item"><a href="#about">Sobre mí</a></li>
                    <li className="menu-item"><a href="#skills">Skills</a></li>
                    <li className="menu-item"><a href="#projects">Proyectos</a></li>
                    <li className="menu-item"><a href="#">Contacto</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;