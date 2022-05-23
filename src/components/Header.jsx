import novaScotia from "../images/nova-scotia.png";
import { EyeIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

function Header() {
  return (
    <section className="bg-header">
      <header className="lg:container lg:mx-auto relative ">
        <img src={novaScotia} />
        <div className="text-white text-center object-center relative md:absolute bottom-5 md:bottom-16 md:right-36 xl:bottom-36 2xl:bottom-1/3">
          <h1 className="text-xl lg:text-3xl 2xl:text-5xl font-bold px-2">
            Building intuitive <br />
            layers of interactions, <br />
            business to client
          </h1>
          <Link
            to="/projects"
            className="flex gap-2 mb-2 w-fit lg:gap-3 items-center bg-primary px-4 py-3 mt-5 rounded-md mx-auto"
          >
            <span className="text-sm lg:text-lg 2xl:text-2xl">My Work</span>
            <EyeIcon className="h-4 w-4 lg:h-5 lg:w-5" />
          </Link>
        </div>
      </header>
    </section>
  );
}

export default Header;
