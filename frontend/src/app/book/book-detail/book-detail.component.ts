import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from 'rxjs';
import { InputModel } from 'src/app/shared/components/input/model/input.model';
import { UpdateBookDto } from 'src/app/shared/dtos/book/book-update.dto';
import { Book } from 'src/app/shared/interface/book.model';
import { InputService } from 'src/app/shared/services/input.service';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { encrypt } from 'src/app/shared/Utils';
import { environment } from 'src/environments/environment';
import { BookService } from '../book.service';

/** 
 * Component to show book selected info and updated
 */
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent {
  private bookId = 0;
  private originalBook?: any;

  public book?: Book;
  public formGroup = new FormGroup({});

  public ISBNInputControl?: FormControl;
  public nameInputControl?: FormControl;
  public typeInputControl?: FormControl;
  public descriptionInputControl?: FormControl;
  public publicationDateInputControl?: FormControl;
  public editorsInputControl?: FormControl;
  public autorsInputControl?: FormControl;
  public photoInputControl?: FormControl;

  public ISBNInputModel?: InputModel;
  public nameInputModel?: InputModel;
  public typeInputModel?: InputModel;
  public descriptionInputModel?: InputModel;
  public publicationDateInputModel?: InputModel;
  public editorsInputModel?: InputModel;
  public autorsInputModel?: InputModel;
  public photoInputModel?: InputModel;


  constructor(
    private readonly bookService: BookService<Book>,
    private readonly inputService: InputService,
    private readonly route: ActivatedRoute,
    private readonly location: Location,
    private readonly notificationService: NotificationsService,
    private router: Router
  ) {
    this.route.params.subscribe((params) => {
      this.bookId = params['id'];
      this.bookService
        .findByPropertie(`id:${this.bookId}`)
        .pipe(
          catchError((error) => {
            this.location.back();
            throw new Error();
          }),
        )
        .subscribe((book) => {
          this.book = book;
          this.originalBook = book;
          this.buildForm();
        });
    });
  }

  /**
   * Build form and fill it with book data recovered from db
   */
  private buildForm() {
    this.ISBNInputControl = new FormControl(this.book?.ISBN, []);
    this.nameInputControl = new FormControl(this.book?.name, []);
    this.typeInputControl = new FormControl(this.book?.type, []);
    this.descriptionInputControl = new FormControl(this.book?.description, []);
    this.publicationDateInputControl = new FormControl(this.book?.publicationDate, []);
    this.editorsInputControl = new FormControl(this.book?.editors, []);
    this.autorsInputControl = new FormControl(this.book?.autors, []);
    this.photoInputControl = new FormControl(this.book?.photo, []);

    this.formGroup = new FormGroup({
      ISBN: this.ISBNInputControl,
      name: this.nameInputControl,
      type: this.typeInputControl,
      description: this.descriptionInputControl,
      publicationDate: this.publicationDateInputControl,
      editors: this.editorsInputControl,
      autors: this.autorsInputControl,
      photo: this.photoInputControl,
    });
    this.ISBNInputModel = this.inputService.getISBNInput(this.ISBNInputControl);
    this.nameInputModel = this.inputService.getNameInput(this.nameInputControl);
    this.typeInputModel = this.inputService.getTypeInput(this.typeInputControl);
    this.descriptionInputModel = this.inputService.getDescriptionInput(this.descriptionInputControl);
    this.publicationDateInputModel = this.inputService.getPublicationDateInput(this.publicationDateInputControl);
    this.editorsInputModel = this.inputService.getEditorsInput(this.editorsInputControl);
    this.autorsInputModel = this.inputService.getAutorsInput(this.autorsInputControl);
    this.photoInputModel = this.inputService.getPhotoInput(this.photoInputControl);
  }

  /**
   * Update book data in db with data changed in form
   */
  public updateBook(): void {
    let updatedBook: any = new UpdateBookDto();
    updatedBook = { ...updatedBook, ...this.formGroup.getRawValue() };

    /**
     * Remove data not changed
     */
    Object.keys(updatedBook).forEach((propertie) => {
      if (
        updatedBook[propertie] === this.originalBook[propertie] ||
        updatedBook[propertie] === ''
      ) {
        delete updatedBook[propertie];
      }
    });
    if (updatedBook.password) {
      updatedBook.password = encrypt(updatedBook.password);
    }

    this.bookService
      .update(this.bookId, updatedBook)
      .subscribe((response) =>
        this.notificationService.showCompossedSuccessNotification(
          'success.database.generic.book',
          { action: 'success.database.action.update' },
        ),
      );
  }

  /**
   * Navigate to book-list 
   */
   public goBookList(): void {
    this.router.navigate([environment.url.components.books]);
  }
}
