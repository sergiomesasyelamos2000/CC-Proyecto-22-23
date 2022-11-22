import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Location } from '@angular/common';
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { CarteleraResponse, Movie } from "../interface/cartelera-response";
import { MovieResponse } from "../interface/movie-response";
import { CreditsReponse, Cast } from "../interface/credits-response";
import { Book } from "../interface/book.model";
import { GetBookDto } from "../dtos/book/book-get.dto";
import { BookService } from "src/app/book/book.service";
import { ActivatedRoute, Router } from "@angular/router";

@Injectable({ 
  providedIn: "root",
})
export class BooksService {
  public booksList: GetBookDto[] = [];
  private bookName: string;
  public booksListObservable: Observable<GetBookDto[]> =
    this.bookService.findAll();

  constructor(
    private readonly bookService: BookService<GetBookDto>,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly location: Location,
  ) {
    //this.setBooksList();
  }

  async searchBooks(termino: string): Promise<GetBookDto[]> {

    

    let booksArray: GetBookDto[] = [];
    termino = termino.toLowerCase();
    this.booksListObservable.subscribe((booksList) => {
      this.booksList = booksList;
      for (let i = 0; i < this.booksList.length; i++) {
        let book = this.booksList[i];

        //Tenemos que comparar el termino que el usuario busca
        //con el nombre que tenemos en el array
        let name = book.name.toLowerCase();
        //Si encuentra el termino, es decir, si es mayor que 0,
        //ya que si no lo encuentra devuelve -1
        if (name.indexOf(termino) >= 0) {
          book.id = i.toString();
          booksArray.push(book);
        }
      }
    });
    return booksArray;
  }

  /* searchBooks(name: string) {
    this.route.params.subscribe((params) => {
      this.bookName = params['name'];
      console.log("NAMEEE", this.bookName, name);
      this.bookService
        .findByPropertie(`name:${name}`)
        .pipe(
          catchError((error) => {
            this.location.back();
            throw new Error();
          }),
        )
    });
  } */
}
