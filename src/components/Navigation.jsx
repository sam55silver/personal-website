import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { MenuAlt3Icon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

function Navigation() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="sticky top-0 bg-header z-10">
      <nav className="flex px-4 py-2 lg:container lg:mx-auto text-white text-center items-center justify-between">
        <span className="font-bold text-lg">Sam Silver</span>
        <div className="hidden md:flex gap-4 text-lg">
          <Link to="/projects">Projects</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="gap-2 hidden md:flex">
          <a href="https://github.com/sam55silver">
            <FontAwesomeIcon icon={faGithub} className="md:h-5 md:w-5" />
          </a>
          <a href="https://www.linkedin.com/in/sam-silver-375851239/">
            <FontAwesomeIcon icon={faLinkedin} className="md:h-5 md:w-5" />
          </a>
          <a href="https://twitter.com/sam55silver">
            <FontAwesomeIcon icon={faTwitter} className="h-5 w-5" />
          </a>
          <a href="https://www.instagram.com/sam_silver06/">
            <FontAwesomeIcon icon={faInstagram} className="md:h-5 md:w-5" />
          </a>
        </div>
        <button className="md:hidden">
          <MenuAlt3Icon className="h-8 w-8" />
        </button>
      </nav>
    </section>
  );
}

export default Navigation;
