import { Controller, Get, Param, Post, Put } from "@nestjs/common";
import { BooksService } from "./books.service";

export interface Book {
  id: string;
  ISBN: string;
  name: string;
  type: string;
  description: string;
  publicationDate: string;
  editors: string;
  autors: string;
  photo: string;
}

@Controller("BooksController")
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get(":number")
  bookId(@Param("number") number): any {
    return this.booksService.bookId(number);
  }

  @Get(":number")
  findAll(@Param("number") number): any {
    return this.booksService.bookId(number);
  }

  @Get(":number")
  ISBN(@Param("number") number): any {
    return this.booksService.bookId(number);
  }

  @Get(":string")
  name(): any {
    return this.booksService.name();
  }

  @Post()
  create() {
    const body: Book = {
      id: "2",
      ISBN: "1234",
      name: "Jordi Wild",
      type: "Action",
      description: "Documentales sobre Jordi",
      publicationDate: "2012-04-04",
      editors: "Jordi Wild",
      autors: "Jordi Wild",
      photo: "samplePhoto",
    };
    return body;
  }

  @Put()
  update(number): any {
    const body: Book = {
      id: "2",
      ISBN: "1234",
      name: "Jordi Wild",
      type: "Action",
      description: "Se ha actualizado correctamente",
      publicationDate: "2012-04-04",
      editors: "Jordi Wild",
      autors: "Jordi Wild",
      photo: "samplePhoto",
    };
    return number;
  }

  @Post()
  delete(number): any {
    return number;
  }
}
