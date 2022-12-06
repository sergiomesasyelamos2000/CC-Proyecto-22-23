import { Controller, Get, Param, Post, Put } from "@nestjs/common";
import { UsersService } from "./users.service";

export interface User {
  id: string;
  email: string;
  name: string;
  password: string;
  surname: string;
}

@Controller("UsersController")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get(":number")
  userId(@Param("number") number): any {
    return this.usersService.userId(number);
  }

  @Get(":number")
  findAll(@Param("number") number): any {
    return this.usersService.userId(number);
  }

  @Get(":number")
  email(@Param("number") number): any {
    return this.usersService.userId(number);
  }

  @Get(":string")
  name(): any {
    return this.usersService.name();
  }

  @Post()
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

  @Put()
  update(number): any {
    const body: User = {
      id: "2",
      email: "sergio@gmail.com",
      name: "Pepe",
      password: "1234",
      surname: "Mesas",
    };
    return number;
  }

  @Post()
  delete(number): any {
    return number;
  }
}
