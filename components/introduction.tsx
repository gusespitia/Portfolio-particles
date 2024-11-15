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
          alt="Profiel pic"
          width={800}
          height={800}
        />
        <div className="flex flex-col justify-center max-w-md">
          <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
            Si puedes pensarlo,
            <TypeAnimation
              sequence={[
                "puedes programarlo",
                1000,
                "puedes crearlo",
                1000,
                "puedes hacerlo",
                1000,
                "puedes optimizarlo",
                1000,
                "puedes desarrollarlo",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-secondary font-bold block"
            />
          </h1>
          <p className="mx-auto mb-2 text-xl md:mx-0 md:mb-8">
            Como desarrollador frontend y backend, me dedico a crear soluciones
            digitales que impulsen el éxito de tus clientes en el mundo digital.
          </p>
          <div className="flex gap-3 md:justify-start items-center md:gap-10">
            <Link
              href="/proyects"
              className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50"
            >
              Ver Proyectos
            </Link>
            <Link
              href="/contact"
              className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-secondary text-secondary border-secondary"
            >
              Contacta conmigo
            </Link>
          </div>
        </div>
      </div>
      From introduction
    </div>
  );
};

export default Introduction;
