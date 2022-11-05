import { Injectable } from '@nestjs/common';
import { Message } from 'libs/entity-data-models/src';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
