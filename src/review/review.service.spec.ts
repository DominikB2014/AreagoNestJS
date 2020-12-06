import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Model } from 'mongoose';
import Review, { ReviewDocument } from './models/review.interface';
import { ReviewService } from './review.service';

const mockReview = (review: Partial<Review>): Review => ({
  areaName: 'AreaName',
  description: 'ReviewDescription',
  stars: 5,
  title: 'ReviewTitle',
  username: 'Username',
  ...review,
});

const mockReviewDocument = (reviewDocument: Partial<ReviewDocument>): Partial<ReviewDocument> => ({
  ...mockReview({}),
  _id: 'mockId',
  ...reviewDocument,
});

describe('ReviewService', () => {
  let service: ReviewService;
  let model: Model<ReviewDocument>

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ReviewService,
        {
          provide: getModelToken('review'),
          useValue: {
            new: jest.fn().mockResolvedValue(mockReview({})),
            constructor: jest.fn().mockResolvedValue(mockReview({})),
            find: jest.fn(),
            create: jest.fn(),
            remove: jest.fn()
          },
        },
      ],
    }).compile();

    service = module.get<ReviewService>(ReviewService);
    model = module.get<Model<ReviewDocument>>(getModelToken('review'));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
