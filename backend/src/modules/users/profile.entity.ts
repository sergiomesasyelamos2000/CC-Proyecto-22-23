import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ROLE_ENUM } from './../../../shared/enums/role.enum';

/**
 * We save hersse private parameters of the user
 */
@Entity()
export class Profile {
  /* @ApiProperty({ name: 'ROLE_ENUM', enum: ROLE_ENUM })
  @Column('enum')
  @IsArray()
  roles: ROLE_ENUM[]; */
  @ApiProperty({ example: '1234' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'prueba@gmail.com' })
  @Column({
    type: 'set',
    enum: ROLE_ENUM,
    default: ROLE_ENUM.READER,
  })
  role: ROLE_ENUM[];
}