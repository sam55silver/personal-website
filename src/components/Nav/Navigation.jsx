import "./Navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Navigation() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="nav-bar">
      <h2 onClick={scrollToTop}>SS.</h2>
      <div className="button-row">
        <Link to="/blog">
          <button>Blog</button>
        </Link>
        <Link to="/projects">
          <button>Projects</button>
        </Link>
        <Link to="/resume">
          <button>Resume</button>
        </Link>
        <Link to="/about">
          <button>About</button>
        </Link>
      </div>
      <div className="social-media">
        <a href="https://github.com/sam55silver">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/sam-silver-375851239/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://twitter.com/sam55silver">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.instagram.com/sam_silver06/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>
  );
}

export default Navigation;
