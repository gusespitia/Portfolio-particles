"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { serviceData } from "@/utils/data";

const SliderServices = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-auto md:h-[360px] w-[270px] md:w-[650px]"
    >
      {serviceData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col px-3 py-3 h-auto md:h-[320px] rounded-lg cursor-pointer bg-[rgba(65,47,123,0.15)] group hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 hover:border-secondary border-2">
            <div className="mb-4 text-4xl text-secondary">{item.icon}</div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-gray-300 truncate">{item.title}</h3>
              <p className="text-sm text-gray-400 ">
                {item.description}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderServices;
