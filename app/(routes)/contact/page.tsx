import AvatarPortfolio from "@/components/avatar-portolfio";
import CircleImage from "@/components/circle-image";
import ContainerPage from "@/components/container";
import TransitionPage from "@/components/transition-page";
import { Linkedin  } from "lucide-react";
import Link from "next/link";

const ContactPage = () => {
  return (
    <ContainerPage>
      <TransitionPage />
      <AvatarPortfolio />
      <CircleImage />
      <div className="flex flex-col justify-center h-full">
        <h1 className="text-lg leading-tight text-center md:text-4xl md:mb-9">
          Get in touch with me
        </h1>
        <p className="text-center text-xl text-gray-300 mb-6">
          I’d love to connect! If you’re interested in working together or want to learn more about my work, feel free to reach out to me on LinkedIn.
        </p>
        <div className="text-center">
          <Link 
            href="https://www.linkedin.com/in/gustavo-a-espitia/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-lg bg-secondary text-white hover:bg-secondary/80"
          >
            Contact me on LinkedIn
            <Linkedin  className="inline ml-2" />
          </Link>
        </div>
      </div>
    </ContainerPage>
  );
};

export default ContactPage;
