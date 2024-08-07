"use client";

import Image from "next/image";
import Hero from "../../components/Hero";
import NavBar from "../../components/Navbar/NavBar";
import { navItems } from "../../data";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Categories from "../../components/Categories";
import Arrivals from "../../components/Arrivals/Arrivals";
import Shop from "../../components/ShopTheLook/Shop";
import WinterCollection from "../../components/WinterCollection/WinterCollection";
import Model from "../../components/Model";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";

export default function Home() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <NavBar />
      <Hero />
      <Categories />
      <Arrivals />
      {/* <Shop /> */}
      <WinterCollection/>
      <Model/>
      <Banner/>
      <Footer/>
    </div>
  );
}
