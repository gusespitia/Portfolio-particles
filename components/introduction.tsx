"use client";

import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import Link from "next/link";

const Introduction = () => {
  return (
    <div className="z-20 w-full bg-darkBg/60">
      <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
        <Image
          src="/home-4.png"
          priority
          alt="Profile picture"
          width={500}
          height={500}
        />
        <div className="flex flex-col justify-center max-w-md">
          <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
            If you can imagine it,
            <TypeAnimation
              sequence={[
                "you can program it",
                1000,
                "you can create it",
                1000,
                "you can make it happen",
                1000,
                "you can optimize it",
                1000,
                "you can develop it",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-secondary font-bold block"
            />
          </h1>
          <p className="mx-auto mb-2 text-xl md:mx-0 md:mb-8">
            As a frontend and backend developer, I specialize in creating digital solutions
            that drive your clients&apos; success in the digital world.
          </p>
          <div className="flex gap-3 md:justify-start items-center md:gap-10">
            <Link
              href="/portfolio"
              className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-secondary text-secondary border-secondary"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
      From introduction
    </div>
  );
};

export default Introduction;
