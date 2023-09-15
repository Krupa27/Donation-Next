"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Hero from "./Hero";
import Nav from "./Nav";

const HeadingAbout = () => {
  return (
    <div className="absolute flex h-full w-full flex-col items-center justify-center text-white text-center z-10">
      <h1 className="phone:mb-3 text-[48px] medium:text-[35px] phone:text-[25px] font-playFair capitalize">
        about us
      </h1>
    </div>
  );
};

const HeadingFaqs = () => {
  return (
    <div className="absolute flex h-full w-full flex-col items-center justify-center text-white text-center z-10">
      <h1 className="phone:mb-3 text-[48px] medium:text-[35px] phone:text-[25px] font-playFair capitalize">
        Frequently Asked Question
      </h1>
    </div>
  );
};

const HeadingDonate = () => {
  return (
    <div className="absolute flex h-full w-full flex-col items-center justify-center text-white text-center z-10">
      <h1 className="phone:mb-3 text-[48px] medium:text-[35px] phone:text-[25px] font-playFair capitalize">
        Donate
      </h1>
    </div>
  );
};

const Header = () => {
  const [activeBurger, setActiveBurger] = useState(false);

  const pathName = usePathname();

  function closeMenu() {
    setActiveBurger(false);
  }

  // Hero Background
  const homePathname =
    "h-[601px] medium:h-[450px] bg-home-hero bg-cover bg-[center_top] ";
  const aboutPathname =
    "h-[350px] medium:h-[300px] bg-about-hero bg-cover bg-center";
  const faqsPathname =
    "h-[350px] medium:h-[300px] bg-faqs-hero bg-cover bg-[center-left] md:bg-[center_top_-5rem]";
  const donatePathname =
    "h-[350px] medium:h-[300px] bg-about-hero bg-cover bg-center";

  return (
    <>
      <div className={activeBurger ? "overlay" : ""}></div>
      <header
        className={`hero relative top-0 w-full bg-no-repeat
        ${pathName === "/" && homePathname} 
        ${pathName === "/about" && aboutPathname} 
        ${pathName === "/faqs" && faqsPathname} 
        ${pathName === "/donate" && donatePathname} 
        `}
      >
        <Nav
          activeBurger={activeBurger}
          closeMenu={closeMenu}
          setActiveBurger={setActiveBurger}
        />
        {pathName === "/" && <Hero />}
        {pathName === "/about" && <HeadingAbout />}
        {pathName === "/faqs" && <HeadingFaqs />}
        {pathName === "/donate" && <HeadingDonate />}
        <div className="rectangle">
          <img src="/assets/icons/rectangle.png" alt="" />
        </div>
      </header>
    </>
  );
};

export default Header;
