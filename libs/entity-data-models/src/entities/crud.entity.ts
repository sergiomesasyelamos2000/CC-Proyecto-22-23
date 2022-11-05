import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

/**
 * We save here private parameters of the user
 */
@Entity()
export class CrudEntity {

  @ApiProperty({ example: '1234' })
  @PrimaryGeneratedColumn()
  id: number;
}
