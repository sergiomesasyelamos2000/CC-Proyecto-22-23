import { Test } from "@nestjs/testing";
import { BookController } from "./book.controller";
import { BookService } from "./book.service";
import { BookEntity } from "./book.entity";
import { AppModule } from "../../app.module";
import { UpdateBookDto } from "../../../shared/dtos/book/book-update.dto";
import { CreateBookDto } from "shared/dtos/book/book-create.dto";
const fs = require("fs");
const mocks = require("node-mocks-http");

const mockSolicitud: UpdateBookDto = {
  ISBN: "sample name",
  name: "sample description",
  type: "sample price",
  description: "sample name",
  publicationDate: "sample description",
  editors: "sample price",
  autors: "sample description",
  photo: "sample price",
};

const mockSolicitudCreate: CreateBookDto = {
  ISBN: "sample name",
  name: "sample description",
  type: "sample price",
  description: "sample name",
  publicationDate: "sample description",
  editors: "sample price",
  autors: "sample description",
  photo: "sample price",
};

describe("bookService", () => {
  let controller: BookController;
  let service: BookService;

  beforeEach(async () => {
    const moduleTest = await Test.createTestingModule({
      controllers: [BookController],
      providers: [BookService],
      imports: [AppModule],
    }).compile();

    controller = moduleTest.get<BookController>(BookController);
    service = moduleTest.get<BookService>(BookService);
  });

  describe("Get Book", () => {
    const req = mocks.createRequest();
    req.res = mocks.createResponse();
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";

    describe("GET /book", async () => {
      it("Deberia obtener todos los libros", async () => {
        var res = controller.findAll(token, req.res);
        expect(res).toEqual(expect.any(BookEntity));
      });
    });

    describe("GET /book/id", async () => {
      it("Deberia obtener un libro concreto", async () => {
        var res = controller.findByPropertie(token, "1", req.res);
        expect(res).toEqual(expect.any(BookEntity));
      });
    });

    describe("UPDATE /book/id", async () => {
      it("Deberia poder actualizar un libro concreto", async () => {
        var res = controller.update(token, 1, mockSolicitud, req.res);
        expect(res).toEqual(expect.any(BookEntity));
      });
    });

    describe("DELETE /book/id", async () => {
      it("Deberia poder eliminar un libro concreto", async () => {
        var res = controller.delete(token, 1, req.res);
        expect(res).toEqual(expect.any(BookEntity));
      });
    });

    describe("CREATE /book", async () => {
      it("Deberia poder eliminar un libro concreto", async () => {
        var res = controller.create(token, mockSolicitudCreate, req.res);
        expect(res).toEqual(expect.any(BookEntity));
      });
    });
    it("Deberia devolver error 404", async () => {
      var res = controller.findAll(token, req.res);
      expect(404).toEqual(expect.any(BookEntity));
    });
  });
});
