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
          slidesPerView:3,
          spaceBetween: 25,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="w-[270px] md:w-[650px] h-auto md:h-[320px]"
    >
      {serviceData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col border-2 hover:border-secondary bg-[rgba(65,47,123,0.15)] hover:bg-[rgba(89,65,169,0.15)] px-3 py-3 rounded-lg h-auto md:h-[320px] xs:h-[240px] transition-all duration-300 cursor-pointer group">
            <div className="mb-4 text-4xl text-secondary">{item.icon}</div>
            <div className="text-balance overflow-hidden">
              <h3 className="mb-4 font-semibold text-gray-300 text-lg">{item.title}</h3>
              <p className="text-gray-400 text-sm text-wrap">
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
