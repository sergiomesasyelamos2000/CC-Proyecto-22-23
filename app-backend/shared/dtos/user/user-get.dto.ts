import { ApiProperty } from '@nestjs/swagger';

export class GetUserDto {
  @ApiProperty({
    description: 'Id for entity user',
    type: String,
    example: '1234',
  })
  id: string;

  @ApiProperty({
    description: 'Email for entity user',
    type: String,
    example: 'prueba@gmail.com',
  })
  email: string;

  @ApiProperty({
    description: 'Name for entity user',
    type: String,
    example: 'Sergio',
  })
  name: string;

  @ApiProperty({
    description: 'Surname for entity user',
    type: String,
    example: 'Mesas',
  })
  surname: string;
}
