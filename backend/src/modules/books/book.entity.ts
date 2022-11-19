import { ApiProperty } from '@nestjs/swagger';
import * as bcrypt from 'bcrypt';
import { Book } from 'shared/interface/book.model';
import { crypt } from 'src/utilities/Utils';
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BookEntity implements Book { 
  @ApiProperty({ example: '1234' })
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ApiProperty({ example: '1234' })
  @Column('varchar')
  ISBN: string;

  @ApiProperty({ example: 'prueba@gmail.com' })
  @Column('varchar')
  name: string;

  @ApiProperty({ example: 'Sergio' })
  @Column('varchar')
  type: string;

  @ApiProperty({ example: 'Contrasena' })
  @Column({ length: 5000 })
  description: string;

  @ApiProperty({ example: 'Mesas' })
  @Column('varchar')
  publicationDate: string;

  @ApiProperty({ example: 'Contrasena' })
  @Column('varchar')
  editors: string;

  @ApiProperty({ example: 'Mesas' })
  @Column('varchar')
  autors: string;

  @ApiProperty({ example: 'Mesas' })
  @Column('varchar')
  photo: string;
}
