import Image from 'next/image';
import Link from 'next/link';

const GetInvolved = () => {
  return (
    <section className="layout h-full flex tab:flex-col md:flex-row justify-between items-center gap-8 md:gap-5 pt-[60px] md:pt-[130px] ">
      <div className="mx-5 md:mx-0 md:w-full basis-[30%] self-start md:self-center ">
        <div className="w-full md:mx-8">
          <span className="mb-[14px] text-[16px] inline-block font-semibold	">
            We Need you Help
            <Image
              width={50}
              height={50}
              src="/assets/icons/strip.svg"
              alt="strip"
              className="inline ml-2"
            />
          </span>
          <h1 className="text-[30px] md:text-[39px] mb-[16px] font-playFair leading-tight font-bold  ">
            Get Involved and donate them
          </h1>
          <p className="mb-[16px] md:text-[16px] w-[70%] font-light">
            We’re in this together. and we can’t do it without you
          </p>
        </div>
      </div>
      <div className="box_image getInvolvedBox flex-1 flex flex-col items-center ">
        <div className="flex flex-col gap-11 tab:px-5 md:gap-14 md:flex-row ">
          <div className="flip">
            <div className="front md:w-[50%]">
              <Image
                className="getInvolved h-full"
                width={430}
                height={390}
                src="/assets/images/getInvolved.jpeg"
                alt=""
              />
            </div>
            <div className="back">
              <div className="flex flex-col items-center justify-center h-full p-6 gap-5">
                <img src="/assets/icons/give.svg" alt="" />
                <Link href={'/donate'}>
                  <p className="text-[45px] text-center font-semibold leading-tight">
                    GIVE NOW
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="flip">
            <div className="front md:w-[50%]">
              <Image
                className="getInvolved2 h-full"
                width={430}
                height={390}
                src="/assets/images/getInvolved2.jpeg"
                alt=""
              />
            </div>
            <div className="back">
              <div className="flex flex-col items-center justify-center h-full p-6 gap-5">
                <img src="/assets/icons/meal.svg" alt="" />
                <Link href={'/donate'}>
                  <p className="text-[45px] text-center font-semibold leading-tight">
                    SERVE A MEAL
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
