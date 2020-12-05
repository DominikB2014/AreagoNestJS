import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Mongoose } from 'mongoose';
import { ReviewController } from './review.controller';
import { ReviewService } from './review.service';
import { ReviewSchema } from './schemas/review.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'review', schema: ReviewSchema }])],
  controllers: [ReviewController],
  providers: [ReviewService]
})
export class ReviewModule {}
