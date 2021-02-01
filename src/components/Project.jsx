import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

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

// imagenees sonospine
import sonospineLanding from "../assets/images/sonospine/landing.jpg";
import sonospineTreatment from "../assets/images/sonospine/treatment.jpg";
import sonospineStories from "../assets/images/sonospine/stories.jpg";

import { BiLink } from 'react-icons/bi';


const projects = [
    {
        name: "amphosfarmacia",
        title: "Amphosfarmacia",
        description: "Projecto que creé desde cero utilizando React.js en el front y Node.js para el backend. Utilizado por profesionales de la salud para compartir sus experiencias con el COVID-19 y comunicarse con otros profesionales.",
        url: "https://www.amphosfarmacia.com",
        images: 
            [{
                image: amphosfarmaciaLanding,
                alt: "Amphosfarmacia landing page"
            }, 
            {
                image: amphosfarmaciaInbox,
                alt: "Amphosfarmacia bandeja de entrada"
            },
            {
                image: amphosfarmaciaParticipate,
                alt: "Amphosfarmacia como participar"
            },
            {
                image: amphosfarmaciaVerify,
                alt: "Amphosfarmacia verificacion de perfiles"
            }]
    },
    {
        name: "careexpand",
        title: "Careexpand",
        description: "Participé en el desarrollo de la aplicación de Careexpand orientada al registro de datos de pacientes y comunicación paciente/doctor. Entre otras tecnologías, utilicé Twilio para las video conferencias y Stripe para procesar los pagos.",
        url: "https://www.careexpand.com",
        images: 
            [{
                image: careexpandLanding,
                alt: "Careexpand landing page"
            }, 
            {
                image: careexpandCareCoordination,
                alt: "Careexpand care coordination page"
            },
            {
                image: careexpandAdminDashboard,
                alt: "Dashboard de Careexpand"
            },
            {
                image: careexpandTelemedicine,
                alt: "Pagina de telemedicina de Careexpand"
            },
        ]
    },
    {
        name: "sonospine",
        title: "Sonospine",
        description: "Colaboré en el mantenimiento de la parte privada de esta web construida con Angular y TypeScript. La herramienta se utiliza para hacer seguimiento a pacientes con afecciones de espalda",
        url: "https://www.sonospine.com",
        images: 
            [{
                image: sonospineLanding,
                alt: "Sonospine landing page"
            }, 
            {
                image: sonospineTreatment,
                alt: "Sonospine treatment page"
            },
            {
                image: sonospineStories,
                alt: "Sonospine stories page"
            },
        ]
    },
];

const Project = ({ project }) => {

    const selectedProject = projects.filter(item => item.name === project)[0];

    return ( 
        <div className="project">
            <Carousel
                showArrows
                showStatus={false}
                autoPlay
                interval={4500}
                infiniteLoop={true}
                showThumbs={false}
                className="project-carousel"
            >
                {
                    selectedProject.images.map(image => 
                        (
                            <div className="project-carousel-div">
                                <img src={image.image} alt={image.alt}/>
                                <div className="legend">
                                    <h2 className="legend-title">{selectedProject.title}</h2>
                                    <p className="legend-text">{selectedProject.description}</p>
                                    <a className="legend-link" href={selectedProject.url}><BiLink /></a>
                                </div>
                            </div>
                        )
                    )
                }
            </Carousel>
    </div>
     );
}
 
export default Project;