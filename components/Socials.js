import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Socials = () => {
  return (
    <>
      <a href="https://github.com/sam55silver">
        <FontAwesomeIcon
          icon={faGithub}
          className="md:h-5 md:w-5 hover:text-primary"
        />
      </a>
      <a href="https://www.linkedin.com/in/sam-silver-375851239/">
        <FontAwesomeIcon
          icon={faLinkedin}
          className="md:h-5 md:w-5 hover:text-primary"
        />
      </a>
      <a href="https://twitter.com/sam55silver">
        <FontAwesomeIcon
          icon={faTwitter}
          className="h-5 w-5 hover:text-primary"
        />
      </a>
      <a href="https://www.instagram.com/sam_silver06/">
        <FontAwesomeIcon
          icon={faInstagram}
          className="md:h-5 md:w-5 hover:text-primary"
        />
      </a>
    </>
  );
};

export default Socials;
