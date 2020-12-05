import { HttpException, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    const token = req.headers.authorization;
    console.log(token);
    if (!token) {
      throw new HttpException('Invalid Request', 401);
    } else {
      console.log('middleware is working');
      next();
    }
  }
}
