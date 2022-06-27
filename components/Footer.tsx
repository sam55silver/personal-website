import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <div className="bg-gradient-to-b from-header to-primary">
        <div className="flex flex-col justify-end pb-28 lg:container lg:mx-auto text-white text-center items-center gap-5 h-[40rem]">
          <span className="text-4xl">Contact Me</span>
          <div className="gap-2 hidden md:flex">
            <a href="https://github.com/sam55silver">
              <FontAwesomeIcon
                icon={faGithub}
                className="md:h-5 md:w-5 hover:text-header"
              />
            </a>
            <a href="https://www.linkedin.com/in/sam-silver-375851239/">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="md:h-5 md:w-5 hover:text-header"
              />
            </a>
            <a href="https://twitter.com/sam55silver">
              <FontAwesomeIcon
                icon={faTwitter}
                className="h-5 w-5 hover:text-header"
              />
            </a>
            <a href="https://www.instagram.com/sam_silver06/">
              <FontAwesomeIcon
                icon={faInstagram}
                className="md:h-5 md:w-5 hover:text-header"
              />
            </a>
          </div>
        </div>
      </div>
      {/* <div className="bg-gradient-to-b from-primary to-header h-32"></div> */}
    </>
  );
}

export default Footer;
