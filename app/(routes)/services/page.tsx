import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";
import Link from "next/link";

const servicesPage = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen w-full">
      <TransitionPage />

      <AvatarServices />
      <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2 md:px-20 w-screen">
        <div className="max-w-[500px] mt-6 md:mt-0 xs:mx-4">
          <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-8 xs:mb-6">
            My <span className="text-secondary font-bold">services</span>
          </h1>
          <p className="mb-9 text-md text-gray-300 ">
            I offer frontend web development services specializing in the
            creation of attractive and functional websites and applications.
            Using the latest technologies such as HTML, CSS, and JavaScript, I
            design intuitive and responsive user interfaces that reflect my
            clients&apos; brand identity and improve their online presence.
          </p>
          <div className="flex items-center justify-center md:justify-start sm:items-center">
            <Link
              href="/contact"
              className="px-8 text-xl py-2 font-semibold text-center text-white bg-secondary rounded-full hover:bg-primary md:text-lg "
            >
              Contact me
            </Link>
          </div>
        </div>
        {/* SLIDER */}
        <div className="">
          <SliderServices />
        </div>
      </div>
      <CircleImage />
    </section>
  );
};

export default servicesPage;
