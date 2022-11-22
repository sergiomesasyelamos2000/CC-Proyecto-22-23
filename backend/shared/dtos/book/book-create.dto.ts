import { ApiProperty } from '@nestjs/swagger';
import { Book } from '../../interface/book.model';

export class CreateBookDto implements Book {
  @ApiProperty({
    description: 'Email for entity user',
    type: String,
    example: 'prueba@gmail.com',
  })
  ISBN: string;

  @ApiProperty({
    description: 'Name for entity user',
    type: String,
    example: 'Sergio',
  })
  name: string;

  @ApiProperty({
    description: 'Password for entity user',
    type: String,
    example: 'Contrasena',
  })
  type: string;

  @ApiProperty({
    description: 'Surname for entity user',
    type: String,
    example: 'Mesas',
  })
  description: string;

  @ApiProperty({
    description: 'Name for entity user',
    type: String,
    example: 'Sergio',
  })
  publicationDate: string;

  @ApiProperty({
    description: 'Password for entity user',
    type: String,
    example: 'Contrasena',
  })
  editors: string;

  @ApiProperty({
    description: 'Surname for entity user',
    type: String,
    example: 'Mesas',
  })
  autors: string;

  @ApiProperty({
    description: 'Surname for entity user',
    type: String,
    example: 'Mesas',
  })
  photo: string;
}