import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../../../../../libs/entity-data-models/src';
import { CrudService } from '../../../../../../libs/ngx-shared/src/lib/services/crud.service';

@Injectable()
export class UserService extends CrudService<User> {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>
  ) {
    super(usersRepository);
  }
}
