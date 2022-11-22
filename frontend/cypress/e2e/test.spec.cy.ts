import { BookService } from "src/app/book/book.service";
import { GetBookDto } from "src/app/shared/dtos/book/book-get.dto";
//import * as books from "./../fixtures/books.json";

const books = new GetBookDto();
const book = "Helen no puede dormir (Familia Walsh 5)";


describe("Quiero obtener informacion de un libro", () => {
    describe("El libro existe", () => {
        it("Deberia existir", () => {
            assert.exists(book);
        });
        it("Deberia tener propiedad id", () => {
            assert.property(books, "id");
        });
        it("Deberia tener propiedad ISBN", () => {
            assert.property(books, "ISBN");
        });
        it("Deberia tener propiedad name", () => {
            assert.property(books, "name");
        });
        it("Deberia poder ver la descripción", () => {
            assert.property(books, "description");
            assert.isNotNull(books.description);

        });
        it("Deberia poder ver la publicationDate", () => {
            assert.property(books, "publicationDate");
            assert.isNotNull(books.publicationDate);

        });
        it("Deberia poder ver los editors", () => {
            assert.property(books, "editors");
            assert.isNotNull(books.editors);

        });
        it("Deberia poder ver los autors", () => {
            assert.property(books, "autors");
            assert.isNotNull(books.autors);

        });
        it("Deberia tener photo", () => {
            assert.property(books, "photo");
            assert.isNotNull(books.photo);

        });
    });

    describe("El libro existe", () => {
        it("Deberia existir", () => {
            assert.exists(book);
        });
        
    });
});