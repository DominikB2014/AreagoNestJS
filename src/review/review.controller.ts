import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateReviewDTO } from './dto/create-review.dto';
import Review from './models/review.interface';
import { ReviewService } from './review.service';

@Controller('review')
export class ReviewController {
  constructor(private reviewService: ReviewService) {}

  @Get('/')
  async findAll() {
    return await this.reviewService.findAll();
  }

  @Post('/add')
  async createReview(@Body() createReview: CreateReviewDTO) {
    await this.reviewService.create(createReview);
  }
}
