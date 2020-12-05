import { Document } from 'mongoose';

export default interface Review {
  username: string;
  title: string;
  description: string;
  stars: number;
  areaName: string;
}

export type ReviewDocument = Review & Document;
