import AvatarPortfolio from "@/components/avatar-portolfio";
import CircleImage from "@/components/circle-image";
import ContainerPage from "@/components/container";
import TransitionPage from "@/components/transition-page";
import Link from "next/link";

const ContactPage = () => {
  return (
    <section>
     
    <ContainerPage>
      <TransitionPage />
      <AvatarPortfolio />
    
      <div className="flex flex-col justify-center h-full">
      <h1 className="mx-auto mt-10 xs:-mt-8 font-bold text-3xl text-center md:text-left lg:text-center xs:text-2xl leading-snug">
      Get in touch with me
        </h1>
        <p className="mb-6 text-center text-gray-300 text-xl">
          I’d love to connect! If you’re interested in working together or want
          to learn more about my work, feel free to reach out to me on LinkedIn.
        </p>
        <div className="mt-4 text-center">
          <Link
            href="https://www.linkedin.com/in/gustavo-a-espitia/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary hover:bg-secondary/80 px-6 py-2 rounded-lg hover:font-extrabold text-white text-xl transition-all duration-300"
          >
            Contact me on LinkedIn
          </Link>
        </div>
      </div>
      
    </ContainerPage>
    <CircleImage />
    </section>
  );
};

export default ContactPage;
