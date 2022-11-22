import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UtilitiesModule } from 'src/utilities/utilities.module';
import { BookController } from './book.controller';
import { BookEntity } from './book.entity';
import { BookService } from './book.service';
 
@Module({
  imports: [TypeOrmModule.forFeature([BookEntity]), UtilitiesModule],
  providers: [BookService],
  controllers: [BookController],
  exports: [BookService, TypeOrmModule],
})
export class BookModule {}
