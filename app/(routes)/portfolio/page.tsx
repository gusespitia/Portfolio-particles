"use client";

import AvatarPortfolio from "@/components/avatar-portolfio";
import CircleImage from "@/components/circle-image";
import ContainerPage from "@/components/container";
import PortfolioBox from "@/components/porfolio-box";
import TransitionPage from "@/components/transition-page";
import { dataPortfolio } from "@/utils/data";

const PortfolioPage = () => {
  return (
   <section className="relative min-h-screen overflow-hidden">
     <ContainerPage>
      {/* Page Transition */}
      <TransitionPage />

      {/* Avatar Section */}
      <AvatarPortfolio />
    

      {/* Portfolio Content */}
      <div className="flex flex-col justify-center items-center xs:-mt-8">
        {/* Page Title */}
        <h1 className="mx-auto mt-10 xs:-mt-2 font-bold text-3xl text-center md:text-left lg:text-center xs:text-2xl leading-snug">
          My <span className="text-secondary">portfolio</span>
        </h1>

        {/* Portfolio Grid */}
        <div className="gap-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto mt-6 md:mb-64 xs:px-4 w-full max-w-6xl">
          {dataPortfolio.map((data) => (
            <PortfolioBox key={data.id} data={data} />
          ))}
        </div>
      </div>
    
    </ContainerPage>
    <CircleImage />
    </section>
  );
};

export default PortfolioPage;
