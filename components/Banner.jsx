import Image from "next/image";
import React from "react";
import { PiPackageDuotone } from "react-icons/pi";
import { LiaShippingFastSolid } from "react-icons/lia";

import img from "../public/Assets/Model/Banner.webp";
const Banner = () => {
  return (
    <div className="w-full"   data-aos="fade-up"
    data-aos-anchor-placement="top-center">
      <div className="my-3">
        <Image src={img} />
      </div>
      <div className="py-3 mt-4 border-t border-black w-full flex justify-center">
        <div className="flex flex-col csm:flex-row  csm:justify-evenly csm:w-full w-[80%] gap-5 csm:gap-0">
          <div className="flex gap-2 csm:justify-center items-center text-sm">
            <PiPackageDuotone
              className="w-[40px]"
              style={{ width: "40px", height: "40px" }}
            />
            <p>Collect from 5,000+ locations</p>
          </div>
          <div className="flex gap-2 csm:justify-center items-center text-sm">
            <LiaShippingFastSolid
              className="w-[40px]"
              style={{ width: "40px", height: "40px" }}
            />
            <p>Free shipping from $50*</p>
          </div>
          <div className="flex gap-2 csm:justify-center items-center text-sm">
            <svg
              width="40px"
              height="40px"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M39.9605 28.5717C39.7329 26.2296 38.5337 24.0981 36.5838 22.5698C35.8318 21.9803 34.9777 21.4877 34.0359 21.0953V10.5355C34.0359 10.3122 33.9169 10.1059 33.7234 9.99423L17.3305 0.529775C17.1371 0.418135 16.8988 0.418135 16.7055 0.529775L0.3125 9.99423C0.119062 10.1059 0 10.3122 0 10.5355V29.4645C0 29.6877 0.119062 29.8941 0.3125 30.0057L16.7055 39.4702C16.8021 39.5259 16.9101 39.5539 17.018 39.5539C17.1259 39.5539 17.2338 39.526 17.3305 39.4702L33.7234 30.0057C33.852 29.9315 33.9466 29.8151 33.9963 29.6801C34.4227 30.2302 34.718 30.847 34.8575 31.497C35.373 33.8984 33.8198 36.2331 30.8043 37.5901C30.5148 37.7204 30.3689 38.0471 30.4652 38.3497C30.5491 38.613 30.793 38.7852 31.0603 38.7851C31.1002 38.7851 31.1406 38.7813 31.1811 38.7733C34.0743 38.2056 36.4423 36.8596 38.0289 34.8809C39.4927 33.0559 40.1786 30.8152 39.9605 28.5717ZM17.018 19.2783L12.4484 16.6401L27.5914 7.89727L32.1609 10.5355L17.018 19.2783ZM7.69445 13.8954L22.8374 5.15259L26.3414 7.17563L11.1984 15.9184L7.69445 13.8954ZM10.5735 17.0009L10.5734 23.0114L7.06953 20.9884L7.06945 14.9779L10.5735 17.0009ZM17.018 1.79274L21.5874 4.43095L6.44445 13.1737L1.875 10.5355L17.018 1.79274ZM1.25 11.6181L5.81945 14.2563L5.81953 21.3493C5.81953 21.5726 5.93859 21.7789 6.13203 21.8906L10.8859 24.6352C10.9826 24.6909 11.0905 24.7189 11.1984 24.7189C11.3063 24.7189 11.4143 24.691 11.5109 24.6352C11.7044 24.5235 11.8234 24.3172 11.8234 24.0939L11.8235 17.7227L16.393 20.3609V37.8465L1.25 29.1037V11.6181ZM17.643 37.8464V20.3609L32.7859 11.6181V20.6491C31.486 20.257 30.0513 20.0327 28.5099 19.9852V17.9638C28.5099 17.7211 28.3694 17.5002 28.1495 17.3976C27.9295 17.2949 27.6698 17.3288 27.4837 17.4845L20.258 23.5322C20.1108 23.6555 20.0284 23.8395 20.0345 24.0315C20.0407 24.2234 20.1347 24.4019 20.2895 24.5154L27.5152 29.8166C27.7052 29.9559 27.9573 29.9767 28.1674 29.8702C28.3775 29.7638 28.51 29.5482 28.51 29.3127V27.2114C30.1651 27.3003 31.619 27.7456 32.7441 28.5125C32.7584 28.5223 32.7719 28.5326 32.786 28.5424V29.1037L17.643 37.8464ZM34.9169 36.0093C35.0713 35.8076 35.2126 35.6003 35.3405 35.3877C36.1268 34.0809 36.3824 32.6448 36.0798 31.2347C35.7618 29.7532 34.8272 28.4196 33.448 27.4795C31.975 26.4755 30.0513 25.9447 27.8849 25.9447C27.5398 25.9447 27.2599 26.2245 27.2599 26.5697V28.0788L21.6716 23.9789L27.2599 19.3018V20.6005C27.2599 20.9456 27.5398 21.2255 27.8849 21.2255C35.3441 21.2255 38.3816 25.2478 38.7165 28.6924C38.9617 31.2167 37.8121 34.1575 34.9169 36.0093Z"
                fill="#000"
              ></path>
            </svg>
            <p>60 day free returns*</p>
          </div>
        </div>
      </div>
      <div className="bg-Secondary-light py-8 gap-2 flex justify-center csm:flex-row flex-col items-center w">
        <div className="flex flex-col">
          <p className="text-lg font-medium">Join us for new drops & fabulous perks</p>
          <p className="text-sm font-normal">Plus, get 30% off your first order when you subscribe</p>
        </div>
        <div className="flex gap-4 justify-center csm:flex-row flex-col items-center w-full csm:w-auto">
            <input type="text" placeholder="First name" className="w-[80%] csm:w-auto p-2 rounded-none csm:rounded-lg border-primary-light border-2 text-primary-light"/>
            <input type="text" placeholder="Your email" className="w-[80%] csm:w-auto p-2 rounded-none csm:rounded-lg border-primary-light border-2 text-primary-light"/>
            <button className="bg-primary-light/50 text-lg font-mono w-[80%] csm:w-auto  text-TextColor-light hover:text-white hover:bg-primary-light/90 transition-all p-2 rounded-xl duration-200">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
