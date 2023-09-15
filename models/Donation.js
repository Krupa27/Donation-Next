import { Schema, model, models } from 'mongoose';

const DonationSchema = new Schema(
  {
    amount: {
      type: String,
      required: true,
    },
    paidAtTime: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export const Donation = models?.Donation || model('Donation', DonationSchema);
