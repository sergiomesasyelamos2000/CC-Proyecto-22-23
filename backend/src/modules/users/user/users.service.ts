import { Injectable } from "@nestjs/common";

export interface User {
  id: string;
  email: string;
  name: string;
  password: string;
  surname: string;
}

const example: User = {
  id: "2",
  email: "sergio@gmail.com",
  name: "Sergio",
  password: "1234",
  surname: "Mesas",
};
@Injectable()
export class UsersService {
  private _id: string;
  private _name: string;
  private _email: string;
  private _password: string;
  private _surname: string;

  constructor() {
    this._id = example.id;
    this._name = example.name;
    this._email = example.email;
    this._password = example.password;
    this._surname = example.surname;

  }

  id(): string {
    return this._id ? this._id : "false";
  }

  name(): string {
    return this._name ? this._name : "false";
  }

  email(): string {
    return this._email;
  }

  password(): string {
    return this._password;
  }

  surname(): string {
    return this._surname;
  }

  userId(number): any {
    if (number < 1 || number > 100) {
      return;
    }

    return number;
  }

  create() {
    const body: User = {
      id: "2",
      email: "sergio@gmail.com",
      name: "Sergio",
      password: "1234",
      surname: "Mesas",
    };
    return body;
  }

  update(number): any {
    const body: User = {
      id: "2",
      email: "sergio@gmail.com",
      name: "PEPE",
      password: "1234",
      surname: "Mesas",
    };
    return number;
  }

  delete(number): any {
    return number;
  }
}
