import { Test } from "@nestjs/testing";
import { CreateUserDto } from "shared/dtos/user/user-create.dto";
import { UpdateUserDto } from "shared/dtos/user/user-update.dto";
import { AppModule } from "../../app.module";
import { UserController } from "./user.controller";
import { UserEntity } from "./user.entity";
import { UserService } from "./user.service";
const fs = require("fs");
const mocks = require("node-mocks-http");

const mockSolicitud: UpdateUserDto = {
  id: "sample id",
  email: "sample email",
  name: "sample name",
  password: "sample password",
  surname: "sample surname",

};

const mockSolicitudCreate: CreateUserDto = {
    email: "sample email",
    name: "sample name",
    password: "sample password",
    surname: "sample surname",
};

describe("ProductService", () => {
  let controller: UserController;
  let service: UserService;

  beforeEach(async () => {
    const moduleTest = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
      imports: [AppModule],
    }).compile();

    controller = moduleTest.get<UserController>(UserController);
    service = moduleTest.get<UserService>(UserService);
  });

  describe("Get User", () => {
    const req = mocks.createRequest();
    req.res = mocks.createResponse();
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";

    describe("GET /users", async () => {
      it("Deberia obtener todos los libros", async () => {
        var res = controller.findAll(token, req.res);
        expect(res).toEqual(expect.any(UserEntity));
      });
    });

    describe("GET /users/id", async () => {
      it("Deberia obtener un libro concreto", async () => {
        var res = controller.findByPropertie(token, "1", req.res);
        expect(res).toEqual(expect.any(UserEntity));
      });
    });

    describe("UPDATE /users/id", async () => {
      it("Deberia poder actualizar un libro concreto", async () => {
        var res = controller.update(token, 1, mockSolicitud, req.res);
        expect(res).toEqual(expect.any(UserEntity));
      });
    });

    describe("DELETE /users/id", async () => {
      it("Deberia poder eliminar un libro concreto", async () => {
        var res = controller.delete(token, 1, req.res);
        expect(res).toEqual(expect.any(UserEntity));
      });
    });

    describe("CREATE /users", async () => {
      it("Deberia poder eliminar un libro concreto", async () => {
        var res = controller.create(token, mockSolicitudCreate, req.res);
        expect(res).toEqual(expect.any(UserEntity));
      });
    });
    it("Deberia devolver error 404", async () => {
      var res = controller.findAll(token, req.res);
      expect(404).toEqual(expect.any(UserEntity));
    });
  });
});
