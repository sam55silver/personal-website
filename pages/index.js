import { EyeIcon } from "@heroicons/react/solid";
import Image from "next/image";
import novaScotia from "../public/nova-scotia.png";
import Link from "next/link";

const Home = () => {
  return (
    <section className="h-[60rem] flex items-center">
      <header className="lg:container lg:mx-auto relative">
        <div className="w-fit relative md:left-0 2xl:left-32">
          <Image
            quality={100}
            src={novaScotia}
            alt="A picture of Nova Scotia with a red marker on the city of Antigonish."
            width={988.8}
            height={762}
          />
        </div>
        <div className="text-white text-center object-center relative md:absolute bottom-5 lg:bottom-0 xl:bottom-10 md:right-40">
          <h1 className="mt-5 text-2xl lg:text-4xl 2xl:text-5xl font-bold px-2">
            Building intuitive <br />
            layers of interactions, <br />
            business to client
          </h1>
          <Link href="/projects">
            <button className="flex gap-2 mb-2 w-fit lg:gap-3 items-center bg-primary px-4 py-3 mt-5 rounded-md mx-auto">
              <span className="text-sm lg:text-lg 2xl:text-2xl">My Work</span>
              <EyeIcon className="h-4 w-4 lg:h-5 lg:w-5" />
            </button>
          </Link>
        </div>
      </header>
    </section>
  );
};

export default Home;
