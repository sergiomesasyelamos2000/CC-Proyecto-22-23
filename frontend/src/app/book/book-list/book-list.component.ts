import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { GetBookDto } from "src/app/shared/dtos/book/book-get.dto";
import { BookService } from "../book.service";

/**
 * Component to show all book list using component BookRow
 * @see {@link book-row.component}
 */
 
@Component({
  selector: "app-book-list",
  templateUrl: "./book-list.component.html",
  styleUrls: ["./book-list.component.scss"],
})
export class BookListComponent {
  /*@Input quiere decir que el parámetro heroes puede venir desde afuera */
  @Input() books: any = {};
  @Input() id: number;

    /*Con el @Output pondremos el parámetro que queremos que el padre esté escuchando */
    @Output() bookSeleccionado: EventEmitter<number>;

  public booksListObservable: Observable<GetBookDto[]> =
  this.bookService.findAll();
  public booksList: GetBookDto[] = [];

  constructor(
    private readonly bookService: BookService<GetBookDto>,
    private readonly router: Router
  ) {
    this.bookSeleccionado = new EventEmitter();
    this.setBooksList();
  }

  /**
   * Navigate to component book-detail
   * @param id book id
   * @see {@link book-detail.component}
   */
   public showBookDetail(id?: string): void {
    this.router.navigate(['book', id]);
  }


  /**
   * Delete book from db and updates book list
   * @param id book id
   */
  public deleteBook(id: string): void {
    this.bookService
      .delete(parseInt(id))
      .subscribe((data) => this.setBooksList());
  }

  /**
   * Sets book list
   */
  private setBooksList(): void {
    this.booksListObservable.subscribe(
      (booksList) => (this.booksList = booksList)
    );
  }
}
