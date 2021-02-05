import "../stylesheets/home.scss";
import TypeIt from "typeit-react";
import { FaEnvelope, FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";
import AnimatedBg from "./AnimatedBg";
import { useEffect, useState } from "react";

const Home = ({ language }) => {
  const [instance, setInstance] = useState(null);
  const [typingText, setTypingText] = useState(null);

  const content = {
    spanish: {
      hello: "¡Hola!",
      title: "Soy David Cid",
      description:
        "Y soy Desarrollador Frontend. Disfruto diseñando y construyendo webs donde la experiencia de usuario esté presente desde el primer momento. Me gusta aprender nuevas tecnologías, escribir artículos técnicos o simplemente jugar videojuegos en mi tiempo libre.",
    },
    english: {
      hello: "Hello!",
      title: "I'm David Cid",
      description:
        "And I'm a Frontend Developer. I enjoy designing and building websites where the user experience is present from the first moment. I like to learn new technologies, write technical articles, or just play video games in my free time.",
    },
  };

  let text = language === "es" ? content.spanish : content.english;

  useEffect(() => {
    instance && instance.reset();
    setTypingText(
      <TypeIt
        options={{ speed: 140, deleteSpeed: 90 }}
        getBeforeInit={(instance) => {
          instance
            .type(text.hello)
            .pause(750)
            .delete(6)
            .pause(500)
            .type(text.title)
            .pause(750)
            .type(".");
          return instance;
        }}
        getAfterInit={(instance) => {
          setInstance(instance);
          return instance;
        }}
      ></TypeIt>
    );
    instance && instance.go();
  }, [instance, text.hello, text.title]);

  return (
    <div className="home" id="home">
      <AnimatedBg />
      <div className="container home-container">
        <h1 className="home-title">{typingText}</h1>
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
