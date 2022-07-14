import { EyeIcon } from "@heroicons/react/solid";
import Image from "next/image";
import novaScotia from "../public/nova-scotia.png";
import Link from "next/link";

const Home = () => {
  const imageHeight = 577.2;
  const imageWidth = 749;
  const imageResize = 0.7;

  return (
    <header className="flex flex-col items-center justify-center">
      {/* md:left-0 2xl:left-32 */}
      <div className="my-8">
        <Image
          quality={100}
          width={imageWidth * imageResize}
          height={imageHeight * imageResize}
          src={novaScotia}
          alt="A picture of Nova Scotia with a red marker on the town of Antigonish."
        />
      </div>
      <div className="text-white text-center">
        <h1 className="text-2xl font-bold px-2">
          Building intuitive <br />
          layers of interactions, <br />
          business to client
        </h1>
        <Link href="/projects">
          <button className="flex gap-2 justify-center mb-2 w-36 lg:gap-3 items-center bg-primary px-4 py-3 mt-5 rounded-md mx-auto">
            <span>My Work</span>
            <EyeIcon className="h-4 w-4 lg:h-5 lg:w-5" />
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Home;
