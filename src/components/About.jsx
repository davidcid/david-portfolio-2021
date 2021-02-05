import "../stylesheets/about.scss";
import portrait from "../assets/images/portrait_small.jpg";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="container about-container">
        <img className="about-image" src={portrait} alt="Portrait David" />
        <div className="about-text">
          <h2 className="about-text-title">Sobre mí</h2>
          <p>
            Tras nueve años desarrollando proyectos relacionados con las
            operaciones y la previsión de la demanda en el sector logístico
            decidí cambiar de sector para hacer lo que más me gustaba. Ahora me
            dedico a construir webs y aplicaciones utilizando los principales
            frameworks del mercado.
          </p>
          <p>
            Soy un entusiasta del código limpio, del “Pixel Perfect” y del
            diseño responsive.
          </p>
          <p>
            Me encanta aprender nuevas tecnologías que me ayuden a seguir
            mejorando como profesional y estar al día de las últimas
            actualizaciones de mis herramientas favoritas.
          </p>
          <p>
            Cuando no estoy desarrollando me gusta disfrutar de los paseos por
            el campo, los juegos de mesa con amigos y los videojuegos con un
            buen argumento.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
