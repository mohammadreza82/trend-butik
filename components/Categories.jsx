import React from "react";
import { categories } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Fade } from "react-awesome-reveal";

import Image from "next/image";

const Categories = () => {
  return (
    <React.Fragment>
      <div className="py-10 w-full dark:bg-zinc-800">
        {/* Header section */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-once={true}
          className="text-center mb-10 max-w-[600px] mx-auto"
        >
          <p className="text-sm text-primary-light dark:text-emerald-500">
            Top Selling Products for you
          </p>
          <h1 className="text-3xl font-bold text-TextColor-light dark:text-TextColor-dark">Products</h1>
          <p className="text-xs text-TextColor-light dark:text-TextColor-dark">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>
        <div className="text-center max-w-max mx-auto w-[90%]">
          <Fade cascade damping={0.5}>
            {/* triggerOnce={true} */}
            <Swiper
              breakpoints={{
                990: {
                  slidesPerView: 4,
                },
                443: {
                  slidesPerView: 3,
                },
                1: {
                  slidesPerView: 2,
                },
              }}
              slidesPerView={4}
              spaceBetween={30}
              className="mySwiper w-full mx-auto text-center"
            >
              {categories.map(({ img, title, index }) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col justify-center items-center gap-3">
                    <Image src={img}></Image>
                    <p className="font-serif text-balance text-TextColor-light dark:text-TextColor-dark">
                      {title}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Fade>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Categories;
