import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { catchError, Observable } from "rxjs";
import { BookService } from "../book/book.service";
import { GetBookDto } from "../shared/dtos/book/book-get.dto";
import { Book } from "../shared/interface/book.model";
import { BooksService } from "../shared/services/books.service";
import { Location } from "@angular/common";

@Component({
  selector: "app-buscar",
  templateUrl: "./buscar.component.html",
  styleUrls: ["./buscar.component.css"],
})
export class BuscarComponent implements OnInit {
  termino: string;
  books: GetBookDto[] = [];

  public idBook: string;
  public booksListObservable: Observable<GetBookDto[]> =
    this.bookService.findAll();
  public booksList: GetBookDto[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: BookService<GetBookDto>,
    private router: Router,
    private readonly location: Location
  ) {
    this.setBooksList();
  }

  ngOnInit(): void {}

  private setBooksList(): void {
    let booksArray: GetBookDto[] = [];
    this.booksListObservable.subscribe((booksList) => {
      this.activatedRoute.params.subscribe((params) => {
        this.termino = params["termino"];

        const termino2 = this.termino.toLowerCase();
        this.booksList = booksList;
        for (let i = 0; i < this.booksList.length; i++) {
          let book = this.booksList[i];
          let name = book.name.toLowerCase();
          if (name.indexOf(termino2) >= 0) {
            //this.idBook = i.toString();
            this.idBook = book.id;
            console.log("ID", book.id, this.idBook.toString());
            this.bookService.findByPropertie(`id:${this.idBook}`);
            booksArray.push(book);
          }
        }

        console.log("desde buscar - termino:", this.termino, this.booksList);
      });
      this.booksList = booksArray;
    });
  }
}
