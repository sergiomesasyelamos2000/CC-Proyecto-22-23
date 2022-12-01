import { Test, TestingModule } from "@nestjs/testing";
import { BooksController } from "./books.controller";
import { BooksService } from "./books.service";

describe("BooksController", () => {
  let controller: BooksController;
  let service: BooksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BooksController],
      providers: [BooksService],
    }).compile();

    controller = module.get<BooksController>(BooksController);
    service = module.get<BooksService>(BooksService);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  it("GET /book - Debería ser un libro", () => {
    const result = {
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

    jest.spyOn(service, "bookId").mockImplementation(() => result);

    expect(controller.bookId(3)).toBe(result);
  });

  it("GET /book/1- Debería ser un libro concreto", () => {
    const result = "Libro 1";
    jest.spyOn(service, "bookId").mockImplementation(() => result);
    expect(controller.bookId(3)).toBe(result);
  });

  it("GET /book/Familia Walsh 5 - Debería buscar un libro por name", () => {
    const result = "Familia Walsh 5";
    jest.spyOn(service, "name").mockImplementation(() => result);
    expect(controller.name()).toBe(result);
  });

  it("POST /book/2 - Debería crear un nuevo libro", () => {
    const result = service.create();
    jest.spyOn(service, "create");
    expect(controller.create()).toStrictEqual(result);
  });

  it("PUT /book/2 - Debería actualizar un libro", () => {
    const result = service.update(2);
    jest.spyOn(service, "update");
    expect(controller.update(2)).toBe(result);
  });

  it("DELETE /book/2 - Debería eliminar un libro", () => {
    jest.spyOn(service, "delete")
    expect(controller.delete(2)).toBe(2);
  });
});
