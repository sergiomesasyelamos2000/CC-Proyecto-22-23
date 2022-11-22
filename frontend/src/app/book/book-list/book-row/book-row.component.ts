import { Component, EventEmitter, Input, Output } from "@angular/core";
import { GetBookDto } from "src/app/shared/dtos/book/book-get.dto";

/**
 * Generic component to show book data using a GetBookDto as data source
 * @see {@link book-get.dto}
 */

@Component({
  selector: "app-book-row",
  templateUrl: "./book-row.component.html",
  styleUrls: ["./book-row.component.scss"],
})
export class BookRowComponent {
  private _book: GetBookDto = {
    id: "",
    ISBN: "",
    name: "",
    type: "",
    description: "",
    publicationDate: "",
    editors: "",
    autors: "",
    photo: "",
  };

  @Input() set book(book: GetBookDto) {
    this._book = book;
  }

  @Output() showEmmiter: EventEmitter<string> = new EventEmitter<string>();
  @Output() deleteEmmiter: EventEmitter<string> = new EventEmitter<string>();

  get book(): any {
    return this._book;
  }

  public showBookDetail(): void {
    this.showEmmiter.emit(this.book.id);
  }
  public deleteBook(): void {
    this.deleteEmmiter.emit(this.book.id);
  }
}
