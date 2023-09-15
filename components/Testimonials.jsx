'use client';

// import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SliderElement from './SliderElement';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper';

const WhiteStrip = () => {
  return (
    <svg
      width="60"
      className="inline"
      height="1"
      viewBox="0 0 60 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <line y1="0.5" x2="60" y2="0.5" stroke="white" strokeOpacity="0.9" />
    </svg>
  );
};

const Testimonials = () => {
  return (
    <section className="h-full flex flex-col mt-[60px] justify-center items-center gap-8 md:gap-11 md:pt-[30px] bg-secondary ">
      <div className="pt-8 text-center">
        <span className="mb-[14px] text-[16px] inline-flex items-center gap-2 font-semibold	text-white">
          <WhiteStrip />
          Our Testimonials
          <WhiteStrip />
        </span>
        <h2 className="text-[30px] text-white md:text-[39px] font-playFair leading-tight font-bold">
          What People Say
        </h2>
      </div>
      <div className="layout w-full h-[420px] phone:h-max	">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper phone:!pb-[50px]">
          <SwiperSlide>
            <SliderElement
              image="/assets/images/andre.png"
              name="Andre Ramadhan"
              occupation="Founder"
              testimony="I cannot express enough gratitude for the exceptional work carried out by this organization. Their mission to bring positive change to communities is unparalleled. I had the privilege of witnessing their efforts firsthand and was amazed by the tangible impact they create. Through their innovative projects and unwavering determination, they empower individuals, uplift spirits, and foster a sense of hope."
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderElement
              image="/assets/images/beta.png"
              name="Betaly Nava Halmahera"
              occupation="Member"
              testimony="I was deeply moved by the incredible impact that this organization's work has on the lives of individuals in need. Their unwavering dedication and tireless efforts to make a difference in people's lives is truly awe-inspiring. Through their innovative programs and initiatives, they provide vital support and resources to those who need it most."
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderElement
              image="/assets/images/baki.png"
              name="Baki Nasrullah"
              occupation="Volunteer"
              testimony="Supporting this charity has been an immensely rewarding experience. From the very beginning, I was captivated by their transparent approach and their unwavering commitment to achieving measurable results. Through their impactful programs, they tackle some of the most pressing issues our society faces. Witnessing the transformation they bring about in the lives of individuals is truly humbling. It is heartwarming to see how they provide not only immediate relief but also empower individuals to build a better future."
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
