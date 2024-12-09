"use client";

import CircleImage from "@/components/circle-image";
import TransitionPage from "@/components/transition-page";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { dataTestimonials } from "@/utils/data";
import Image from "next/image";

const TestimonialsPage = () => {
  return (
    <>
      <TransitionPage />
      <div className="flex flex-col justify-center h-lvh">
        <CircleImage />
        <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
          Testimonials
          <span className="font-bold text-secondary block">
            from my clients
          </span>
        </h1>
        <div className="felx items-centerjustify-center">
          <div className="">
            <Swiper
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
              }}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="h-[380px] md:h-[300px] w-[270px] md:w-[550px]"
            >
              {dataTestimonials.map(({ id, name, description, imageUrl }) => (
                <SwiperSlide
                  key={id}
                  className="h-[380px] md:h-[300px] w-[270px] md:w-[550px]"
                >
                  <Image
                    src={imageUrl}
                    width={100}
                    height={100}
                    alt={name}
                    className="mx-auto rounded-full"
                  />
                  <h4 className="text-center">{name}</h4>
                  <p className="text-center mt-5">{description} </p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialsPage;
