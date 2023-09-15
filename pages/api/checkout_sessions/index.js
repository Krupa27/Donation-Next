import { Donation } from '@/models/Donation';
import { connectToDB } from '@/lib/mongoose';
import micro_cors from 'micro-cors';

const stripe = require("stripe")(
  "sk_test_51Nnl56SEaQiOKQfRfGV5eVMKr7wRuAo07HlqJF1m37Jg7BhqiFlHmsObUywnr3YjqG28NtMHssoSZBUdvXjBH3W500MNSaQvq6"
);

const handler = async (req, res) => {
  await connectToDB();

  const { amount } = req.body;

  const donation = await Donation.create({
    amount,
  });

  if (req.method === 'POST') {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Pridce ID
            price_data: {
              currency: 'inr',
              product_data: {
                name: 'customDonate',
              },
              unit_amount: amount * 100,
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/donate/success`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });

      // res.status(303).json({ redirectUrl: session.url });
      res.json({
        url: session.url,
      });
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
};

export default micro_cors()(handler);
