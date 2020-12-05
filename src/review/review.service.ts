import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Document } from 'mongoose';
import Review, { ReviewDocument } from './models/review.interface';

@Injectable()
export class ReviewService {
  constructor(@InjectModel('review') private reviewModel: Model<ReviewDocument>) {}

  async findAll() {
    return await this.reviewModel.find();
  }

  async create(review: Review) {
    const newReview = new this.reviewModel(review);
    return await newReview.save();
  }
}
