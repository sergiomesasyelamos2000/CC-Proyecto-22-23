import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookEntity } from 'src/modules/books/book.entity';
import { PopulatorBooksService } from './services/populator-books.service';
import { ResponseBuilderService } from './services/response-builder.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      BookEntity
    ]),
  ],
  providers: [ResponseBuilderService, PopulatorBooksService],
  exports: [ResponseBuilderService, PopulatorBooksService],
})
export class UtilitiesModule {
  constructor(
    private populatorBooksService: PopulatorBooksService,
  ) {
    this.populatorBooksService.populate();
  }
}
