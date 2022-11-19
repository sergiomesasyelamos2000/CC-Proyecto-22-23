import { Book } from '../../interface/book.model';
/**
 * Class for represent data for create user
 * @class
 */
export class CreateBookDto implements Book {
  ISBN: string = '';
  name: string = '';
  type: string = '';
  description: string = '';
  publicationDate: string = '';
  editors: string = '';
  autors: string = '';
}
