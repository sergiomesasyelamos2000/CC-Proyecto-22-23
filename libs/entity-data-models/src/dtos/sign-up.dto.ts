import { ApiProperty } from '@nestjs/swagger';

export class SignUpDto {
  @ApiProperty({
    description: 'Email for entity user',
    type: String,
    example: 'pruebas@gmail.com',
  })
  email: string;

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
  password: string;

  @ApiProperty({
    description: 'Surname for entity user',
    type: String,
    example: 'Mesa',
  })
  surname: string;
}
