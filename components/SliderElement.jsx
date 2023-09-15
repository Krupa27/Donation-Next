import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';

const SliderElement = ({ image, name, occupation, testimony }) => {
  return (
    <>
      <div className="flex items-center justify-center flex-col mt-[20px]">
        <div className="w-[70px] h-[70px] mb-[32px]">
          <Image
            width={50}
            height={50}
            src={image}
            alt={`${occupation} profile picture`}
          />
        </div>
        <h4 className="font-playFair text-[20px] font-bold text-white capitalize mb-[6px]">
          {name}
        </h4>
        <span className="text-white font-semibold mb-[32px]">{occupation}</span>
        <div className="relative ">
          <div className="absolute w-[61.34px] h-auto top-[-15%] left-[50%] translate-x-[-50%] translate-y-[-8%]">
            <img src="/assets/icons/quote.svg" alt="" />
          </div>
          <p className="text-white leading-tight font-semibold text-[18px] w-[90%] mx-auto">
            {testimony}
          </p>
        </div>
      </div>
    </>
  );
};

export default SliderElement;
