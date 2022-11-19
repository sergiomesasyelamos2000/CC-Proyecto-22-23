import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BookEntity } from "src/modules/books/book.entity";
import { Repository } from "typeorm";
import * as books from "./books.json";

@Injectable()
export class PopulatorBooksService {
  constructor(
    @InjectRepository(BookEntity)
    private booksRepository: Repository<BookEntity>
  ) {}

  async populate() {
    console.log("PopulatorBookService started at: ", new Date());
    return await this.populateBooks();
  }

  private async populateBooks() {
    const count = await this.booksRepository.count();
    // const booksBBDD = await this.booksRepository.find();
    console.log("COUNT", count);

    console.log("COUNT", books.items.length);

    books.items.map(async (item) => {
      /* const type = item.volumeInfo.categories.find((type) => type[0]); */
      if ((item.volumeInfo.industryIdentifiers && item.volumeInfo.categories && item.volumeInfo.authors ) !== undefined) {
        const ISBN = item.volumeInfo.industryIdentifiers.find(
          (identifier) => identifier.identifier[0]
        );
        const type = item.volumeInfo.categories.find((type) => type[0]);

        const authors = item.volumeInfo.authors.find((author) => author[0]);

       // console.log("dfsdfsdf", ISBN, type, authors);

        await this.booksRepository.save({
          /* id: item.etag, */
          ISBN: ISBN.identifier,
          name: item.volumeInfo.title,
          type: type,
          description: item.volumeInfo.description,
          publicationDate: item.volumeInfo.publishedDate,
          editors: item.volumeInfo.publisher,
          autors: authors,
          photo: item.volumeInfo.imageLinks.smallThumbnail,
        });
      }
    });

    /* books.items.map(async (item) => {
      
      await this.booksRepository.save({
        id:item.id,
        ISBN: item.volumeInfo.title,
        name:item.volumeInfo.title,
        type: item.volumeInfo.title,
        description: item.volumeInfo.description,
        publicationDate: item.volumeInfo.publishedDate,
        editors: item.volumeInfo.title,
        autors: item.volumeInfo.title,
      });
    }); */

    /* if (count === 0) {
      await this.booksRepository.save(this.distributors);
    } */
  }
}
