import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Document } from 'mongoose';
import { CreateReviewDTO } from './dto/create-review.dto';
import Review, { ReviewDocument } from './models/review.interface';

@Injectable()
export class ReviewService {
  constructor(
    @InjectModel('review') private reviewModel: Model<ReviewDocument>,
  ) {}

  async create(review: Review) {
    const newReview = new this.reviewModel(review);
    const result = await newReview.save();
    console.log(result);
    return newReview._id;
  }
}
