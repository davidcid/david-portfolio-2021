import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "../stylesheets/project.scss";

// imagenes amphosfarmacia
import amphosfarmaciaLanding from "../assets/images/amphosfarmacia/amphosfarmacia.jpg";
import amphosfarmaciaInbox from "../assets/images/amphosfarmacia/bandeja_entrada.jpg";
import amphosfarmaciaParticipate from "../assets/images/amphosfarmacia/como_participar.jpg";
import amphosfarmaciaVerify from "../assets/images/amphosfarmacia/verificacion_perfiles.jpg";

// imagenes careexpand
import careexpandLanding from "../assets/images/careexpand/landing.jpg";
import careexpandCareCoordination from "../assets/images/careexpand/care_coordination.jpg";
import careexpandAdminDashboard from "../assets/images/careexpand/admin_dashboard.jpg";
import careexpandTelemedicine from "../assets/images/careexpand/telemedicine.jpg";

// imagenes sonospine
import sonospineLanding from "../assets/images/sonospine/landing.jpg";
import sonospineTreatment from "../assets/images/sonospine/treatment.jpg";
import sonospineStories from "../assets/images/sonospine/stories.jpg";

//imagenes strongboot
import strongbootMenu from "../assets/images/strongboot/menu.jpg";
import strongbootCart from "../assets/images/strongboot/cart.jpg";
import strongbootPortrait from "../assets/images/strongboot/portrait.jpg";

// iconos tecnologias
import { FaReact, FaNodeJs, FaAngular } from "react-icons/fa";
import { SiJavascript, SiMysql, SiTwilio, SiTypescript } from "react-icons/si";

import { BiLink } from "react-icons/bi";

const projects = [
  {
    name: "amphosfarmacia",
    title: "Amphosfarmacia",
    description_es:
      "Projecto que creé desde cero utilizando React.js en el front y Node.js para el backend. Utilizado por profesionales de la salud para compartir sus experiencias con el COVID-19 y comunicarse con otros profesionales.",
    description_en:
      "Project that I created from scratch using React.js on the front and Node.js for the backend. Used by healthcare professionals to share their experiences with COVID-19 and communicate with other professionals.",
    url: "https://www.amphosfarmacia.com",
    images: [
      {
        image: amphosfarmaciaLanding,
        alt: "Amphosfarmacia landing page",
      },
      {
        image: amphosfarmaciaInbox,
        alt: "Amphosfarmacia bandeja de entrada",
      },
      {
        image: amphosfarmaciaParticipate,
        alt: "Amphosfarmacia como participar",
      },
      {
        image: amphosfarmaciaVerify,
        alt: "Amphosfarmacia verificacion de perfiles",
      },
    ],
    technologies: [<FaReact />, <FaNodeJs />, <SiMysql />],
  },
  {
    name: "careexpand",
    title: "Careexpand",
    description_es:
      "Participé en el desarrollo de la aplicación de Careexpand orientada al registro de datos de pacientes y comunicación paciente/doctor. Entre otras tecnologías, utilicé Twilio para las video conferencias y Stripe para procesar los pagos.",
    description_en:
      "I participated in the development of the Careexpand application oriented to the registration of patient data and patient / doctor communication. Among other technologies, I used Twilio for video conferencing and Stripe to process payments.",
    url: "https://www.careexpand.com",
    images: [
      {
        image: careexpandLanding,
        alt: "Careexpand landing page",
      },
      {
        image: careexpandCareCoordination,
        alt: "Careexpand care coordination page",
      },
      {
        image: careexpandAdminDashboard,
        alt: "Dashboard de Careexpand",
      },
      {
        image: careexpandTelemedicine,
        alt: "Pagina de telemedicina de Careexpand",
      },
    ],
    technologies: [
      <SiJavascript />,
      <FaReact />,
      <FaNodeJs />,
      <SiTwilio />,
      <SiMysql />,
    ],
  },
  {
    name: "sonospine",
    title: "Sonospine",
    description_es:
      "Colaboré en el mantenimiento de la parte privada de esta herramienta utilizada para hacer seguimiento a pacientes con afecciones de espalda.",
    description_en:
      "I collaborated in the maintenance of the private part of this tool used to follow up patients with back conditions.",
    url: "https://sonospinesurgery.com/",
    images: [
      {
        image: sonospineLanding,
        alt: "Sonospine landing page",
      },
      {
        image: sonospineTreatment,
        alt: "Sonospine treatment page",
      },
      {
        image: sonospineStories,
        alt: "Sonospine stories page",
      },
    ],
    technologies: [<FaAngular />, <SiTypescript />],
  },
  {
    name: "strongboot",
    title: "Strongboot",
    description_es:
      "Proyecto personal en que creé desde cero una tienda de moda y complementos online. Se adapta a cualquier tamaño de dispositivo e incluye la lógica de añadir productos al carrito para su posterior compra. Utilicé React y TypeScipt para el su desarrollo.",
    description_en:
      "I created this personal project from scratch reproducing an online fashion and accessories store. It adapts to any device size and includes the logic of adding products to the cart for later purchase. I used React and TypeScipt for its development.",
    url: "https://david-react-shop.netlify.app/",
    images: [
      {
        image: strongbootPortrait,
        alt: "Strongboot portrait page",
      },
      {
        image: strongbootCart,
        alt: "Strongboot cart detail",
      },
      {
        image: strongbootMenu,
        alt: "Strongboot open menu",
      },
    ],
    technologies: [<FaReact />, <SiTypescript />],
  },
];

const Project = ({ project, language }) => {
  const selectedProject = projects.filter((item) => item.name === project)[0];

  return (
    <div className="project">
      <div className="container project-container">
        <div className="legend">
          <h3 className="legend-title">
            <a
              className="legend-link"
              href={selectedProject.url}
              target="_blank"
              rel="noreferrer"
            >
              {selectedProject.title} <BiLink />
            </a>
          </h3>
          <p className="legend-text">
            {language === "es" || language === "es-ES"
              ? selectedProject.description_es
              : selectedProject.description_en}
          </p>
          <ul className="legend-techs">
            {selectedProject.technologies.map((tech, i) => (
              <li key={i} className="legend-tech">
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <Carousel
          showArrows
          showStatus={false}
          autoPlay
          interval={4500}
          infiniteLoop={true}
          showThumbs={false}
          className="project-carousel"
        >
          {selectedProject.images.map((image, i) => (
            <div key={i} className="project-carousel-div">
              <img src={image.image} alt={image.alt} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Project;
