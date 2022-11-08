import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity } from 'typeorm';
import { CrudEntity } from './crud.entity';

/* export interface User {
  email: string;
  name: string;
  password: string;
  surname: string;
} */

@Entity()
export class Book extends CrudEntity {
  @ApiProperty({ example: 'Sergio' })
  @Column('varchar')
  ISBN: string;

  @ApiProperty({ example: 'root@root.com' })
  @Column('varchar')
  name: string;

  @ApiProperty({ example: 'root' })
  @Column('varchar')
  type: string;

  @ApiProperty({ example: 'Mesas' })
  @Column('varchar')
  description: string;

  @ApiProperty({ example: 'Mesas' })
  @Column('varchar')
  publicationDate: string;

  @ApiProperty({ example: 'root@root.com' })
  @Column('varchar')
  editors: string;

  @ApiProperty({ example: 'root' })
  @Column('varchar')
  auditors: string;
}
