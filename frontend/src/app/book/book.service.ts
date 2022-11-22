import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { CrudService } from '../shared/services/crud.service';

/**
 * Crud service for all book/ components
 * @see {@link crud.service}
 */
@Injectable({
  providedIn: 'root',
})
export class BookService<Book> extends CrudService<Book> {
  private enviromentApi: string = environment.environment_api.local;
  private booksEndpoint: string = environment.url.api.books;

  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.setErrorType('error.database.type.book');
    this.setApiCrudEndpointUrl(this.enviromentApi, this.booksEndpoint);
  }
}
