import {
    Body,
    Controller,
    Delete,
    Get,
    Headers,
    HttpStatus,
    Param,
    Post,
    Put,
    Res,
    UseGuards,
  } from '@nestjs/common';
  import { AuthGuard } from '@nestjs/passport';
  import {
    ApiConsumes,
    ApiForbiddenResponse,
    ApiHeader,
    ApiOkResponse,
    ApiParam,
    ApiTags,
    ApiUnauthorizedResponse,
  } from '@nestjs/swagger';
import { CreateBookDto } from 'shared/dtos/book/book-create.dto';
import { GetBookDto } from 'shared/dtos/book/book-get.dto';
import { UpdateBookDto } from 'shared/dtos/book/book-update.dto';
  import { ApiUrls, ApiUserUrls } from 'shared/enums/api-urls.enum';
import { ControllerAbstract } from 'src/abstracts/abstract.controller';
import { ResponseBuilderService } from 'src/utilities/services/response-builder.service';
import { buildFindOneOptions, decryptPassword } from 'src/utilities/Utils';
  import { FindOneOptions } from 'typeorm';
import { BookEntity } from './book.entity';
import { BookService } from './book.service';
  
  @ApiHeader({
    name: 'Authorization',
    description: 'Jwt generated when book login',
  })
  @ApiTags('book')
  @Controller(ApiUrls.API_URL_BOOK)
  export class BookController extends ControllerAbstract<BookEntity> {
    lang = 'es';
    constructor(
      private readonly bookService: BookService,
      private readonly responseBuilderService: ResponseBuilderService
    ) {
      super();
    }
  
    @ApiConsumes('application/json')
    @ApiOkResponse({ 
      status: 200,
      description: 'Get all books was successfully completed',
      type: [BookEntity],
    })
    
    @ApiForbiddenResponse({
      status: 403,
      description: 'Get all books failed',
    })

    @ApiUnauthorizedResponse({
      status: 401,
      description: 'Book acces token is not present or is invalid',
    })

    @UseGuards(AuthGuard('jwt'))
    @Get()
    public findAll(@Headers() headers, @Res() response): Promise<BookEntity[]> {
      return this.bookService
        .findAll()
        .then((books) => {
          const booksAll: GetBookDto[] = [];
  
          books.forEach((book) => {
            const bookAll: GetBookDto = {
              id: book.id.toString(),
              ISBN: book.ISBN,
              name: book.name,
              type: book.type,
              description: book.description,
              publicationDate: book.publicationDate,
              editors: book.editors,
              autors: book.autors,
              photo: book.photo,
            };
            booksAll.push(bookAll);
          });
  
          return response.status(HttpStatus.OK).json(booksAll);
        })
    }
  
    @ApiConsumes('application/json')
    @ApiOkResponse({
      status: 200,
      description: 'Get book by property was successfully completed',
      type: BookEntity,
    })
    @ApiForbiddenResponse({
      status: 403,
      description: 'Get book by property failed',
    })
    @ApiUnauthorizedResponse({
      status: 401,
      description: 'book acces token is not present or is invalid',
    })
    @ApiParam({
      name: 'propertie',
      type: String,
      example: 'email:hello@world.com',
      required: true,
      description:
        "Param extracted from URL, it's used has a filter in the query to db",
    })
    @UseGuards(AuthGuard('jwt'))
    @Get(ApiUserUrls.API_URL_BOOK_BY_PROPERTIE)
    public findByPropertie(
      @Headers() headers,
  
      @Param('propertie') propertie: string,
      @Res() response,
    ): Promise<BookEntity> {
      const propertieObject: FindOneOptions = buildFindOneOptions(propertie);
      return this.bookService
        .findByPropertie(propertieObject)
        .then((book) => {
          const bookAll: GetBookDto = {
            id: book.id.toString(),
              ISBN: book.ISBN,
              name: book.name,
              type: book.type,
              description: book.description,
              publicationDate: book.publicationDate,
              editors: book.editors,
              autors: book.autors,
              photo: book.photo,
          };
          return response.status(HttpStatus.OK).json(bookAll);
        })
    }
  
    @ApiConsumes('application/json')
    @ApiOkResponse({
      status: 200,
      description: 'Create book was successfully completed',
      type: BookEntity,
    })
    @ApiForbiddenResponse({
      status: 403,
      description: 'Create book failed',
    })
    @ApiUnauthorizedResponse({
      status: 401,
      description: 'book acces token is not present or is invalid',
    })
    @ApiParam({
      name: 'body',
      type: CreateBookDto,
      required: true,
      description: 'book to save on the db',
    })
    @Post()
    public create(
      @Headers() headers,
      @Body() body: CreateBookDto,
      @Res() response,
    ): Promise<BookEntity> {
     // body.password = decryptPassword(body.password);
      return this.responseBuilderService.buildPromiseResponse(
        this.bookService.create(body),
        response,
        HttpStatus.CREATED,
        HttpStatus.FORBIDDEN,
        headers['Accept-Language']
      );
    }
  
    @ApiConsumes('application/json')
    @ApiOkResponse({
      status: 200,
      description: 'Delete book was successfully completed',
      type: String,
    })
    @ApiForbiddenResponse({
      status: 403,
      description: 'Delete book failed',
    })
    @ApiUnauthorizedResponse({
      status: 401,
      description: 'book acces token is not present or is invalid',
    })
    @ApiParam({
      name: 'id',
      type: Number,
      required: true,
      description: 'Id of the book to delete from the db',
    })
    @UseGuards(AuthGuard('jwt'))
    @Delete(ApiUserUrls.API_URL_BOOK_DELETE)
    public delete(
      @Headers() headers,
      @Param('id') bookId: number,
      @Res() response,
    ): Promise<BookEntity> {
      return this.responseBuilderService.buildPromiseResponse(
        this.bookService.delete(bookId),
        response,
        HttpStatus.OK,
        HttpStatus.FORBIDDEN,
        headers['Accept-Language']
      );
    }
  
    @ApiConsumes('application/json')
    @ApiOkResponse({
      status: 200,
      description: 'Update book was successfully completed',
      type: BookEntity,
    })
    @ApiForbiddenResponse({
      status: 403,
      description: 'Update book failed',
    })
    @ApiUnauthorizedResponse({
      status: 401,
      description: 'book acces token is not present or is invalid',
    })
    @ApiParam({
      name: 'id',
      type: Number,
      required: true,
      description: 'Id of the book to update',
    })
    @ApiParam({
      name: 'body',
      type: UpdateBookDto,
      required: true,
      description: 'book data modified',
    })
    @UseGuards(AuthGuard('jwt'))
    @Put(ApiUserUrls.API_URL_BOOK_UPDATE)
    public update(
      @Headers() headers,
      @Param('id') id: number,
      @Body() body: UpdateBookDto,
      @Res() response,
    ): Promise<BookEntity> {
      const propertieObject: FindOneOptions = buildFindOneOptions(`${id}`);
     /*  if (body?.password) {
        body.password = decryptPassword(body?.password);
      } */
      return this.responseBuilderService.buildPromiseResponse(
        this.bookService.update(propertieObject, body),
        response,
        HttpStatus.OK,
        HttpStatus.FORBIDDEN,
        headers['Accept-Language']
      );
    }





  /*   @Get(':number') 
    bookId(@Param('number') number): any {
    return this.booksService.bookId(number);
  } */
  }
  