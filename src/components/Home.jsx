import '../stylesheets/home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import TypeIt from "typeit-react";



const Home = () => {
    return (
        <div className="home" id="home">
            <div className="container home-container">
                <h1 className="home-title">
                    <TypeIt
                        getBeforeInit={instance => {
                            instance
                                .type("Soy David Cid")
                                .pause(750)
                                .type(".");
                            return instance;
                        }} 
                    ></TypeIt>
                </h1>
                <p className="home-paragraph">Soy Desarrollador Frontend. Disfruto diseñando y construyendo webs donde la experiencia de usuario esté presente desde el primer momento. Me gusta aprender nuevas tecnologías, escribir artículos técnicos o simplemente jugar videojuegos en mi tiempo libre.</p>
                <hr className="home-line"/>
                
                <ul className="home-social">
                    <li className="home-social-element"><a href="https://www.linkedin.com/in/david-cid-lendinez/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} size="3x"/></a></li>
                    <li className="home-social-element"><a href="https://github.com/davidcid" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub}  size="3x"/></a></li>
                    <li className="home-social-element"><a href="https://twitter.com/DavidCidDev" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter}  size="3x"/></a></li>
                </ul>
            </div>
        </div>
    );
}
 
export default Home;