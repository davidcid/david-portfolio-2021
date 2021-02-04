import "../stylesheets/header.scss";
import { Link } from "react-scroll";
import { useState } from "react";

const Header = () => {
  const [active, setActive] = useState(false);

  const closeMenu = () => {
    setActive(false);
  };

  const toggleMenu = () => {
    active ? setActive(false) : setActive(true);
  };

  return (
    <header className="header">
      <div className={`menu-btn ${active ? "close" : ""}`} onClick={toggleMenu}>
        <div class="btn-line"></div>
        <div class="btn-line"></div>
        <div class="btn-line"></div>
      </div>
      <nav className={`nav ${active ? "active" : ""}`}>
        <ul className="menu">
          <Link
            className="menu-item"
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            onClick={closeMenu}
          >
            Inicio
          </Link>
          <Link
            className="menu-item"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            onClick={closeMenu}
          >
            Sobre mí
          </Link>
          <Link
            className="menu-item"
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            onClick={closeMenu}
          >
            Skills
          </Link>
          <Link
            className="menu-item"
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            onClick={closeMenu}
          >
            Proyectos
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
