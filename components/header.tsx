import { socialNetworks } from "@/utils/data";
import MotionTransition from "./transitions-component";
import Link from "next/link";

const Header = () => {
  return (
    <MotionTransition
      position="bottom"
      className="absolute z-40 inline-block w-full top-5 md:top-10 px-4 sm:px-10 lg:px-20"
    >
      <header>
        <div className="container flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">
          {/* Logo/Title */}
          <Link href="/">
            <h1 className="my-0 md:text-4xl sm:text-3xl xs:text-2xl font-bold text-center md:text-left text-4xl">
              Gus<span className="text-secondary">Dev</span>
            </h1>
          </Link>

          {/* Social Media Links */}
          <div className="flex items-center justify-center gap-4 mt-4 md:mt-0 xs:mt-2">
            {socialNetworks.map(({ logo, src, id }) => (
              <Link
                key={id}
                href={src}
                target="_blank"
                className="transition-all duration-300 hover:text-secondary flex items-center justify-center w-8 h-8 xs:w-5 xs:h-5 sm:w-6 sm:h-6"
              >
                {logo}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </MotionTransition>
  );
};

export default Header;
