import React from "react";
import { shopTheLook } from "../../data";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
const ShopDetails = () => {
  return (
    <React.Fragment>
      <Swiper   data-aos="fade-up"
          data-aos-anchor-placement="top-center">
    
          <div className="text-center mb-10 max-w-max mx-auto w-[90%]">
            {shopTheLook.map(({ index, imgLeft, imgRight, desc, price }) => (
              <SwiperSlide key={index}>
                <div className="flex gap-10">
                  <div>
                    <Image src={imgLeft} />
                  </div>
                  <div className="flex flex-col gap-y-2 rounded-md">
                    <Swiper
                      pagination={true}
                      modules={[Pagination]}
                      className="mySwiper"
                    >
                        
                      <SwiperSlide>
                        <div className="flex flex-col gap-y-2 rounded-md">
                          <Link href={`#`}>
                            <Image
                              src={imgRight}
                              alt={desc}
                              className="rounded-md"
                            />
                          </Link>
                        </div>
                        <div className={`px-2 child:text-wrap child:text-left`}>
                          <p>{desc}</p>
                          <p>{price}</p>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
    
      </Swiper>
    </React.Fragment>
  );
};

export default ShopDetails;
