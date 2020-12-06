import { Test, TestingModule } from '@nestjs/testing';
import Review from './models/review.interface';
import { ReviewController } from './review.controller';
import { ReviewService } from './review.service';

describe('ReviewController', () => {
  let controller: ReviewController;
  let service: ReviewService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReviewController],
      providers: [
        {
          provide: ReviewService,
          useValue: {
            findAll: jest.fn().mockResolvedValue(<Review[]>[
              {
                areaName: 'AreaName1',
                description: 'ReviewDescription',
                username: 'Username',
                stars: 5,
                title: 'ReviewTitle',
              },
            ]),
            create: jest.fn().mockResolvedValue(<Review>{
              areaName: 'AreaName1',
              description: 'ReviewDescription',
              username: 'Username',
              stars: 5,
              title: 'ReviewTitle',
            }),
          },
        },
      ],
    }).compile();

    controller = module.get<ReviewController>(ReviewController);
    service = module.get<ReviewService>(ReviewService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
