import AvatarPortfolio from "@/components/avatar-portolfio";
import CircleImage from "@/components/circle-image";
import ContainerPage from "@/components/container";
import PortfolioBox from "@/components/porfolio-box";
import TransitionPage from "@/components/transition-page";
import { dataPortfolio } from "@/utils/data";

const PortfolioPage = () => {
  return (
    <ContainerPage>
    <TransitionPage />
    <AvatarPortfolio />
    <CircleImage />
    <div className="flex flex-col justify-center h-full">
        <h1 className="text-xl leading-tight text-center md:text-3xl md:mb-5">Mis últimos <span className="font-bold text-secondary">trabajos realizados</span></h1>
        <div className="relative z-10 grid max-w-3xl gap-4 mx-auto sm:grid-cols-2 mt-4 md:grid-cols-3 lg:grid-cols-4">
            {dataPortfolio.map((data) => (
                <PortfolioBox key={data.id} data={data} />
            ))}
        </div>
    </div>
</ContainerPage>
  );
};

export default PortfolioPage;
