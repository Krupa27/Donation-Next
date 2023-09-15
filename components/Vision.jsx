import Image from 'next/image';

const Vision = () => {
  return (
    <section className="layout h-full flex flex-col md:flex-row justify-center items-center gap-8 md:gap-11 pt-[60px] md:pt-[130px] ">
      <div className="mx-5 md:mx-0 flex-1 md:w-full self-start md:self-center">
        <div className="w-full md:mx-8">
          <span className="mb-[14px] text-[16px] inline-block font-semibold	">
            Welcome to Charity
            <Image
              width={50}
              height={50}
              src="/assets/icons/strip.svg"
              alt="strip"
              className="inline ml-2"
            />
          </span>
          <h1 className="text-[30px] md:text-[39px] mb-[16px] font-playFair leading-tight font-bold  ">
            Let Us Come Together To Make a Difference
          </h1>
          <p className="mb-[16px] md:text-[16px] w-[70%] phone:w-full font-light">
            We open our doors every day to walk alongside the homeless, hungry
            and hurting of Palembang so that they may experience the love of God
            through acts of mercy, dignity and respect. Our guests come for
            shelter and food, and also find a holistic, empowering refuge from
            the streets through deep, intentional care. Pal House is the city’s
            only provider of three meals a day, 365 days a year. We serve more
            than 10,000 meals each month to anyone who walks through our doors.
          </p>
          <div className="flex gap-4 phone:flex-wrap">
            <div className="md:w-[50%] bg-blurPrimary p-4">
              <span>
                <Image
                  className="inline-block"
                  width={30}
                  height={30}
                  src="/assets/icons/misi.svg"
                  alt="mission badge"
                />
              </span>
              <h2 className="inline-block ml-3 text-primary font-semibold mb-4">
                Our Mission
              </h2>
              <p className="font-light">
                Walking alongside the homeless, hungry and hurting of Palembang
                so that they may experience the love of God through acts of
                mercy, dignity and respect
              </p>
            </div>
            <div className="md:w-[50%] bg-blurPrimary p-4">
              <span>
                <Image
                  className="inline-block"
                  width={30}
                  height={30}
                  src="/assets/icons/visi.svg"
                  alt="mission badge"
                />
              </span>
              <h2 className="inline-block ml-3 text-primary font-semibold mb-4">
                Our Vision
              </h2>
              <p className="font-light">
                Homeless, hungry and hurting in Palembang will achieve stability
                and self-sufficiency through a holistic transformation
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="box_image visionBox flex-1 flex flex-col items-center">
        <img
          className="visionImage"
          src="/assets/images/about3.jpeg"
          alt="Bagi sembako"
        />
        <div className="vision bg-white flex justify-center">
          <ul className="list-disc w-full flex items-start justify-between flex-col p-6 font-playFair font-medium text-[14px] md:text-[16px] capitalize leading-tight">
            <li className="hover:text-primary cursor-pointer">
              Together, we are going to make the future
            </li>
            <li className="hover:text-primary cursor-pointer">
              Elderly where we are able to fulfill all
            </li>
            <li className="hover:text-primary cursor-pointer">
              their requirements to keep them safe from withered world
            </li>
            <li className="hover:text-primary cursor-pointer">
              We have already stepped out and start changing the world
            </li>
            <li className="hover:text-primary cursor-pointer">
              Keeping safe them from war, inhumanity
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Vision;
