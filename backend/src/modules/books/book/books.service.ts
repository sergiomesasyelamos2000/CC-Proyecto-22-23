import { Injectable } from "@nestjs/common";

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

const example: Book = {
  id: "1",
  ISBN: "9788401354977",
  name: "Familia Walsh 5",
  type: "Fiction",
  description: "saga de la «Familia Walsh» Daily Express",
  publicationDate: "2013-04-04",
  editors: "PLAZA & JANES",
  autors: "Marian Keyes",
  photo: "samplePhoto",
};
@Injectable()
export class BooksService {
  private _id: string;
  private _ISBN: string;
  private _name: string;
  private _type: string;
  private _description: string;
  private _publicationDate: string;
  private _editors: string;
  private _autors: string;
  private _photo: string;

  constructor() {
    this._id = example.id;
    this._ISBN = example.ISBN;
    this._name = example.name;
    this._type = example.type;
    this._description = example.description;
    this._publicationDate = example.publicationDate;
    this._editors = example.editors;
    this._autors = example.autors;
    this._photo = example.photo;
  }

  id(): string {
    return this._id ? this._id : "false";
  }

  ISBN(): string {
    return this._ISBN ? this._ISBN : "false";
  }

  name(): string {
    return this._name ? this._name : "false";
  }

  type(): string {
    return this._type;
  }

  description(): string {
    return this._description;
  }

  publicationDate(): string {
    return this._publicationDate;
  }

  editors(): string {
    return this._editors;
  }

  autors(): string {
    return this._autors;
  }

  photo(): string {
    return this._photo;
  }

  bookId(number): any {
    if (number < 1 || number > 100) {
      return;
    }

    return number;
  }

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

  update(number): any {
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
    return number;
  }

  delete(number): any {
    return number;
  }
}
