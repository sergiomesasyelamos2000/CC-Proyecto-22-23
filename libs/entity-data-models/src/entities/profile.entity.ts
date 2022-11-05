import { ROLE_ENUM } from '../enums/role.enum';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray } from 'class-validator';
import { CrudEntity } from './crud.entity';

/**
 * We save here private parameters of the user
 */
@Entity()
export class Profile extends CrudEntity {
  @ApiProperty({ enum: ROLE_ENUM, enumName: 'ROLE_ENUM' })
  @Column('enum')
  @IsArray()
  roles: ROLE_ENUM[];

  @ApiProperty({ example: 'prueba@gmail.com' })
  @Column('varchar')
  email: string;

  @ApiProperty({ example: 'Sergio' })
  @Column('varchar')
  name: string;

  @ApiProperty({ example: 'Contrasena' })
  @Column('varchar')
  password: string;

  @ApiProperty({ example: 'Mesas' })
  @Column('varchar')
  surname: string;
}
