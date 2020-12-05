import { Body, Controller, Post } from '@nestjs/common';
import { CreateReviewDTO } from './dto/create-review.dto';
import { ReviewService } from './review.service';

@Controller('review')
export class ReviewController {

    constructor (private reviewService: ReviewService) {}

    @Post('/add')
    async createReview(@Body() createReview: CreateReviewDTO) {
        
    }
}
