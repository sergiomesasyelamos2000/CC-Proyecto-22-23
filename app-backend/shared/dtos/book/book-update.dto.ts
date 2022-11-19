import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateBookDto {
    @ApiPropertyOptional({
        description: 'Email for entity user',
        type: String,
        example: 'prueba@gmail.com',
      })
      ISBN: string;
    
      @ApiPropertyOptional({
        description: 'Name for entity user',
        type: String,
        example: 'Sergio',
      })
      name: string;
    
      @ApiPropertyOptional({
        description: 'Password for entity user',
        type: String,
        example: 'Contrasena',
      })
      type: string;
    
      @ApiPropertyOptional({
        description: 'Surname for entity user',
        type: String,
        example: 'Mesas',
      })
      description: string;
    
      @ApiPropertyOptional({
        description: 'Name for entity user',
        type: String,
        example: 'Sergio',
      })
      publicationDate: string;
    
      @ApiPropertyOptional({
        description: 'Password for entity user',
        type: String,
        example: 'Contrasena',
      })
      editors: string;
    
      @ApiPropertyOptional({
        description: 'Surname for entity user',
        type: String,
        example: 'Mesas',
      })
      autors: string;

      @ApiPropertyOptional({
        description: 'Surname for entity user',
        type: String,
        example: 'Mesas',
      })
      photo: string;
    }