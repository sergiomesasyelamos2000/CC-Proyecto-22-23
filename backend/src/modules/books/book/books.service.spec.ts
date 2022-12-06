import { Test, TestingModule } from "@nestjs/testing";
import { BooksService } from "./books.service";

describe("BooksService", () => {
  let service: BooksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BooksService],
    }).compile();

    service = module.get<BooksService>(BooksService);
  });

  it("Debería estar definido el servicio", () => {
    expect(service).toBeDefined();
  });

  it("Debería existir libro", () => {
    expect(service.id()).toBe("1");
  });

  it("No debería existir libro", () => {
    expect(service.id()).not.toBe("false");
  });

  it("Debería existir el ISBN de un libro", () => {
    expect(service.ISBN()).toBe("9788401354977");
  });

  it("No debería existir el ISBN de un libro", () => {
    expect(service.ISBN()).not.toBe("false");
  });

  it("Debería existir el name de un libro", () => {
    expect(service.name()).toBe("Familia Walsh 5");
  });

  it("No debería existir el name de un libro", () => {
    expect(service.name()).not.toBe("false");
  });

  it("Debería existir el type de un libro", () => {
    expect(service.type()).toBe("Fiction");
  });

  it("No debería existir el type de un libro", () => {
    expect(service.type()).not.toBe("false");
  });

  it("Debería existir el description de un libro", () => {
    expect(service.description()).toBe(
      "saga de la «Familia Walsh» Daily Express"
    );
  });

  it("No debería existir el description de un libro", () => {
    expect(service.description()).not.toBe("false");
  });

  it("Debería existir el publicationDate de un libro", () => {
    expect(service.publicationDate()).toBe("2013-04-04");
  });

  it("No debería existir el publicationDate de un libro", () => {
    expect(service.publicationDate()).not.toBe("false");
  });

  it("Debería existir el editors de un libro", () => {
    expect(service.editors()).toBe("PLAZA & JANES");
  });

  it("No debería existir el editors de un libro", () => {
    expect(service.editors()).not.toBe("false");
  });

  it("Debería existir el autors de un libro", () => {
    expect(service.autors()).toBe("Marian Keyes");
  });

  it("No debería existir el autors de un libro", () => {
    expect(service.autors()).not.toBe("false");
  });

  it("Debería existir el photo de un libro", () => {
    expect(service.photo()).toBe("samplePhoto");
  });

  it("No debería existir el photo de un libro", () => {
    expect(service.photo()).not.toBe("false");
  });

  it("No debería devolver nada", () => {
    expect(service.bookId(0)).toBe(undefined);
  });
});
