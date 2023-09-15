import Button from './Button';
import Link from 'next/link';

const Hero = () => {
  return (
    <>
      <div className="phone:gap-4 phone:mt-5 absolute flex h-full w-full flex-col gap-7  items-center justify-center text-white text-center z-10">
        <p className="phone:text-[16px] block font-montserrat font-bold text-[18px] md:text[20px] ">
          Give Hope For Homeless
        </p>
        <h1 className="phone:mb-3 phone:text-[40px] font-playFair capitalize text-[45px] md:text-[60px] leading-[1.1]">
          Helping each other <br /> can make world better
        </h1>
        <p className="phone:mb-3 phone:text-[14px] w-[80%] md:w-[50%] font-light text-[16px] md:text[18px] leading-tight">
          We Seek out world changers and difference makers around the globe,and
          equip them to fulfill their unique purpose.
        </p>
        <div className="flex gap-5 md:gap-9">
          <Link href={'/donate'}>
            <Button primary>Donate Now</Button>
          </Link>
          <Link href={'/about'}>
            <Button outline>Know About Us</Button>
          </Link>
        </div>
      </div>
      <div className="spark">
        <img src="/assets/icons/spark.svg" alt="" />
      </div>
      <div className="strips">
        <img src="/assets/icons/strips.svg" alt="" />
      </div>
    </>
  );
};

export default Hero;
