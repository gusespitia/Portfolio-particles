import Avatar from "@/components/avatar";
import ContainerPage from "@/components/container";
import CounterServices from "@/components/counter-services";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";

const pageAboutMe = () => {
  return (
    <>
      <TransitionPage />
      <ContainerPage>
        <Avatar />
        <h1 className="text-center text-4xl leading-tight md:text-left lg:text-center md:text-3xl  mx-auto mt-10 xs:text-2xl ">
          My{" "}
          <span className="text-secondary font-bold">professional journey</span>
        </h1>
        <CounterServices />
        <TimeLine />
      </ContainerPage>
    </>
  );
};

export default pageAboutMe;
