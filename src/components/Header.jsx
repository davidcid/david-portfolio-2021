import "../stylesheets/header.scss";
import { Link } from "react-scroll";
import { useState } from "react";
import LanguageSwitch from "./LanguageSwitch";

const Header = ({ language, setLanguage }) => {
  const [active, setActive] = useState(false);

  const content = {
    spanish: {
      home: "Inicio",
      about: "Sobre mí",
      skills: "Skills",
      projects: "Proyectos",
    },
    english: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
    },
  };

  const text = language === "es" ? content.spanish : content.english;

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
            {text.home}
          </Link>
          <Link
            className="menu-item"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            onClick={closeMenu}
          >
            {text.about}
          </Link>
          <Link
            className="menu-item"
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            onClick={closeMenu}
          >
            {text.skills}
          </Link>
          <Link
            className="menu-item"
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            onClick={closeMenu}
          >
            {text.projects}
          </Link>
        </ul>
        <LanguageSwitch language={language} setLanguage={setLanguage} />
      </nav>
    </header>
  );
};

export default Header;
