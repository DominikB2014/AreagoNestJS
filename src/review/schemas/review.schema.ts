import * as Mongoose from 'mongoose';

export const ReviewSchema = new Mongoose.Schema(
  {
    username: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    stars: { type: String, required: true },
    areaName: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);
