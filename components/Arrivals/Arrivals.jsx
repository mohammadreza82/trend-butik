import React from "react";
import { newArrivals } from "../../data";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Fade } from "react-awesome-reveal";
import { HiArrowSmallRight } from "react-icons/hi2";

const Arrivals = () => {
  return (
    <React.Fragment>
      <div className="w-full py-10 dark:bg-zinc-800">
        <div
          className="text-center mb-10 max-w-[600px] mx-auto gap-4 text-TextColor-light dark:text-TextColor-dark"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-once={true}
        >
          <h1 className="text-3xl font-medium">New Arrivals</h1>
          <p className="text-md  underline underline-offset-4 dark:text-emerald-500">
            View all
          </p>
        </div>

        <div className="text-center mb-10 max-w-max mx-auto w-[90%]"   data-aos="fade-up"
          data-aos-anchor-placement="top-center">
   
            <Swiper
              // navigation={true}
              // modules={[Navigation]}
                 breakpoints={{
              990: {
                slidesPerView: 4.5,
              },
              800: {
                slidesPerView: 4,
              },
              500: {
                slidesPerView: 3,
              },
              325: {
                slidesPerView: 2,
              },
              1: {
                slidesPerView: 1,
              },
            }}
              slidesPerView={4}
              spaceBetween={30}
              className="mySwiper w-full"
            >
              {newArrivals.map(
                ({
                  id,
                  img,
                  title,
                  price,
                  numberOfColors,
                  sm,
                  md,
                  lg,
                  xl,
                  xxl,
                  xxxl,
                }) => (
                  <SwiperSlide key={id}>
                    <div className="flex flex-col gap-y-2 rounded-md">
                      <Link href={`/products/${id}`}>
                        <Image
                          src={img}
                          alt={title}
                          className="rounded-t-md "
                        />
                      </Link>
                      <div className={`px-2 child:text-wrap child:text-left`}>
                        <div className="csm:h-[98px] h-[110px] flex flex-col items-start dark:text-TextColor-dark">
                          <Link href={`/products/${id}`}>
                            <span className="text-sm ">{title}</span>
                          </Link>

                          {numberOfColors && (
                            <span className="flex items-center text-xs mt-auto rounded-md hover:bg-primary-light/20 hover:p-1 cursor-pointer">
                              + {numberOfColors} more colours
                              <HiArrowSmallRight />
                            </span>
                          )}
                          <span
                            className={` text-lg cursor-default dark:text-emerald-500 ${
                              numberOfColors ? "mt-0" : "mt-auto"
                            }`}
                          >
                            {price}
                          </span>
                        </div>
                        <span>
                          <ul className="flex child:font-sans flex-wrap gap-2 w-[80%] child:text-xs mt-1 child:cursor-pointer ">
                            <li>{sm && <span className="border border-primary-light dark:border-zinc-950 dark:hover:border-none social-link hover:bg-primary-light/40 hover:text-white hover:will-change-transform dark:bg-zinc-900 dark:text-zinc-600 dark:hover:text-white dark:hover:bg-emerald-600">{sm}</span>}</li>
                            <li>{md && <span className="border border-primary-light dark:border-zinc-950 dark:hover:border-none social-link hover:bg-primary-light/40 hover:text-white hover:will-change-transform dark:bg-zinc-900 dark:text-zinc-600 dark:hover:text-white dark:hover:bg-emerald-600">{md}</span>}</li>
                            <li>{lg && <span className="border border-primary-light dark:border-zinc-950 dark:hover:border-none social-link hover:bg-primary-light/40 hover:text-white hover:will-change-transform dark:bg-zinc-900 dark:text-zinc-600 dark:hover:text-white dark:hover:bg-emerald-600">{lg}</span>}</li>
                            <li>{xl && <span className="border border-primary-light dark:border-zinc-950 dark:hover:border-none social-link hover:bg-primary-light/40 hover:text-white hover:will-change-transform dark:bg-zinc-900 dark:text-zinc-600 dark:hover:text-white dark:hover:bg-emerald-600">{xl}</span>}</li>
                            <li>{xxl && <span className="border border-primary-light dark:border-zinc-950 dark:hover:border-none social-link hover:bg-primary-light/40 hover:text-white hover:will-change-transform dark:bg-zinc-900 dark:text-zinc-600 dark:hover:text-white dark:hover:bg-emerald-600">{xxl}</span>}</li>
                            <li>{xxxl && <span className="border border-primary-light dark:border-zinc-950 dark:hover:border-none social-link hover:bg-primary-light/40 hover:text-white hover:will-change-transform dark:bg-zinc-900 dark:text-zinc-600 dark:hover:text-white dark:hover:bg-emerald-600">{xxxl}</span>}</li>
                          </ul>
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              )}
            </Swiper>
      
        </div>
      </div>
    </React.Fragment>
  );
};

export default Arrivals;
