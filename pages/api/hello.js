// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connectToDB } from '@/lib/mongoose';

export default function handler(req, res) {
  connectToDB();

  res.status(200).json({ name: 'John Doe' });
}
