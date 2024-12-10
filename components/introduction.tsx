"use client";

import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import Link from "next/link";

const Introduction = () => {
  return (
    <div className="z-20 bg-darkBg/60 w-full">
      <div className="z-20 items-center grid md:grid-cols-2 py-20 md:py-0 p-6 h-full">
        <Image
          src="/home-4.png"
          priority
          alt="Profile picture"
          width={500}
          height={500}
        />
        <div className="flex flex-col justify-center max-w-md">
          <h1 className="mb-5 md:mb-10 text-2xl text-center md:text-left md:text-4xl leading-tight">
            If you can imagine it,
            <TypeAnimation
              sequence={[
                "I can program it",
                1000,
                "I can create it",
                1000,
                "I can make it happen",
                1000,
                "I can optimize it",
                1000,
                "I can develop it",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="block font-bold text-secondary"
            />
          </h1>
          <p className="mx-auto md:mx-0 mb-8 md:mb-8 text-xl xs:text-base">
            As a frontend and backend developer, I specialize in creating digital solutions
            that drive your clients&apos; success in the digital world.
          </p>
          <div className="flex md:justify-start items-center gap-3 md:gap-10 mx-auto">
            <Link
              href="/portfolio"
              className="border-2 hover:shadow-xl hover:shadow-white/50 px-3 py-2 rounded-xl w-fit text-md transition-all cursor-pointer"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="border-2 border-secondary hover:shadow-xl hover:shadow-secondary px-3 py-2 rounded-xl w-fit text-md text-secondary transition-all cursor-pointer"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Introduction;
