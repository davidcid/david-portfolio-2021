import '../stylesheets/header.scss';
import { Link } from 'react-scroll';

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <ul className="menu">
                    <Link 
                        className="menu-item" 
                        activeClass="active" 
                        to="home" 
                        spy={true} 
                        smooth={true}
                    >
                        Inicio
                    </Link>
                    <Link 
                        className="menu-item" 
                        activeClass="active" 
                        to="about" 
                        spy={true} 
                        smooth={true}
                    >
                        Sobre mí
                    </Link>
                    <Link 
                        className="menu-item" 
                        activeClass="active" 
                        to="skills" 
                        spy={true} 
                        smooth={true}
                    >
                        Skills
                    </Link>
                    <Link 
                        className="menu-item" 
                        activeClass="active" 
                        to="projects" 
                        spy={true} 
                        smooth={true}
                    >
                        Proyectos
                    </Link>
                    <Link 
                        className="menu-item" 
                        activeClass="active" 
                        to="contact" 
                        spy={true} 
                        smooth={true}
                    >
                        Contacto
                    </Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header;