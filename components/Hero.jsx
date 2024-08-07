import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/autoplay'

import { headerSlider } from "../data";
import Image from "next/image";

const Hero = () => {
  return (
    // HeaderSlider Using Swiper
    <React.Fragment>
      <header className="w-full transition-all">
        <Swiper
          autoplay={{ delay: 3000 }}
          speed={800}
          loop={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {headerSlider.map(({ imgSrc, alt, index}) => (
            <SwiperSlide key={index}>
              <Image loading="lazy" src={imgSrc} alt={alt} ></Image>
            </SwiperSlide>
          ))}
        </Swiper>
      </header>
    </React.Fragment>
  );
};

export default Hero;
