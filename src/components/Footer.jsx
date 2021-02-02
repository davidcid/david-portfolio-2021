import "../stylesheets/footer.scss";
import { FaEnvelope, FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa';


const Footer = () => {
    return ( 
        <div className="footer" id="footer">
            <div className="container">
                <ul className="footer-social">
                    <li className="footer-social-element"><a href="https://www.linkedin.com/in/david-cid-lendinez/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a></li>
                    <li className="footer-social-element"><a href="https://github.com/davidcid" target="_blank" rel="noreferrer"><FaGithub /></a></li>
                    <li className="footer-social-element"><a href="https://twitter.com/DavidCidDev" target="_blank" rel="noreferrer"><FaTwitter /></a></li>
                    <li className="footer-social-element"><a href="mailto:david.cid@gmail.com" target="_blank" rel="noreferrer"><FaEnvelope /></a></li>
                </ul>
                <p className="footer-p">Made with ❤️ and ⚛️ by David Cid</p>
            </div>
            
        </div>
     );
}
 
export default Footer;