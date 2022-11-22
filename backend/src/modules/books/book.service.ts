import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CrudService } from 'src/utilities/services/crud.service';
import { Repository } from 'typeorm';
import { BookEntity } from './book.entity';
 
@Injectable()
export class BookService extends CrudService<BookEntity> {
  constructor(
    @InjectRepository(BookEntity)
    private readonly booksRepository: Repository<BookEntity>,
  ) {
    super(booksRepository);
  } 
} 
 