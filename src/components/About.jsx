import "../stylesheets/about.scss";
import portrait from "../assets/images/portrait_small.jpg";

const About = ({ language }) => {
  const content = {
    spanish: {
      title: "Sobre mí",
      description_1:
        "Tras nueve años desarrollando proyectos relacionados con las operaciones y la previsión de la demanda en el sector logístico decidí cambiar de sector para hacer lo que más me gustaba. Ahora me dedico a construir webs y aplicaciones utilizando los principales frameworks del mercado.",
      description_2:
        "Soy un entusiasta del código limpio, del “Pixel Perfect” y del diseño responsive.",
      description_3:
        "Me encanta aprender nuevas tecnologías que me ayuden a seguir mejorando como profesional y estar al día de las últimas actualizaciones de mis herramientas favoritas.",
      description_4:
        "Cuando no estoy desarrollando me gusta disfrutar de los paseos por el campo, los juegos de mesa con amigos y los videojuegos con un buen argumento.",
    },
    english: {
      title: "About me",
      description_1:
        "After nine years developing projects related to operations and forecasting demand in the logistics sector, I decided to change sectors to do what I liked the most. Now I am dedicated to building websites and applications using the main frameworks on the market.",
      description_2:
        'I am a fan of clean code, "Pixel Perfect" and responsive design.',
      description_3:
        "I love learning new technologies that help me continue to improve as a professional and keep up to date with the latest updates to my favorite tools.",
      description_4:
        "When I'm not developing I like to enjoy country walks, board games with friends, and video games with a good storyline.",
    },
  };

  const text = language === "es" || "es-ES" ? content.spanish : content.english;

  return (
    <div className="about" id="about">
      <div className="container about-container">
        <img className="about-image" src={portrait} alt="Portrait David" />
        <div className="about-text">
          <h2 className="about-text-title">{text.title}</h2>
          <p>{text.description_1}</p>
          <p>{text.description_2}</p>
          <p>{text.description_3}</p>
          <p>{text.description_4}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
