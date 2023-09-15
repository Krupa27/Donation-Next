import { Schema, model, models } from 'mongoose';

const messageSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'First name required'],
  },
  lastName: {
    type: String,
    required: [true, 'Last name required'],
  },
  email: {
    type: String,
    required: [true, 'Email required'],
  },
  phoneNumber: {
    type: String,
    required: [true, 'Phone number required'],
  },
  message: {
    type: String,
    required: [true, 'Message required'],
  },
});

const Message = models.Message || model('Message', messageSchema);

export default Message;
