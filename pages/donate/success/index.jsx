import Button from '@/components/Button';

function Success() {
  return (
    <section className="layout h-full pt-[60px] md:pt-[130px] pb-[100px] md:pb-[120px]">
      <div className="w-full mx-5 md:mx-8">
        <h2 className="text-[30px] md:text-[39px] mb-[16px] font-playFair leading-tight font-bold  ">
          Thank you for your Donation !
        </h2>
        <a href={'/'}>
          <Button primary>Back to Home</Button>
        </a>
      </div>
    </section>
  );
}

export default Success;
