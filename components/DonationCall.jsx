import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

const DonationCall = () => {
  return (
    <section className="layout h-full flex flex-col md:flex-row justify-center items-center gap-8 md:gap-11 pt-[60px] md:pt-[130px] ">
      <div className="donationCall flex-1">
        <Image
          width={440}
          height={450}
          src="/assets/images/donationCall.jpeg"
          alt="Lansia"
        />
      </div>
      <div className="mx-5 md:mx-0 flex-1 md:w-full ">
        <div className="w-full md:mx-8 text-center md:text-left">
          <h1 className="text-[30px] md:text-[39px] mb-[16px] font-playFair leading-tight font-bold  ">
            We can Save More Lives with you
          </h1>
          <p className="mb-[16px] w-[70%] mx-auto md:w-full md:text-[16px] font-light">
            Help us provide hope to the homeless, hungry and hurting of
            Palembang..
          </p>
          <Link href={"/donate"}>
            <Button primary>Donate Now</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DonationCall;
