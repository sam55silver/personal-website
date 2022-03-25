import "./Navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Navigation() {
  return (
    <div className="nav-bar">
      <h2>SS.</h2>
      <div className="button-row">
        <button>Blog</button>
        <button>Projects</button>
        <button>Resume</button>
        <button>About</button>
      </div>
      <div className="social-media">
        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faInstagram} />
      </div>
    </div>
  );
}

export default Navigation;
