import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../interface/user.model';

export class CreateUserDto implements User {
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
    description: 'Password for entity user',
    type: String,
    example: 'Contrasena',
  })
  password: string;

  @ApiProperty({
    description: 'Surname for entity user',
    type: String,
    example: 'Mesas',
  })
  surname: string;
}