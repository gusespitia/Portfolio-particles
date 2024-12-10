"use client";

import Avatar from "@/components/avatar";
import ContainerPage from "@/components/container";
import CounterServices from "@/components/counter-services";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";

const PageAboutMe = () => {
  return (
    <>
      <TransitionPage />
      <ContainerPage>
        {/* Avatar Section */}
        <Avatar />

        {/* Heading */}
        <h1 className="mx-auto mt-10 xs:-mt-10 font-bold text-3xl text-center md:text-left lg:text-center xs:text-2xl leading-snug">
          My{" "}
          <span className="font-bold text-secondary">
            professional journey
          </span>
        </h1>

        {/* Counter Services Section */}
        <div className="mt-12">
          <CounterServices />
        </div>

        {/* Timeline Section */}
        <div className="mt-16 md:mb-52">
          <TimeLine />
        </div>
      </ContainerPage>
    </>
  );
};

export default PageAboutMe;
