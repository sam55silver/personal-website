import Link from "next/link";
import { MenuAlt3Icon } from "@heroicons/react/solid";

function Navigation() {
  return (
    <section className="top-0 z-10 py-6 font-sans container mx-auto">
      <nav className="flex text-white text-center items-center justify-between">
        <Link href="/">
          <strong className="font-bold hover:text-primary hover:cursor-pointer text-2xl">
            Sam Silver
          </strong>
        </Link>
        <div className="hidden md:flex gap-4  text-xl">
          <Link href="/projects">
            <span className="hover:text-primary hover:cursor-pointer">
              Projects
            </span>
          </Link>
          <Link href="/blog" className="hover:text-primary">
            <span className="hover:text-primary hover:cursor-pointer">
              Blog
            </span>
          </Link>
          <Link href="/resume" className="hover:text-primary">
            <span className="hover:text-primary hover:cursor-pointer">
              Resume
            </span>
          </Link>
          <Link href="/projects" className="hover:text-primary">
            <span className="hover:text-primary hover:cursor-pointer">
              Contact
            </span>
          </Link>
        </div>
        <button className="md:hidden">
          <MenuAlt3Icon className="h-8 w-8" />
        </button>
      </nav>
    </section>
  );
}

export default Navigation;
