"use client";

import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";
import Link from "next/link";

const ServicesPage = () => {
  return (
    <section className="flex flex-col justify-center items-center px-4 sm:px-6 lg:px-20 w-full min-h-screen">
      <TransitionPage />
      <AvatarServices />
      <div className="justify-center items-center gap-4 grid md:grid-cols-5 xs:grid-cols-2 mx-auto md:px-10 lg:px-20 max-w-6xl">
        {/* Text Section */}
        <div className="col-span-2 mt-6 md:mt-0 xs:mt-24 col">
          <h1 className="mx-auto mt-10 xs:-mt-2 mb-4 font-bold text-3xl text-center md:text-left lg:text-center xs:text-2xl leading-snug">
            My <span className="font-bold text-secondary">services</span>
          </h1>
          <p className="mb-6 text-ju text-justify text-md md:text-left gray-300">
            I offer frontend web development services specializing in the
            creation of attractive and functional websites and applications.
            Using the latest technologies such as HTML, CSS, and JavaScript, I
            design intuitive and responsive user interfaces that reflect my
            clients&apos; brand identity and improve their online presence.
          </p>
          <div className="flex justify-center md:justify-start items-center">
            <Link
              href="/contact"
              className="bg-secondary hover:bg-secondary/90 px-6 py-3 rounded-full font-semibold text-center text-lg text-white transition-all duration-300"
            >
              Contact me
            </Link>
          </div>
        </div>

        {/* Slider Section */}
        <div className="flex justify-center items-center col-span-3 xs:mb-24">
          <SliderServices />
        </div>
      </div>
      <CircleImage />
    </section>
  );
};

export default ServicesPage;
