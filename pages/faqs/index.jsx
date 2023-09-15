'use client';

import Image from 'next/image';
import FaqsAccordion from '@/components/FaqsAccordion';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import ContactForm from '@/components/ContactForm';

const faqsData = [
  {
    label: ' How can I donate to your organization?',
    content:
      'Donating is easy! Simply visit our website and click on the "Donate" button. You can choose your preferred donation method, such as credit card or online payment platforms, and follow the simple steps to make your contribution securely.',
  },
  {
    label: 'Is my donation tax-deductible?',
    content:
      'Yes, your donation is tax-deductible to the extent allowed by law. As a registered nonprofit organization, we provide tax receipts for all eligible donations. Please consult your local tax regulations or a financial advisor for more information on deductibility.',
  },
  {
    label: 'Can I specify how my donation will be used?',
    content:
      'Absolutely! We offer the option to designate your donation to specific causes or programs within our organization. During the donation process, you can indicate your preference, and we will ensure your contribution is allocated accordingly.',
  },
  {
    label: 'How will my donation make an impact?',
    content:
      'Your donation has a direct and meaningful impact on the lives of those we serve. It enables us to provide essential resources, support vital projects, and create sustainable change. Through transparency and regular updates, we will keep you informed about the impact of your generosity.',
  },
  {
    label: 'Can I volunteer or get involved in other ways?',
    content:
      'Yes, we welcome volunteers and offer various opportunities to get involved. Whether it\'s volunteering your time, skills, or expertise, we appreciate your support beyond financial contributions. Please visit our "Get Involved" page to explore volunteer opportunities or reach out to our team for more information.',
  },
];

const Faqs = () => {
  const [submitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    // e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/message', {
        method: 'POST',
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          message: formData.message,
        }),
        headers: {
          'Content-type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error("Couldn't send the message");
      }

      // const data = await response.json();
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section>
      <div className="bg-blurPrimary">
        <div className="layout h-full pt-[60px] md:pt-[130px] pb-[100px] md:pb-[120px]">
          <div className="w-full mx-5 md:mx-8">
            <span className="mb-[14px] text-[16px] inline-block font-semibold	">
              Have any questions ?
              <Image
                width={50}
                height={50}
                src="/assets/icons/strip.svg"
                alt="strip"
                className="inline ml-2"
              />
            </span>
            <h2 className="text-[30px] md:text-[39px] mb-[16px] font-playFair leading-tight font-bold  ">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="flex flex-col mx-5 md:mx-8 md:flex-row mt-10 justify-between items-center md:items-start gap-8 md:gap-11">
            <div className="w-[300px] h-[310px] border-[14px] border-[#79aedc46]">
              <img
                className="object-top object-cover w-[100%] h-[100%]"
                src="/assets/images/faqs.jpg"
                aria-hidden="true"
              />
            </div>
            <div className=" flex-1 md:w-full max-w-[500px] md:max-w-[700px]">
              {faqsData.map((faq, index) => (
                <FaqsAccordion key={index} {...faq} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="layout h-full pt-[40px] md:pt-[60px]">
        <div className="w-full mx-5 md:mx-8">
          <span className="mb-[14px] text-[16px] inline-block font-semibold	">
            Still Need Help ?
            <Image
              width={50}
              height={50}
              src="/assets/icons/strip.svg"
              alt="strip"
              className="inline ml-2"
            />
          </span>
          <h2 className="text-[30px] md:text-[39px] mb-[16px] font-playFair leading-tight font-bold  ">
            Contact Us
          </h2>

          <ContactForm
            type="Send Message"
            formData={formData}
            onChange={onChange}
            submitting={submitting}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </section>
  );
};

export default Faqs;
