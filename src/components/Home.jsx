import "../stylesheets/home.scss";
import { FaEnvelope, FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";
import AnimatedBg from "./AnimatedBg";
import { useEffect } from "react";
import Typewriter from "typewriter-effect";

const Home = ({ language }) => {
  const content = {
    spanish: {
      hello: "¡Hola!",
      title: "Soy David Cid",
      description:
        "Y soy Desarrollador Frontend. Disfruto diseñando y construyendo webs donde la experiencia de usuario esté presente desde el primer momento. Me gusta aprender nuevas tecnologías, trabajar en proyectos personales o simplemente jugar videojuegos en mi tiempo libre.",
    },
    english: {
      hello: "Hello!",
      title: "I'm David Cid",
      description:
        "And I'm a Frontend Developer. I enjoy designing and building websites where the user experience is present from the first moment. I like to learn new technologies, work on personal projects or just play video games in my free time.",
    },
  };

  const text =
    language === "es" || language === "es-ES"
      ? content.spanish
      : content.english;

  useEffect(() => {}, [language]);

  return (
    <div className="home" id="home">
      <AnimatedBg />
      <div className="container home-container">
        <h1 className="home-title">
          {language === "es" || language === "es-ES" ? (
            <Typewriter
              options={{
                strings: ["¡Hola!", "Soy David Cid."],
                autoStart: true,
                loop: true,
                pauseFor: 2000,
              }}
            />
          ) : (
            <Typewriter
              options={{
                strings: ["Hi!", "I'm David Cid."],
                autoStart: true,
                pauseFor: 2000,
                loop: true,
              }}
            />
          )}
        </h1>
        <p className="home-paragraph">{text.description}</p>
        <hr className="home-line" />

        <ul className="home-social">
          <li className="home-social-element">
            <a
              href="https://www.linkedin.com/in/david-cid-lendinez/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li className="home-social-element">
            <a
              href="https://github.com/davidcid"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </li>
          <li className="home-social-element">
            <a
              href="https://twitter.com/DavidCidDev"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
          </li>
          <li className="home-social-element">
            <a
              href="mailto:david.cid@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaEnvelope />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
