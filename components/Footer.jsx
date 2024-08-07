import React from "react";
import {
  FaInstagram,
  FaPinterest,
  FaSquareFacebook,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";
import { HiOutlineChevronDown } from "react-icons/hi2";
import { IoIosArrowUp } from "react-icons/io";
import { PiButterflyDuotone } from "react-icons/pi";

const Footer = () => {
  return (
    <div>
      <footer className="container-fluid py-5 flex-wrap justify-evenly gap-3 bg-primary-light/40 text-white csm:flex hidden ">
        <div className="w-1/5 px-3"  
         data-aos="fade-up"
          data-aos-anchor-placement="top-center">
          <h5 className="border-b border-gray-900 pb-3 text-TextColor-light font-semibold text-lg">
            St Frock
          </h5>
          <p className="text-sm mt-2">
            Hello! We’re St Frock and we’re here to be your favourite dress.
            Launched in 2010 at Bondi Beach Markets, we’ve grown to a fun,
            passionate team who love to bring you fashion so you can live your
            best life.
          </p>
          <div className="flex justify-evenly mt-2 gap-1 child:cursor-pointer child:p-1 child:rounded-xl">
           <div className="bg-gradient-to-r from-primary-light to-Secondary-light">
             <FaSquareFacebook className=" text-white text-xl" />
            </div>
           <div className="bg-gradient-to-r from-primary-light to-Secondary-light">
             <FaYoutube className=" text-white text-xl" />
            </div>
           <div className="bg-gradient-to-r from-primary-light to-Secondary-light">
             <FaInstagram className=" text-white text-xl" />
            </div>
           <div className="bg-gradient-to-r from-primary-light to-Secondary-light">
             <FaPinterest className=" text-white text-xl" />
            </div>
           <div className="bg-gradient-to-r from-primary-light to-Secondary-light">
             <FaTiktok className=" text-white text-xl" />
            </div>
           <div className="bg-gradient-to-r from-primary-light to-Secondary-light">
             <PiButterflyDuotone className=" text-white text-xl" />
            </div>
          </div>
        </div>
        <div className="w-1/5 flex flex-col"   data-aos="fade-up"
          data-aos-anchor-placement="top-center">
          <h5 className="border-b border-gray-900 pb-3 text-TextColor-light font-semibold text-lg">
            Customer Care
          </h5>
          <ul className="mt-2">
            <li className="text-sm my-1">Help</li>
            <li className="text-sm my-1">Frequently Asked Questions</li>
            <li className="text-sm my-1">Contact Us</li>
            <li className="text-sm my-1">Rewards</li>
            <li className="text-sm my-1">Shipping</li>
            <li className="text-sm my-1">Returns</li>
            <li className="text-sm my-1">Size Guide</li>
            <li className="text-sm my-1">Gift Cards</li>
            <li className="text-sm my-1">Gift Card Balance</li>
          </ul>
        </div>
        <div className="w-1/5 flex flex-col"   data-aos="fade-up"
          data-aos-anchor-placement="top-center">
          <h5 className="border-b border-gray-900 pb-3 text-TextColor-light font-semibold text-lg">
            About Us
          </h5>
          <ul className="mt-2">
            <li className="text-sm my-1">Our Story</li>
            <li className="text-sm my-1">Magazine</li>
            <li className="text-sm my-1">Meet the Team</li>
            <li className="text-sm my-1">Careers</li>
            <li className="text-sm my-1">Affiliates</li>
            <li className="text-sm my-1">Privacy Policy</li>
            <li className="text-sm my-1">Terms & Conditions</li>
          </ul>
        </div>
        <div className="w-1/5 flex flex-col"   data-aos="fade-up"
          data-aos-anchor-placement="top-center">
          <h5 className="border-b border-gray-900 pb-3 text-TextColor-light">
            Shop Online
          </h5>
          <ul className="mt-2">
            <li className="text-sm my-1">Dresses</li>
            <li className="text-sm my-1">Tops</li>
            <li className="text-sm my-1">Skirts & Shorts</li>
            <li className="text-sm my-1">Pants & Denim</li>
            <li className="text-sm my-1">Playsuits & Jumpsuits</li>
            <li className="text-sm my-1">Knitwear</li>
            <li className="text-sm my-1">Outerwear</li>
            <li className="text-sm my-1">Workwear</li>
            <li className="text-sm my-1">Wedding</li>
            <li className="text-sm my-1">Accessories</li>
          </ul>
        </div>
      </footer>



      {/* Footer For Mobiles */}
      <footer className="mt-4 flex justify-center flex-col mx-auto container items-center w-full csm:hidden ">
        {/* header */}
      <div className="w-[90%] px-3 py-4">
          <h5 className="border-b border-gray-900 pb-3 text-TextColor-light font-semibold text-lg">
            St Frock
          </h5>
          <p className="text-sm mt-2">
            Hello! We’re St Frock and we’re here to be your favourite dress.
            Launched in 2010 at Bondi Beach Markets, we’ve grown to a fun,
            passionate team who love to bring you fashion so you can live your
            best life.
          </p>
          <div className="flex justify-evenly mt-2 gap-1 child:cursor-pointer child:p-1 child:rounded-xl">
           <div className="bg-gradient-to-r from-primary-light to-Secondary-light">
             <FaSquareFacebook className=" text-white text-xl" />
            </div>
           <div className="bg-gradient-to-r from-primary-light to-Secondary-light">
             <FaYoutube className=" text-white text-xl" />
            </div>
           <div className="bg-gradient-to-r from-primary-light to-Secondary-light">
             <FaInstagram className=" text-white text-xl" />
            </div>
           <div className="bg-gradient-to-r from-primary-light to-Secondary-light">
             <FaPinterest className=" text-white text-xl" />
            </div>
           <div className="bg-gradient-to-r from-primary-light to-Secondary-light">
             <FaTiktok className=" text-white text-xl" />
            </div>
           <div className="bg-gradient-to-r from-primary-light to-Secondary-light">
             <PiButterflyDuotone className=" text-white text-xl" />
            </div>
          </div>
        </div>

        {/* According Part */}
        <div id="accordion-collapse" data-accordion="collapse" className="w-[100%]">
          <h2 id="accordion-collapse-heading-1" >
            <button
              type="button"
              class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-3 focus:ring-gray-800 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-primary-light/40 dark:hover:bg-gray-800 gap-3"
              data-accordion-target="#accordion-collapse-body-1"
              aria-expanded="true"
              aria-controls="accordion-collapse-body-1"
            >
              <span>Customer Care</span>
              <IoIosArrowUp   data-accordion-icon   aria-hidden="true" class="w-5 h-5 rotate-180 shrink-0"/>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-1"
            class="hidden"
            aria-labelledby="accordion-collapse-heading-1"
          >
            <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p class="mb-2 text-gray-500 dark:text-gray-400">
                Flowbite is an open-source library of interactive components
                built on top of Tailwind CSS including buttons, dropdowns,
                modals, navbars, and more.
              </p>
              <p class="text-gray-500 dark:text-gray-400">
                Check out this guide to learn how to
                <a
                  href="/docs/getting-started/introduction/"
                  class="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  get started
                </a>
                and start developing websites even faster with components on top
                of Tailwind CSS.
              </p>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-2">
            <button
              type="button"
              class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-3 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-primary-light/40 dark:hover:bg-gray-800 gap-3"
              data-accordion-target="#accordion-collapse-body-2"
              aria-expanded="false"
              aria-controls="accordion-collapse-body-2"
            >
              <span>About Us</span>
            
              <IoIosArrowUp   data-accordion-icon   aria-hidden="true" class="w-5 h-5 rotate-180 shrink-0"/>

            </button>
          </h2>
          <div
            id="accordion-collapse-body-2"
            class="hidden"
            aria-labelledby="accordion-collapse-heading-2"
          >
            <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
              <p class="mb-2 text-gray-500 dark:text-gray-400">
                Flowbite is first conceptualized and designed using the Figma
                software so everything you see in the library has a design
                equivalent in our Figma file.
              </p>
              <p class="text-gray-500 dark:text-gray-400">
                Check out the
                <a
                  href="https://flowbite.com/figma/"
                  class="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Figma design system
                </a>
                based on the utility classes from Tailwind CSS and components
                from Flowbite.
              </p>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-3">
            <button
              type="button"
              class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-3 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-primary-light/40 dark:hover:bg-gray-800 gap-3"
              data-accordion-target="#accordion-collapse-body-3"
              aria-expanded="false"
              aria-controls="accordion-collapse-body-3"
            >
              <span>
              Shop Online
              </span>
              <IoIosArrowUp   data-accordion-icon   aria-hidden="true" class="w-5 h-5 rotate-180 shrink-0"/>

            </button>
          </h2>
          <div
            id="accordion-collapse-body-3"
            class="hidden"
            aria-labelledby="accordion-collapse-heading-3"
          >
            <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
              <p class="mb-2 text-gray-500 dark:text-gray-400">
                The main difference is that the core components from Flowbite
                are open source under the MIT license, whereas Tailwind UI is a
                paid product. Another difference is that Flowbite relies on
                smaller and standalone components, whereas Tailwind UI offers
                sections of pages.
              </p>
              <p class="mb-2 text-gray-500 dark:text-gray-400">
                However, we actually recommend using both Flowbite, Flowbite
                Pro, and even Tailwind UI as there is no technical reason
                stopping you from using the best of two worlds.
              </p>
              <p class="mb-2 text-gray-500 dark:text-gray-400">
                Learn more about these technologies:
              </p>
              <ul class="ps-5 text-gray-500 list-disc dark:text-gray-400">
                <li>
                  <a
                    href="https://flowbite.com/pro/"
                    class="text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Flowbite Pro
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindui.com/"
                    rel="nofollow"
                    class="text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Tailwind UI
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <h2 id="accordion-collapse-heading-3">
            <button
              type="button"
              class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-3 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-primary-light/40 dark:hover:bg-gray-800 gap-3"
              data-accordion-target="#accordion-collapse-body-3"
              aria-expanded="false"
              aria-controls="accordion-collapse-body-3"
            >
              <span>
              Dress Styles
              </span>
              <IoIosArrowUp   data-accordion-icon   aria-hidden="true" class="w-5 h-5 rotate-180 shrink-0"/>

            </button>
          </h2>
          <div
            id="accordion-collapse-body-3"
            class="hidden"
            aria-labelledby="accordion-collapse-heading-3"
          >
            <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
              <p class="mb-2 text-gray-500 dark:text-gray-400">
                The main difference is that the core components from Flowbite
                are open source under the MIT license, whereas Tailwind UI is a
                paid product. Another difference is that Flowbite relies on
                smaller and standalone components, whereas Tailwind UI offers
                sections of pages.
              </p>
              <p class="mb-2 text-gray-500 dark:text-gray-400">
                However, we actually recommend using both Flowbite, Flowbite
                Pro, and even Tailwind UI as there is no technical reason
                stopping you from using the best of two worlds.
              </p>
              <p class="mb-2 text-gray-500 dark:text-gray-400">
                Learn more about these technologies:
              </p>
              <ul class="ps-5 text-gray-500 list-disc dark:text-gray-400">
                <li>
                  <a
                    href="https://flowbite.com/pro/"
                    class="text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Flowbite Pro
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindui.com/"
                    rel="nofollow"
                    class="text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Tailwind UI
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default Footer;
