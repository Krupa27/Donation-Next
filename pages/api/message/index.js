import Message from '@/models/Message';
import { connectToDB } from '@/lib/mongoose';

export default async function handler(req, res) {
  connectToDB();

  if (req.method === 'POST') {
    const { firstName, lastName, email, phoneNumber, message } = req.body;

    try {
      const newMessage = new Message({
        firstName,
        lastName,
        email,
        phoneNumber,
        message,
      });

      await newMessage.save();

      res.status(201).json(newMessage);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Failed to create a new message' });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}

// export async function POST(req, res) {
//   await connectToDB();

//   try {
//     const { firstName, lastName, email, phoneNumber, message } = req.body;

//     const newContact = new Contact({
//       firstName,
//       lastName,
//       email,
//       phoneNumber,
//       message,
//     });

//     await newContact.save();

//     res.status(201).json(newContact);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: 'Failed to create a new contact' });
//   }
// }

// export const POST = async request => {
//   const { firstName, lastName, email, phoneNumber, message } =
//     await request.json();

//   try {
//     await connectToDB();

//     const newMessage = new Message({
//       firstName,
//       lastName,
//       email,
//       phoneNumber,
//       message,
//     });

//     await newMessage.save();

//     return new Response(JSON.stringify(newMessage), {
//       status: 201,
//     });
//   } catch (error) {
//     return new Response('Failed to post a new message', { status: 500 });
//   }
// };
