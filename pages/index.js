// Components
import About from '@/components/About';
import DonationCall from '@/components/DonationCall';
import GetInvolved from '@/components/GetInvolved';
import Testimonials from '@/components/Testimonials';
import Vision from '@/components/Vision';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Donation success.');
    }

    if (query.get('canceled')) {
      console.log('Donation calceled!');
    }
  }, []);

  return (
    <>
      <About />
      <Vision />
      <GetInvolved />
      <Testimonials />
      <DonationCall />
    </>
  );
}
