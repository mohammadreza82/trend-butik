import Image from "next/image";
import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";
import { dropdownLinks, navItems } from "../../data";
import { HiChevronDown } from "react-icons/hi";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-primary-dark/70 dark:text-white duration-200 relative z-40 ">
      {/* Upper Nav */}
      <div className="w-full bg-primary-light/40 dark:bg-primary-dark border-gray-200 ">
        <nav className="w-[90%] mx-auto">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8"
                alt="Flowbite Logo"
              />
              <span className="self-center text-TextColor-light text-2xl font-semibold whitespace-nowrap dark:text-white">
                Flowbite
              </span>
            </a>
            {/* SearchBar */}
            <div className="flex justify-between items-center gap-4 child:font-serif">
              <div className="relative group hidden csm:block">
                <input
                  type="text"
                  placeholder="search"
                  className="w-[200px] csm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full dark:text-white border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-white dark:bg-primary-dark/40 "
                />
                <IoMdSearch className="text-TextColor-light dark:text-white group-hover:text-white absolute top-1/2 -translate-y-1/2 right-3" />
              </div>

              {/* order button */}
              <button className="bg-gradient-to-r from-primary-light to-Secondary-light transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group">
                {/* <span className="group-hover:block hidden transition-all duration-200">
                  Order
                </span> */}
                <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </button>

              {/* Darkmode Switch */}
              <div>
                <DarkMode />
              </div>
              {/* hamburgerMeny */}
              <div className="csm:hidden block"></div>
            </div>
          </div>
        </nav>
      </div>
      {/* Lower Nav */}
      <div
        data-aos="zoom-in"
        data-aos-anchor-placement="top-center"
        className="flex justify-center child:font-serif"
      >
        <ul className="csm:flex hidden items-center gap-4">
          {navItems.map(({ id, name, link, dropdown, dropdownLinks }) => (
            <li key={id}>
              {dropdown ? (
                <div className="group relative cursor-pointer">
                  <Link
                    href={link}
                    className="flex items-center gap-[2px] py-2 hover:text-primary-light dark:hover:text-primary-dark"
                  >
                    {name}
                    <HiChevronDown className="transition-all text-xl duration-200 group-hover:rotate-180" />
                  </Link>

                  <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2  text-black shadow-md">
                    <ul>
                      {dropdownLinks.map(({ id, name, link }) => (
                        <li key={id}>
                          <a
                            href={link}
                            className="inline-block w-full rounded-md p-2 hover:bg-primary-light/20 "
                          >
                            {name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <a
                  href={link}
                  className="inline-block px-4  text-TextColor-light dark:hover:text-primary-dark dark:text-white hover:text-primary-light duration-200"
                >
                  {name}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
      {/* GrayLine */}
      <div className="w-full bg-Secondary-light/40 dark:bg-Secondary-dark/40 font-serif flex justify-evenly items-center h-10 child:cursor-pointer child:text-TextColor-light dark:child:text-white hover:child:translate-x-4 transition-transform duration-700">
        <p className="csm:flex hidden">Buy now, pay later with Afterpay</p>
        <p>Free shipping from AU$150</p>
        <p className="csm:flex hidden">60 day returns*</p>
      </div>
    </div>
  );
};

export default NavBar;
