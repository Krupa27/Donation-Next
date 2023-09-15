import React from "react";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

const About = () => {
  return (
    <section className="layout h-full flex flex-col md:flex-row justify-center items-center gap-8 md:gap-11 pt-[60px] md:pt-[130px] ">
      <div className="box_image flex-1 flex flex-col items-center">
        <Image
          className="lansiaImg1"
          width={440}
          height={450}
          src="/assets/images/about1.jpeg"
          alt="Lansia"
        />
        <Image
          className="lansiaImg2"
          width={330}
          height={348}
          src="/assets/images/about2.jpeg"
          alt="Lansia"
        />
      </div>
      <div className="mx-5 md:mx-0 flex-1 md:w-full self-start md:self-center">
        <div className="w-full md:mx-8">
          <span className="mb-[14px] text-[16px] inline-block font-semibold	">
            About Us
            <Image
              width={50}
              height={50}
              src="/assets/icons/strip.svg"
              alt="strip"
              className="inline ml-2"
            />
          </span>
          <h2 className="text-[30px] md:text-[39px] mb-[16px] font-playFair leading-tight font-bold  ">
            Your Support is Really Powerful.
          </h2>
          <p className="mb-[16px] md:text-[16px] phone:w-full w-[70%] font-light">
            The secret to happiness lies in helping others. Never underestimate
            the difference YOU can make in the lives of the poor, the abused and
            the helpless.
          </p>
          <Link href={"/about"}>
            <Button primary>Read More</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
