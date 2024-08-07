import React from "react";
import { Fade } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Models } from "../data";
import Image from "next/image";

const Model = () => {
  return (
    <React.Fragment>
      <div className="w-full ">
        <div className="w-[90%] text-center mx-auto "   data-aos="fade-up"
          data-aos-anchor-placement="top-center">
         
            <Swiper
            breakpoints={{
              990: {
                slidesPerView: 3,
              },
             
              700: {
                slidesPerView: 2.5,
              },
              405: {
                slidesPerView: 2,
              },
              1: {
                slidesPerView: 1.5,
              },
            }}
            slidesPerView={3}

            spaceBetween={30}
            className="mySwiper w-full"
            >
              {Models.map(({indx,img,desc})=>(
              <SwiperSlide key={indx} >
                <div className="text-center flex flex-col gap-4 last:rounded-e-xl">
                  <Image src={img} className="last:rounded-e-xl"/>
                  <div className="flex flex-col gap-1">
                  <p className="font-medium text-md">{desc}</p>
                  <p className="underline underline-offset-1 text-sm font-sans">Shop Now</p>
                  </div>
                </div>
              </SwiperSlide>
              ))}
            </Swiper>
      
        </div>
      </div>
    </React.Fragment>
  );
};

export default Model;
